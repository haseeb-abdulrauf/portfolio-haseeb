import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Copy, Mail, X } from 'lucide-react';

const ToastContext = createContext({
  showToast: () => {},
  triggerEmailAction: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, title = 'Notification') => {
    setToast({ message, title });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const triggerEmailAction = (e, email = 'iamhaseebabdulrauf@gmail.com') => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // 1. Copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).catch(() => {});
    }

    // 2. Open Gmail compose window directly
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    // 3. Fallback to mailto protocol if popups blocked or native app available
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = `mailto:${email}`;
    }

    // 4. Trigger Toast Notification
    showToast(email, 'Email Copied & Opening Compose');
  };

  return (
    <ToastContext.Provider value={{ showToast, triggerEmailAction }}>
      {children}
      
      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 pointer-events-auto"
          >
            <div className="p-4 rounded-2xl bg-[#091b36]/95 border border-cyan-400/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-start gap-3.5 relative overflow-hidden">
              {/* Glowing Left Accent Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600" />
              
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    {toast.title}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-xs font-semibold text-slate-100 mt-0.5 truncate">
                  {toast.message}
                </p>
                <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5 font-mono">
                  <Copy className="w-3 h-3 text-cyan-400" />
                  <span>Address copied • Gmail composer opened</span>
                </p>
              </div>

              <button
                onClick={() => setToast(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

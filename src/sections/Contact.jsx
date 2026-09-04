import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/data';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, User, MessageSquare, Sparkles, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Contact = () => {
  const { personal } = portfolioData;
  const { triggerEmailAction } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Social Media Management',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const openComposer = (to, subject, body) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      typeof navigator !== 'undefined' ? navigator.userAgent : ''
    ) || (typeof window !== 'undefined' && window.innerWidth < 768);

    if (isMobile) {
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;
      const newWin = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // Check if Formspree Form ID is set in personal data or fallback
    const formId = personal.formspreeId || 'YOUR_FORMSPREE_ID';

    if (formId === 'YOUR_FORMSPREE_ID') {
      // Fallback preview mode when Formspree ID is not yet provided
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.service} from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
        openComposer(personal.email, subject, body);
      }, 800);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          service: 'Social Media Management',
          message: '',
        });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMsg(data.errors.map(err => err.message).join(', '));
        } else {
          // If Formspree fails, offer direct Gmail trigger
          setErrorMsg('Form service offline. Opening direct email composer...');
          const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.service} from ${formData.name}`);
          const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
          openComposer(personal.email, subject, body);
        }
      }
    } catch (error) {
      console.error('Formspree submit error:', error);
      // Fallback to direct Gmail compose on network error
      const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.service} from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
      openComposer(personal.email, subject, body);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 scroll-mt-20 relative bg-transparent overflow-hidden border-t border-white/10">
      {/* Multi-Tone Ambient Light Aura */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-amber-500/10 rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 relative">
          <span className="px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-[11px] font-mono font-bold tracking-widest uppercase inline-flex items-center gap-2 mb-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Get In Touch
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white leading-tight mb-2">
            Let's create something{" "}
            <span className="font-serif italic font-normal bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
              meaningful together.
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-sans">
            Have a campaign to launch, social media presence to scale, or e-commerce store to optimize? Drop a message below.
          </p>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cockpit Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-2 lg:order-1 space-y-6"
          >
            {/* Status Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  {personal.availability || "Available for New Projects"}
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400 flex items-center gap-2 mt-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typical Response Time: Within 2 Hours</span>
              </p>
            </div>

            {/* Contact Channels Grid */}
            <div className="space-y-4">
              {/* Email Card */}
              <button
                onClick={(e) => triggerEmailAction(e, personal.email)}
                className="group p-5 rounded-2xl border border-white/10 bg-slate-950/40 hover:bg-slate-900/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 flex items-center gap-4 w-full text-left cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Email Directly</span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate block">
                    {personal.email}
                  </span>
                </div>
              </button>

              {/* Location & LinkedIn Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md">
                  <MapPin className="w-5 h-5 text-cyan-400 mb-2" />
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Location</span>
                  <span className="text-xs font-semibold text-white">{personal.location}</span>
                </div>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-white/10 bg-slate-950/40 hover:bg-slate-900/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 block"
                >
                  <Linkedin className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">LinkedIn</span>
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">Connect Profile</span>
                </a>
              </div>
            </div>

            {/* Trust Footer */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3 text-slate-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strict Privacy Guaranteed • Zero Spam Policy</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="p-6 sm:p-7 rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-950/80 to-slate-950/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              
              {/* Ambient Glow Aura */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-5">
                Fill out the details below and I'll get back to you shortly.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-center space-y-4 my-8"
                  >
                    <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-display">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for reaching out, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your email client window has been opened and I will reply within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white font-bold uppercase transition-all mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Your Name</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans"
                        />
                      </div>

                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold block">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans cursor-pointer"
                      >
                        <option value="Social Media Management">Social Media Management & Organic Growth</option>
                        <option value="Meta Advertising & Paid Ads">Meta Advertising & Paid Ads (FB & IG)</option>
                        <option value="Local SEO & Business Profile">Local SEO & Google Business Profile</option>
                        <option value="E-Commerce Operations">E-Commerce Operations (Shopify, Daraz, eBay)</option>
                        <option value="General Inquiry">General Strategic Consultation</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Project Details / Message</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your business goals, target audience, or campaign requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-white text-blue-600 hover:bg-slate-100 font-mono text-sm tracking-wider font-bold shadow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-blue-600" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


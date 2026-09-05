'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useScrollSpy';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  twitter: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.355H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  mail: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export function Contact() {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, this would send to an API endpoint
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="section bg-surface-950/30"
      aria-labelledby="contact-title"
      ref={ref}
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div
            className={cn(
              'grid lg:grid-cols-2 gap-12 lg:gap-16 items-start',
              isVisible ? 'animate-reveal' : 'opacity-0'
            )}
          >
            <div>
              <div className="space-y-2 mb-8">
                <Badge variant="accent" className="mb-4">Get in Touch</Badge>
                <h2 id="contact-title" className="font-display text-display-lg font-bold text-foreground">
                  Let's build <span className="gradient-text">something great</span>
                </h2>
              </div>

              <p className="text-body-lg text-muted-foreground mb-10 leading-relaxed">
                I'm always open to discussing new projects, trading system architectures,
                automation challenges, or 3D web experiences. Whether you have a clear brief
                or just an idea, let's talk.
              </p>

              <div className="space-y-6 mb-10">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-2xl bg-surface-800/50 border border-surface-700',
                      'hover:border-brand-500/30 hover:bg-surface-800 transition-all duration-300'
                    )}
                    aria-label={social.label}
                  >
                    <div className={cn(
                      'p-3 rounded-xl flex-shrink-0',
                      social.icon === 'mail'
                        ? 'bg-accent-500/10 text-accent-500'
                        : 'bg-brand-500/10 text-brand-500'
                    )}>
                      {iconMap[social.icon]}
                    </div>
                    <div>
                      <div className="text-caption text-muted-foreground">{social.label}</div>
                      <div className="text-body font-medium text-foreground truncate">
                        {social.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-br from-brand-500/10 via-transparent to-accent-500/10 border border-brand-500/20 rounded-2xl">
                <div className="font-display text-display-sm font-bold text-foreground mb-2">
                  Response Time
                </div>
                <div className="text-body text-muted-foreground">
                  Usually within 24 hours. For urgent trading system inquiries, mention
                  <span className="font-medium text-brand-500">"TRADING"</span> in the subject.
                </div>
              </div>
            </div>

            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="mb-2">Name</Label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700',
                            'text-foreground placeholder:text-muted-foreground',
                            'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            'transition-all duration-200'
                          )}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-2">Email</Label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700',
                            'text-foreground placeholder:text-muted-foreground',
                            'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            'transition-all duration-200'
                          )}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="mb-2">Subject</Label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700',
                          'text-foreground',
                          'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
                          'disabled:opacity-50 disabled:cursor-not-allowed',
                          'transition-all duration-200',
                          'appearance-none bg-no-repeat bg-right',
                          'bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2364748b%27 stroke-width=%272%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E")]',
                          'pr-10'
                        )}
                      >
                        <option value="">Select a topic</option>
                        <option value="trading">Trading System Development</option>
                        <option value="automation">Process Automation</option>
                        <option value="web3d">3D Web / WebGL</option>
                        <option value="webdev">Full-Stack Web Development</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="mb-2">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700',
                          'text-foreground placeholder:text-muted-foreground resize-y',
                          'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
                          'disabled:opacity-50 disabled:cursor-not-allowed',
                          'transition-all duration-200',
                          'font-sans'
                        )}
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto gap-2"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : status === 'success' ? (
                          <>
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Sent! I'll reply soon.
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
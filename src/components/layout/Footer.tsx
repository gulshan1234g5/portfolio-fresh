'use client';

import * as React from 'react';
import { navLinks, socialLinks } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-800/50 bg-surface-950/50 backdrop-blur-sm">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <a
              href="#hero"
              className="font-display text-display-lg font-bold text-foreground mb-6 inline-block"
            >
              GT
            </a>
            <p className="text-body-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Creative Developer, Automation Builder, Trading Systems Explorer.
              Building digital experiences that feel alive with code.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center w-11 h-11 rounded-xl bg-surface-800 border border-surface-700',
                    'text-muted-foreground hover:text-brand-500 hover:border-brand-500/30',
                    'transition-all duration-300'
                  )}
                  aria-label={social.label}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-display-sm font-semibold mb-6">Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-body text-muted-foreground hover:text-brand-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-display-sm font-semibold mb-6">Connect</h3>
            <address className="not-italic space-y-3">
              <a
                href="mailto:gulshan1234g5@gmail.com"
                className="flex items-center gap-3 text-body text-muted-foreground hover:text-brand-500 transition-colors"
              >
                {iconMap.mail}
                <span>gulshan1234g5@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-body text-muted-foreground">
                {iconMap.twitter}
                <span>Available for freelance</span>
              </div>
              <div className="flex items-center gap-3 text-body text-muted-foreground">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span>India (Remote)</span>
              </div>
            </address>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-muted-foreground">
            © {currentYear} Gulshan Toppo. Built with React, TypeScript, Tailwind & Three.js.
          </p>
          <div className="flex items-center gap-6 text-body-sm text-muted-foreground">
            <a href="#hero" className="hover:text-brand-500 transition-colors">Back to top</a>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <a
              href="https://github.com/gulshan1234g5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-500 transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
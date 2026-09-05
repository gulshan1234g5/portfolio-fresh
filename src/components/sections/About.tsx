'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useScrollSpy';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'brand' as const, icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
  )},
  { key: 'backend', label: 'Backend', color: 'accent' as const, icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
  )},
  { key: '3d', label: '3D / WebGL', color: 'brand' as const, icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17a4 4 0 01-4-4v-2"/></svg>
  )},
  { key: 'tools', label: 'Tools & DevOps', color: 'accent' as const, icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
  )},
  { key: 'trading', label: 'Trading Systems', color: 'brand' as const, icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"/></svg>
  )},
];

export function About() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="about"
      className="section bg-surface-950/30"
      aria-labelledby="about-title"
      ref={ref}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div
            className={cn(
              'grid lg:grid-cols-3 gap-8 lg:gap-16 items-start',
              isVisible ? 'animate-reveal' : 'opacity-0'
            )}
          >
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <Badge variant="brand">About Me</Badge>
                <h2 id="about-title" className="font-display text-display-lg font-bold text-foreground">
                  Building systems that <span className="gradient-text">think, automate & evolve</span>
                </h2>
              </div>

              <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  I'm a creative developer passionate about building digital experiences that feel alive.
                  With a background spanning algorithmic trading, process automation, and interactive 3D web,
                  I bridge the gap between complex systems and intuitive interfaces.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  My journey started with freelance web development, evolved through enterprise agency work,
                  and now focuses on high-performance trading infrastructure and developer tooling.
                  I believe the best software is invisible—it just works, scales, and delights.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  When not coding, you'll find me researching market microstructure, experimenting with
                  WebGL shaders, or automating away repetitive tasks. I'm currently building a next-gen
                  trading platform with real-time risk management and AI-assisted strategy development.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {skillCategories.map((cat) => (
                  <Badge key={cat.key} variant={cat.color} className="gap-1.5">
                    {cat.icon}
                    {cat.label}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-24">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-surface-800/50 rounded-xl">
                      <div className="p-3 bg-brand-500/10 rounded-xl text-brand-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display text-display-sm font-bold text-foreground">Fast Delivery</div>
                        <div className="text-body-sm text-muted-foreground">2-4 week sprints</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-surface-800/50 rounded-xl">
                      <div className="p-3 bg-accent-500/10 rounded-xl text-accent-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display text-display-sm font-bold text-foreground">Quality First</div>
                        <div className="text-body-sm text-muted-foreground">Tests, types, reviews</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-surface-800/50 rounded-xl">
                      <div className="p-3 bg-brand-500/10 rounded-xl text-brand-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display text-display-sm font-bold text-foreground">Long-term Support</div>
                        <div className="text-body-sm text-muted-foreground">Maintenance & scaling</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
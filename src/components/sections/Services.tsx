'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { services, type Service } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useScrollSpy';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const serviceIcons: Record<string, React.ReactNode> = {
  'trending-up': <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"/></svg>,
  bot: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>,
  cube: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17a4 4 0 01-4-4v-2"/></svg>,
  code: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
};

export function Services() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-title"
      ref={ref}
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div
            className={cn(
              'text-center mb-16',
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            )}
          >
            <Badge variant="accent" className="mb-4">What I Do</Badge>
            <h2 id="services-title" className="font-display text-display-lg font-bold text-foreground mb-4">
              Services & <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end development from architecture to deployment. Specialized in complex systems
              that require performance, reliability, and real-time capabilities.
            </p>
          </div>

          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 gap-6',
              isVisible ? 'animate-reveal' : 'opacity-0'
            )}
            style={{ animationDelay: '200ms' }}
          >
            {services.map((service: Service, index: number) => (
              <Card
                key={service.id}
                className="group h-full flex flex-col overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="flex-1 flex flex-col p-8">
                  <div
                    className={cn(
                      'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110',
                      index % 2 === 0
                        ? 'bg-brand-500/10 text-brand-500 group-hover:bg-brand-500/20'
                        : 'bg-accent-500/10 text-accent-500 group-hover:bg-accent-500/20'
                    )}
                  >
                    {serviceIcons[service.icon]}
                  </div>

                  <h3 className="font-display text-display-sm font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={feature} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${featureIndex * 50}ms` }}>
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                          <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-body text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full md:w-auto mt-auto group-hover:border-brand-500/50 group-hover:text-brand-500">
                    Explore {service.title}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={cn(
              'mt-16 text-center',
              isVisible ? 'animate-fade-in' : 'opacity-0'
            )}
            style={{ animationDelay: '600ms' }}
          >
            <p className="text-body-lg text-muted-foreground mb-6 max-w-xl mx-auto">
              Need something custom? Let's discuss your specific requirements and architect
              a solution that fits your exact needs.
            </p>
            <Button size="lg" asChild className="gap-2">
              <a href="#contact">Start a Conversation</a>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { experience, type Experience } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useScrollSpy';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const typeColors: Record<string, 'brand' | 'accent' | 'default'> = {
  'full-time': 'brand',
  freelance: 'accent',
  contract: 'default',
};

const typeIcons: Record<string, React.ReactNode> = {
  'full-time': <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  freelance: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  contract: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
};

export function Experience() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
      ref={ref}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div
            className={cn(
              'text-center mb-16',
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            )}
          >
            <Badge variant="accent" className="mb-4">Journey</Badge>
            <h2 id="experience-title" className="font-display text-display-lg font-bold text-foreground mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From freelance beginnings to leading trading infrastructure at a FinTech startup.
              Each role built the foundation for what comes next.
            </p>
          </div>

          <div
            className={cn(
              'space-y-8',
              isVisible ? 'animate-reveal' : 'opacity-0'
            )}
            style={{ animationDelay: '200ms' }}
          >
            {experience.map((exp: Experience, index: number) => (
              <Card key={exp.id} className="group overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 lg:p-8 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-display text-display-sm font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <Badge
                          variant={typeColors[exp.type]}
                          className="gap-1.5 text-xs"
                        >
                          {typeIcons[exp.type]}
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-body-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        <span className="hidden sm:inline" aria-hidden="true">·</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="text-right sm:hidden">
                      <div className="font-mono text-caption text-muted-foreground">{exp.period}</div>
                    </div>
                  </div>

                  <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {index < experience.length - 1 && (
                    <Separator className="my-6 opacity-50" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Visual */}
          <div
            className={cn(
              'mt-16 hidden lg:block',
              isVisible ? 'animate-fade-in' : 'opacity-0'
            )}
            style={{ animationDelay: '400ms' }}
          >
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500/30 via-transparent to-accent-500/30" />
              {experience.map((exp: Experience, index: number) => (
                <div key={exp.id} className="relative pb-12 last:pb-0">
                  <div className="absolute left-3 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-4 bg-surface-950 z-10"
                    style={{
                      borderColor: typeColors[exp.type] === 'brand' ? '#00cdf5' : typeColors[exp.type] === 'accent' ? '#d946ef' : '#64748b',
                    }}
                  />
                  <div className="ml-6">
                    <div className="font-display text-display-sm font-semibold text-foreground">{exp.role}</div>
                    <div className="text-body-sm text-muted-foreground">{exp.company} • {exp.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
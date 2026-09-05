'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { skills } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useScrollSpy';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'brand' as const, icon: 'code' },
  backend: { label: 'Backend', color: 'accent' as const, icon: 'server' },
  '3d': { label: '3D / WebGL', color: 'brand' as const, icon: 'cube' },
  tools: { label: 'Tools & DevOps', color: 'accent' as const, icon: 'wrench' },
  trading: { label: 'Trading Systems', color: 'brand' as const, icon: 'trending-up' },
};

const iconMap = {
  code: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
  server: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>,
  cube: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17a4 4 0 01-4-4v-2"/></svg>,
  wrench: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  'trending-up': <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"/></svg>,
};

export function Skills() {
  const [ref, isVisible] = useIntersectionObserver();

  const groupedSkills = skills.reduce((acc: Record<string, typeof skills>, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(groupedSkills).map(([key, items]) => ({
    ...categoryConfig[key as keyof typeof categoryConfig],
    key,
    items: items.sort((a, b) => b.proficiency - a.proficiency),
  }));

  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-title"
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
            <Badge variant="brand" className="mb-4">Core Competencies</Badge>
            <h2 id="skills-title" className="font-display text-display-lg font-bold text-foreground mb-4">
              Technologies & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across the full stack with specialized knowledge in trading infrastructure
              and real-time 3D graphics. Always learning, always building.
            </p>
          </div>

          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
              isVisible ? 'animate-reveal' : 'opacity-0'
            )}
            style={{ animationDelay: '200ms' }}
          >
            {categories.map((category, catIndex) => (
              <Card key={category.key} className="group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={cn(
                        'p-3 rounded-xl transition-all duration-300 group-hover:scale-110',
                        category.color === 'brand'
                          ? 'bg-brand-500/10 text-brand-500'
                          : 'bg-accent-500/10 text-accent-500'
                      )}
                    >
                      {iconMap[category.icon as keyof typeof iconMap]}
                    </div>
                    <div>
                      <h3 className="font-display text-display-sm font-semibold text-foreground">
                        {category.label}
                      </h3>
                      <p className="text-body-sm text-muted-foreground">
                        {category.items.length} technologies
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={cn(
                          'animate-slide-up',
                          isVisible ? '' : 'opacity-0'
                        )}
                        style={{ animationDelay: `${catIndex * 100 + index * 50}ms` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-body font-medium text-foreground">{skill.name}</span>
                          <span className="text-body-sm text-muted-foreground font-mono">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                          <div
                            className={cn(
                              'h-full rounded-full transition-all duration-1000 ease-out',
                              category.color === 'brand'
                                ? 'bg-brand-500'
                                : 'bg-accent-500'
                            )}
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
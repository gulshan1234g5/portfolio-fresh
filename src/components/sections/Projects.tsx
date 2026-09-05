'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { projects, type Project } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useScrollSpy';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categoryColors: Record<string, 'brand' | 'accent'> = {
  Trading: 'brand',
  Automation: 'accent',
  'AI/DevTools': 'brand',
  '3D/WebGL': 'accent',
};

const categoryIcons: Record<string, React.ReactNode> = {
  Trading: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"/></svg>,
  Automation: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>,
  'AI/DevTools': <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  '3D/WebGL': <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17a4 4 0 01-4-4v-2"/></svg>,
};

export function Projects() {
  const [ref, isVisible] = useIntersectionObserver();
  const [filter, setFilter] = React.useState<'all' | string>('all');

  const categories = ['all', ...Array.from(new Set(projects.map((p: Project) => p.category)))];
  const filteredProjects = filter === 'all' ? projects : projects.filter((p: Project) => p.category === filter);

  return (
    <section
      id="projects"
      className="section bg-surface-950/30"
      aria-labelledby="projects-title"
      ref={ref}
    >
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              'mb-12',
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <Badge variant="brand" className="mb-4">Selected Work</Badge>
                <h2 id="projects-title" className="font-display text-display-lg font-bold text-foreground">
                  Projects that <span className="gradient-text">matter</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={filter === cat}
                    aria-controls={`panel-${cat}`}
                    id={`tab-${cat}`}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      'px-4 py-2 rounded-xl text-body-sm font-medium transition-all duration-200',
                      filter === cat
                        ? 'bg-brand-500 text-surface-950 shadow-glow'
                        : 'bg-surface-800 text-muted-foreground hover:text-foreground hover:bg-surface-700'
                    )}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
              isVisible ? 'animate-reveal' : 'opacity-0'
            )}
            style={{ animationDelay: '200ms' }}
            role="tabpanel"
            id={`panel-${filter}`}
            aria-labelledby={`tab-${filter}`}
          >
            {filteredProjects.map((project: Project, index: number) => (
              <Card
                key={project.id}
                className="group h-full flex flex-col overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden bg-surface-800">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="brand" className="text-xs">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Badge variant={categoryColors[project.category] || 'brand'} className="gap-1.5">
                      {categoryIcons[project.category]}
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="font-display text-display-sm font-semibold text-foreground mb-3 group-hover:text-brand-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 5} more
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="border-t border-surface-800 pt-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2">
                      {project.github !== '#' && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                          </a>
                        </Button>
                      )}
                      {project.link !== '#' && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                    <span className="text-caption text-muted-foreground font-mono">
                      {project.id}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
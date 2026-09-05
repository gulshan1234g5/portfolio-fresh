'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useScrollSpy';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const tradingFeatures = [
  {
    title: 'Strategy Research',
    description: 'Walk-forward validated price action strategies with pure PA logic: liquidity sweeps, BOS/CHoCH, order blocks, FVG confluence.',
    metrics: ['OOS PF: 1.96', 'WFE: 232%', '206 trades'],
    icon: 'chart',
  },
  {
    title: 'Risk Management',
    description: 'VaR-based position sizing, Kelly criterion, drawdown ladder (4 tiers), correlation checks, sector concentration limits.',
    metrics: ['1% risk/trade', 'Max 6% heat', '3% daily DD'],
    icon: 'shield',
  },
  {
    title: 'Auto Execution',
    description: 'Kite MCP integration for real-time orders, GTT stop-losses, ATR Chandelier trailing, session recovery, circuit breakers.',
    metrics: ['Sub-second latency', 'GTT SL/T1', 'Auto-recovery'],
    icon: 'zap',
  },
  {
    title: 'Data Pipeline',
    description: 'Unified LTP cache, FII/DII flows, historical data via MCP, Nifty regime detection, sector heatmaps, options chain PCR/GEX.',
    metrics: ['245 symbols', '19 sectors', 'Real-time cache'],
    icon: 'database',
  },
  {
    title: 'Autonomous Research',
    description: 'Karpathy-style RL loop: adaptive random-walk over PA params, git-committed mutations, overnight cron experiments, champion tracking.',
    metrics: ['40 iter/night', 'TSV logging', 'Git-backed'],
    icon: 'cpu',
  },
  {
    title: 'Observability',
    description: 'Structured logging, memory tree (L0/L1), log compressor, hotness scorer, cron situation reports, emergency stop, audit trail.',
    metrics: ['Tiered memory', 'Token budgeting', 'Auto-seal'],
    icon: 'eye',
  },
];

const icons = {
  chart: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  shield: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  zap: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  database: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>,
  cpu: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
  eye: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
};

const techStack = [
  { name: 'Python 3.14', category: 'Core' },
  { name: 'TypeScript', category: 'Core' },
  { name: 'React / Three.js', category: 'Frontend' },
  { name: 'Node.js / FastAPI', category: 'Backend' },
  { name: 'PostgreSQL / Redis', category: 'Data' },
  { name: 'Kite MCP (Zerodha)', category: 'Broker' },
  { name: 'Docker / Kubernetes', category: 'Infra' },
  { name: 'Restic / Rclone', category: 'Backup' },
  { name: 'Cron / Systemd', category: 'Scheduling' },
  { name: 'Git / Gitleaks', category: 'Security' },
];

export function TradingLab() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="trading"
      className="section bg-surface-950/30"
      aria-labelledby="trading-title"
      ref={ref}
    >
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              'text-center mb-16',
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            )}
          >
            <Badge variant="brand" className="mb-4">Trading Laboratory</Badge>
            <h2 id="trading-title" className="font-display text-display-lg font-bold text-foreground mb-4">
              <span className="gradient-text">Algorithmic Trading</span> Infrastructure
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Production-grade trading system running on Android → proot Ubuntu → OpenCode.
              Pure price action, CNC delivery only, validated via walk-forward benchmark gates.
            </p>
          </div>

          {/* Feature Grid */}
          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16',
              isVisible ? 'animate-reveal' : 'opacity-0'
            )}
            style={{ animationDelay: '200ms' }}
          >
            {tradingFeatures.map((feature, index: number) => (
              <Card key={feature.title} className="group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110',
                      index % 3 === 0
                        ? 'bg-brand-500/10 text-brand-500 group-hover:bg-brand-500/20'
                        : index % 3 === 1
                        ? 'bg-accent-500/10 text-accent-500 group-hover:bg-accent-500/20'
                        : 'bg-brand-500/10 text-brand-500 group-hover:bg-brand-500/20'
                    )}
                  >
                    {icons[feature.icon as keyof typeof icons]}
                  </div>

                  <h3 className="font-display text-display-sm font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-4 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {feature.metrics.map((metric: string, mIndex: number) => (
                      <Badge key={metric} variant="outline" className="text-xs font-mono">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="mb-12" />

          {/* Tech Stack */}
          <div
            className={cn(
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            )}
            style={{ animationDelay: '400ms' }}
          >
            <h3 className="font-display text-display-md font-bold text-foreground text-center mb-8">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {techStack.map((tech, index: number) => (
                <Card
                  key={tech.name}
                  className="text-center p-4 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="font-mono text-body font-medium text-foreground mb-1">
                      {tech.name}
                    </div>
                    <div className="text-caption text-muted-foreground">{tech.category}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Live Status */}
          <div
            className={cn(
              'mt-16',
              isVisible ? 'animate-fade-in' : 'opacity-0'
            )}
            style={{ animationDelay: '600ms' }}
          >
            <Card className="bg-gradient-to-br from-brand-500/10 via-transparent to-accent-500/10 border-brand-500/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                    </div>
                    <div>
                      <div className="font-display text-display-sm font-bold text-foreground">System Live</div>
                      <div className="text-body-sm text-muted-foreground">Phase 0 • ₹0 Tradable • Awaiting Funds</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button variant="outline" asChild>
                      <a href="https://github.com/gulshan1234g5" target="_blank" rel="noopener noreferrer">
                        View Source
                      </a>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href="#contact">Discuss Integration</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
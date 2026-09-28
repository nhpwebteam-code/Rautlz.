import { Badge } from "@/components/ui/badge";
import { Sparkles, Code2, Layers, Cpu } from "lucide-react";

export function HeroFallback() {
  return (
    <div className="w-full h-full min-h-[420px] sm:min-h-[500px] flex items-center justify-center relative select-none p-4">
      {/* Decorative Vector Layout representing floating devices and UI */}
      <div className="relative w-full max-w-lg aspect-[4/3] bg-surface rounded-3xl border border-border/80 shadow-[0_16px_40px_rgba(31,27,22,0.06)] p-6 flex flex-col justify-between overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
            <span className="w-2.5 h-2.5 rounded-full bg-olive" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F1B16]/30" />
          </div>
          <Badge variant="sample">RAULTZ // WORKSPACE</Badge>
        </div>

        {/* Floating Mock Device & Panels */}
        <div className="space-y-4 my-auto py-4">
          <div className="bg-surface-sunken p-4 rounded-xl border border-border/70 flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                [ 01 // ARCHITECTURE ]
              </span>
              <p className="font-display font-bold text-lg text-foreground">
                3D Interactive WebGL
              </p>
            </div>
            <Cpu className="w-6 h-6 text-olive" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-background/80 p-3 rounded-xl border border-border/70 space-y-1">
              <div className="flex items-center gap-1.5 text-terracotta text-xs font-mono font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                <span>Next.js App</span>
              </div>
              <span className="font-mono text-xl font-bold text-foreground block">
                99.8%
              </span>
              <span className="font-mono text-[10px] text-muted uppercase block">
                PERFORMANCE
              </span>
            </div>

            <div className="bg-background/80 p-3 rounded-xl border border-border/70 space-y-1">
              <div className="flex items-center gap-1.5 text-olive text-xs font-mono font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>GSAP Motion</span>
              </div>
              <span className="font-mono text-xl font-bold text-foreground block">
                60 FPS
              </span>
              <span className="font-mono text-[10px] text-muted uppercase block">
                SCROLL CHOREO
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-3 border-t border-border/60 flex items-center justify-between font-mono text-[11px] text-muted">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>EDITORIAL WEB ENGINEERING</span>
          </span>
          <span className="text-olive font-semibold">EST. 2026</span>
        </div>
      </div>
    </div>
  );
}

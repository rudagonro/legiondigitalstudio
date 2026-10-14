import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

/** A small overview with full, readable details on demand. Radix restores focus and scroll. */
export function CompactCard({ title, label, preview, summary, children, className = "" }: {
  title: string;
  label?: string;
  preview?: ReactNode;
  summary: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Dialog>
      <article className={`compact-card plate ${className}`}>
        <DialogTrigger asChild>
          <button type="button" className="compact-card-trigger" aria-label={`Ver detalles: ${title}`}>
            {preview ? <span className="compact-card-preview">{preview}</span> : null}
            {label ? <span className="compact-card-label">{label}</span> : null}
            <h3 className="compact-card-title">{title}</h3>
            <span className="compact-card-action">Ver detalles <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
          </button>
        </DialogTrigger>
      </article>
      <DialogContent className="card-detail-panel">
        <DialogTitle className="pr-7 font-display text-2xl leading-tight">{title}</DialogTitle>
        <DialogDescription className="text-base leading-relaxed">{summary}</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}

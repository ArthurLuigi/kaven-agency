import { cn } from "@/lib/utils"

type BrandMarkProps = {
  compact?: boolean
  className?: string
}

export function BrandMark({ compact = false, className }: BrandMarkProps) {
  return (
    <a className={cn("brand-mark", className)} href="#inicio" aria-label="Kaven Agency - início">
      <span className="brand-symbol" aria-hidden="true">
        <img src="/logo-kaven-mark.svg" alt="" />
      </span>
      {!compact && (
        <span className="brand-copy">
          <strong>KAVEN AGENCY</strong>
        </span>
      )}
    </a>
  )
}

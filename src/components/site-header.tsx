import { ArrowRightIcon, ChevronDownIcon, MenuIcon } from "lucide-react"

import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Soluções", href: "#metodo" },
  { label: "Planos", href: "#planos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === "#metodo" ? "nav-link-with-icon" : undefined}
            >
              {item.label}
              {item.href === "#metodo" && (
                <ChevronDownIcon aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>

        <Button asChild size="lg" className="desktop-header-cta accent-button">
          <a href="#contato">
            Falar com especialista
            <ArrowRightIcon aria-hidden="true" />
          </a>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label="Abrir menu"
              className="mobile-menu-trigger"
              size="icon-lg"
              variant="ghost"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet" side="right">
            <SheetHeader>
              <BrandMark />
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Navegue pelas seções da landing page.
              </SheetDescription>
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Navegação mobile">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <a href={item.href}>{item.label}</a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a className="mobile-nav-cta" href="#contato">
                  Falar com especialista
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

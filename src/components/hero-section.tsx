import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-background" aria-hidden="true">
        <img src="/hero-visual.svg" alt="" width="2048" height="967" />
      </div>

      <div className="page-shell hero-grid">
        <div className="hero-copy reveal">
          <h1>Estruturas digitais para vender mais. Crescer com previsibilidade.</h1>
          <p>
            Performance, branding e tecnologia em uma operação full-service — da
            estratégia ao lançamento.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="accent-button">
              <a href="#contato">
                Solicitar orçamento
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="outline-button">
              <a href="#planos">
                Ver planos
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
          </div>
          <span className="hero-proof">Design + Desenvolvimento + Estratégia</span>
        </div>

      </div>
    </section>
  )
}

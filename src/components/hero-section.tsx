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
          <span className="hero-eyebrow">Kaven Agency</span>
          <h1>Performance. Branding. Crescimento.</h1>
          <p>
            Construímos estruturas digitais para empresas que desejam crescer com
            posicionamento, autoridade e geração de oportunidades.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="accent-button">
              <a href="#contato">
                Solicitar orçamento
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="outline-button">
              <a href="#projetos">
                Ver projetos
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
          </div>
          <span className="hero-proof">Posicionamento + Autoridade + Oportunidades</span>
        </div>

      </div>
    </section>
  )
}

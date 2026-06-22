import { useEffect, useState } from "react"
import { ArrowRightIcon, InfoIcon, ShieldCheckIcon, TagIcon } from "lucide-react"

import { HeroSection } from "@/components/hero-section"
import { LeadForm, SiteFooter } from "@/components/lead-form"
import { MethodSection } from "@/components/method-section"
import { OfferCard } from "@/components/offer-card"
import { SiteHeader } from "@/components/site-header"
import { SocialProof } from "@/components/social-proof"
import { Toaster } from "@/components/ui/sonner"
import {
  growthPlans,
  implementationProjects,
  launchOffers,
  type Offer,
} from "@/data/offers"

function App() {
  const [selectedOffer, setSelectedOffer] = useState<string>()

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  function selectOffer(offer: Offer) {
    setSelectedOffer(offer.title)
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="site">
      <SiteHeader />
      <main>
        <HeroSection />

        <section className="projects-section section-pad" id="projetos">
          <div className="projects-background" aria-hidden="true">
            <img src="/projects-background.svg" alt="" />
          </div>
          <div className="page-shell projects-layout">
            <header className="projects-heading reveal">
              <span className="section-kicker">Projetos de implantação</span>
              <h2>Estruturamos sua empresa para crescer.</h2>
              <p>Presença, autoridade e uma estrutura digital pronta para gerar oportunidades.</p>
            </header>

            <div className="project-grid">
              {implementationProjects.map((offer, index) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  index={index}
                  onSelect={selectOffer}
                  variant="project"
                />
              ))}
            </div>

            <div className="launch-offer-stage reveal">
              <aside className="launch-offer" aria-labelledby="launch-offer-title">
                <div className="launch-offer-heading">
                  <span className="launch-offer-icon" aria-hidden="true">
                    <TagIcon />
                  </span>
                  <div>
                    <span>Condição especial de lançamento</span>
                    <h3 id="launch-offer-title">
                      Uma oportunidade para<br /> os primeiros clientes<span>.</span>
                    </h3>
                  </div>
                  <strong><i aria-hidden="true" />Vagas limitadas</strong>
                </div>
                <div className="launch-offer-grid">
                  {launchOffers.map((launchOffer) => (
                    <button
                      type="button"
                      className={launchOffer.offerId === "brand" ? "launch-offer-featured" : undefined}
                      key={launchOffer.offerId}
                      onClick={() => {
                        const offer = implementationProjects.find(
                          (item) => item.id === launchOffer.offerId,
                        )
                        if (offer) selectOffer(offer)
                      }}
                    >
                      {launchOffer.offerId === "brand" && (
                        <span className="launch-featured-label">
                          <i aria-hidden="true" />Mais escolhido
                        </span>
                      )}
                      <span className="launch-card-brand">
                        <span className="launch-card-logo" aria-hidden="true">
                          <img src="/logo-kaven-mark.png" alt="" />
                        </span>
                        <span className="launch-card-title">
                          <strong>{launchOffer.title}</strong>
                          <i aria-hidden="true" />
                        </span>
                      </span>
                      <span className="launch-price">
                        <del>{launchOffer.originalPrice}</del>
                        <strong>
                          <small>R$</small>
                          {launchOffer.launchPrice.replace("R$ ", "")}
                        </strong>
                      </span>
                      <ArrowRightIcon aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </aside>
              <p className="project-note">
                <InfoIcon />
                Escopo final definido após diagnóstico estratégico.
              </p>
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="planos">
          <div className="pricing-background" aria-hidden="true">
            <img
              src="/pricing-background.png"
              alt=""
              width="2048"
              height="1152"
            />
          </div>
          <div className="page-shell">
            <header className="section-heading reveal">
              <span className="section-kicker">Planos de performance</span>
              <h2>Gestão e crescimento contínuo.</h2>
              <p>
                Estratégia, mídia e criatividade trabalhando juntas para gerar
                crescimento consistente.
              </p>
            </header>

            <div className="offer-grid">
              {growthPlans.map((offer, index) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  index={index}
                  onSelect={selectOffer}
                />
              ))}
            </div>

            <p className="pricing-note">
              <ShieldCheckIcon />
              Planos de mídia não incluem o investimento nas plataformas.
            </p>
          </div>
        </section>

        <MethodSection />
        <SocialProof />
        <LeadForm selectedOffer={selectedOffer} />
      </main>
      <SiteFooter />
      <Toaster position="top-center" theme="dark" richColors />
    </div>
  )
}

export default App

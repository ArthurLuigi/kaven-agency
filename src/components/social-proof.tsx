const clientMarks = [
  "/logos/design-2.svg",
  "/logos/design-1.svg",
  "/logos/design.svg",
  "/logos/quadrado.svg",
  "/logos/bola.svg",
  "/logos/triangulo.svg",
]

export function SocialProof() {
  return (
    <section className="social-proof section-pad">
      <div className="page-shell">
        <div className="social-heading reveal">
          <h2>Confiança se constrói com trabalho bem feito.</h2>
          <p>Espaço preparado para cases, depoimentos e marcas atendidas.</p>
        </div>
        <div className="logo-rail" aria-label="Marcas atendidas">
          <div className="logo-track">
            {[0, 1].map((copy) => (
              <div className="logo-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
                {clientMarks.map((src, index) => (
                  <div className="logo-item" key={`${copy}-${src}`}>
                    <img src={src} alt={copy === 0 ? `Marca atendida ${index + 1}` : ""} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

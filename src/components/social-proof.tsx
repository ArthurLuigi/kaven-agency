const placeholderMarks = ["◈", "◐", "⌃", "◇", "◆", "◒"]

export function SocialProof() {
  return (
    <section className="social-proof section-pad">
      <div className="page-shell">
        <div className="social-heading reveal">
          <h2>Confiança se constrói com trabalho bem feito.</h2>
          <p>Espaço preparado para cases, depoimentos e marcas atendidas.</p>
        </div>
        <div className="logo-rail" aria-label="Espaços reservados para marcas atendidas">
          {placeholderMarks.map((mark, index) => (
            <div key={`${mark}-${index}`} aria-label={`Logo de cliente ${index + 1}`}>
              <span aria-hidden="true">{mark}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

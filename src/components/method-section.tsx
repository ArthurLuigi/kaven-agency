import { ArrowRightIcon } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Estratégia",
    description: "diagnóstico, posicionamento e plano de crescimento",
    icon: "/icons/mira.svg",
  },
  {
    number: "02",
    title: "Criação",
    description: "branding, conteúdo e interfaces",
    icon: "/icons/lapinhos.svg",
  },
  {
    number: "03",
    title: "Performance",
    description: "mídia, funis e otimização",
    icon: "/icons/crescimento.svg",
  },
  {
    number: "04",
    title: "Evolução",
    description: "dados, suporte e escala",
    icon: "/icons/foguetinho.svg",
  },
]

const differentiators = [
  { label: "Estratégias orientadas por dados", icon: "/icons/crescimento-laranja.svg" },
  { label: "Atendimento consultivo", icon: "/icons/pessoa-laranja.svg" },
  { label: "Estruturas personalizadas", icon: "/icons/raio-laranja.svg" },
  { label: "Foco em crescimento sustentável", icon: "/icons/mira-laranja.svg" },
  { label: "Transparência nos resultados", icon: "/icons/crescimento-laranja.svg" },
  { label: "Visão estratégica de marca e performance", icon: "/icons/mira-laranja.svg" },
]

export function MethodSection() {
  return (
    <section className="method-section section-pad" id="metodo">
      <div className="method-background" aria-hidden="true" />
      <div className="page-shell">
        <div className="method-grid">
          <div className="section-copy reveal">
            <h2>Tudo o que sua empresa precisa. Uma única operação.</h2>
            <p>
              Conectamos estratégia, criação, mídia e tecnologia para transformar
              investimento em ativos digitais e oportunidades reais.
            </p>
            <a className="text-link" href="#contato">
              <span>Conhecer nosso método</span>
              <ArrowRightIcon aria-hidden="true" />
            </a>
          </div>

          <ol className="process-list reveal">
            {steps.map((step) => {
              return (
                <li key={step.number}>
                  <span className="process-icon">
                    <img src={step.icon} alt="" aria-hidden="true" />
                  </span>
                  <strong>{step.number}</strong>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="differentiator-rail" id="diferenciais">
          {differentiators.map((item) => {
            return (
              <div key={item.label}>
                <span className="differentiator-icon" aria-hidden="true">
                  <img src={item.icon} alt="" />
                </span>
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>

        <blockquote>
          “Construímos ativos digitais que impulsionam negócios para o próximo nível.”
        </blockquote>
      </div>
    </section>
  )
}

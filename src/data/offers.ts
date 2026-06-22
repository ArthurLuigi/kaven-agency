export type OfferCategory = "recurring" | "project"

export type Offer = {
  id: string
  title: string
  price: string
  cadence?: string
  description: string
  features: string[]
  idealFor: string
  deliveryTime?: string
  cta: string
  category: OfferCategory
  featured?: boolean
  previewImage?: string
}

export type LaunchOffer = {
  offerId: Offer["id"]
  title: string
  originalPrice: string
  launchPrice: string
}

export const implementationProjects: Offer[] = [
  {
    id: "web",
    title: "KAVEN WEB",
    price: "R$ 997",
    description: "Estrutura digital para geração de oportunidades.",
    features: [
      "Landing Page profissional",
      "Copy estratégica",
      "Design responsivo",
      "Integração com WhatsApp",
      "Formulário de captação",
      "Configuração de domínio",
      "SEO inicial",
      "Configuração de métricas",
      "Página otimizada para conversão",
    ],
    idealFor:
      "Empresas que precisam de presença profissional e desejam começar a captar clientes pela internet.",
    deliveryTime: "Até 7 dias úteis",
    cta: "Criar minha estrutura web",
    category: "project",
    previewImage: "/project-launch-preview.svg",
  },
  {
    id: "brand",
    title: "KAVEN BRAND",
    price: "R$ 1.997",
    description: "Marca forte. Presença profissional.",
    features: [
      "Tudo do KAVEN WEB",
      "Logotipo profissional",
      "Identidade visual completa",
      "Paleta de cores estratégica",
      "Tipografia da marca",
      "Manual de identidade visual",
      "Kit para redes sociais",
      "Arquivos editáveis",
      "Direcionamento de posicionamento",
    ],
    idealFor:
      "Empresas que desejam transmitir autoridade e profissionalismo em todos os pontos de contato.",
    deliveryTime: "Até 15 dias úteis",
    cta: "Fortalecer minha marca",
    category: "project",
    previewImage: "/project-brand-preview.svg",
  },
  {
    id: "business",
    title: "KAVEN BUSINESS",
    price: "R$ 3.997",
    description: "Estrutura completa para empresas que querem crescer.",
    features: [
      "Tudo do KAVEN BRAND",
      "Website institucional completo",
      "Até 5 páginas",
      "Estrutura comercial digital",
      "Integração com ferramentas de captura",
      "Configuração avançada de métricas",
      "SEO estratégico inicial",
      "Configuração profissional de e-mail corporativo",
      "Treinamento básico da plataforma",
      "30 dias de suporte pós-entrega",
    ],
    idealFor:
      "Empresas que buscam presença digital sólida e preparada para expansão.",
    deliveryTime: "Até 20 dias úteis",
    cta: "Estruturar meu negócio",
    category: "project",
    featured: true,
    previewImage: "/project-empire-preview.svg",
  },
]

export const growthPlans: Offer[] = [
  {
    id: "start",
    title: "KAVEN START",
    price: "R$ 997",
    cadence: "/mês",
    description: "Gestão profissional para começar a anunciar.",
    features: [
      "Gestão Meta Ads",
      "Até 2 campanhas simultâneas",
      "Planejamento mensal",
      "Criação de até 8 criativos",
      "Otimizações semanais",
      "Relatório mensal",
      "Suporte via WhatsApp",
    ],
    idealFor:
      "Empresas que desejam iniciar campanhas com acompanhamento profissional.",
    cta: "Começar com Start",
    category: "recurring",
  },
  {
    id: "growth",
    title: "KAVEN GROWTH",
    price: "R$ 1.997",
    cadence: "/mês",
    description: "Crescimento consistente e previsível.",
    features: [
      "Gestão Meta Ads",
      "Gestão Google Ads",
      "Estratégia de funil",
      "Remarketing",
      "Até 12 criativos mensais",
      "Relatórios avançados",
      "Reunião estratégica mensal",
      "Monitoramento contínuo",
      "Suporte prioritário",
    ],
    idealFor: "Empresas que buscam crescimento consistente e previsível.",
    cta: "Escolher Growth",
    category: "recurring",
    featured: true,
  },
  {
    id: "scale",
    title: "KAVEN SCALE",
    price: "R$ 3.997",
    cadence: "/mês",
    description: "Performance avançada para acelerar a expansão.",
    features: [
      "Gestão completa Meta Ads",
      "Gestão completa Google Ads",
      "Estratégias avançadas de escala",
      "Estruturação de funis personalizados",
      "Dashboard de resultados",
      "Reuniões quinzenais",
      "Produção criativa avançada",
      "Consultoria estratégica",
      "Planejamento de expansão",
    ],
    idealFor:
      "Empresas que desejam acelerar o crescimento e aumentar a participação de mercado.",
    cta: "Escalar minha operação",
    category: "recurring",
  },
]

export const launchOffers: LaunchOffer[] = [
  {
    offerId: "web",
    title: "KAVEN WEB",
    originalPrice: "R$ 997",
    launchPrice: "R$ 697",
  },
  {
    offerId: "brand",
    title: "KAVEN BRAND",
    originalPrice: "R$ 1.997",
    launchPrice: "R$ 1.497",
  },
  {
    offerId: "business",
    title: "KAVEN BUSINESS",
    originalPrice: "R$ 3.997",
    launchPrice: "R$ 2.997",
  },
]

export const allOffers = [...implementationProjects, ...growthPlans]

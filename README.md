# Kaven Agency

Landing page institucional e comercial da Kaven Agency, construída para apresentar projetos de implantação, planos de performance e captar oportunidades pelo WhatsApp.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- Tailwind CSS 4
- Radix UI e componentes shadcn
- React Hook Form e Zod
- Vitest e Testing Library

## Requisitos

- [Node.js](https://nodejs.org/) 24 ou superior
- npm 11 ou superior
- Git

Confirme as versões instaladas:

```bash
node --version
npm --version
git --version
```

## Executar localmente

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/ArthurLuigi/kaven-agency.git
cd kaven-agency
```

Instale as dependências usando o lockfile:

```bash
npm ci
```

Crie sua configuração local:

```powershell
Copy-Item .env.example .env.local
```

No macOS ou Linux:

```bash
cp .env.example .env.local
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente [http://localhost:5173](http://localhost:5173).

## Variáveis de ambiente

O arquivo `.env.example` documenta as integrações disponíveis:

```env
VITE_WHATSAPP_NUMBER=+55 12 99231-8358
VITE_INSTAGRAM_URL=https://www.instagram.com/kavenagency/
VITE_CONTACT_EMAIL=contato.kavenagency@gmail.com
```

Copie esse arquivo para `.env.local` quando precisar usar valores diferentes. O `.env.local` não deve ser commitado.

Após alterar variáveis de ambiente, reinicie o servidor de desenvolvimento.

## Desenvolvimento local

Crie uma branch a partir do `main` atualizado:

```bash
git switch main
git pull --ff-only
git switch -c feature/nome-da-alteracao
```

Durante o desenvolvimento:

1. Edite os componentes em `src/components`.
2. Mantenha ofertas e preços em `src/data/offers.ts`.
3. Centralize dados de contato em `src/lib/contact.ts` ou use variáveis de ambiente.
4. Coloque imagens públicas em `public` e utilize caminhos iniciados por `/`.
5. Execute os testes antes de enviar mudanças.

Validação recomendada:

```bash
npm run lint
npm run test
npm run build
```

Depois, publique sua branch e abra um pull request:

```bash
git add <arquivos>
git commit -m "Descreva a alteração"
git push -u origin feature/nome-da-alteracao
```

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o Vite com atualização em tempo real |
| `npm run test` | Executa os testes uma vez |
| `npm run test:watch` | Mantém os testes observando alterações |
| `npm run lint` | Verifica problemas de código e padrões |
| `npm run build` | Valida TypeScript e gera a versão de produção |
| `npm run preview` | Abre localmente o build de produção |

## Estrutura principal

```text
public/                 Imagens, logos e ícones públicos
src/components/         Seções da página e componentes de interface
src/components/ui/      Componentes reutilizáveis
src/data/offers.ts      Projetos, planos e preços
src/lib/contact.ts      Contatos padrão da agência
src/lib/lead.ts         Validação e integração com WhatsApp
src/test/               Configuração dos testes
```

## Build de produção

```bash
npm run build
npm run preview
```

O build final é gerado em `dist/` e pode ser publicado em serviços de hospedagem estática.

## Segurança

- Nunca adicione tokens, senhas ou credenciais ao repositório.
- Use `.env.local` para valores locais e secrets do GitHub para CI/CD.
- Dependências são monitoradas pelo Dependabot.
- Pull requests e o `main` são analisados pelo CodeQL.
- Vulnerabilidades devem ser reportadas conforme o [SECURITY.md](SECURITY.md).

## Contato

- Instagram: [@kavenagency](https://www.instagram.com/kavenagency/)
- E-mail: [contato.kavenagency@gmail.com](mailto:contato.kavenagency@gmail.com)
- WhatsApp: [+55 12 99231-8358](https://wa.me/5512992318358)

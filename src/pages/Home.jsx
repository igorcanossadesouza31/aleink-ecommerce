import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'

const FEATURED_IDS = [
  'impressora-fotografica-ix6810-com-bulk',
  'tinta-epson-unidade',
  'impressora-multifuncional-epson-wf-5810',
  'kit-canon-linha-g',
]

export default function Home() {
  const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean)

  return (
    <div>
      {/* HERO */}
      <section className="border-b-4 border-ink-black overflow-hidden">
        <Link to="/produtos" className="group block">
          <img
            src="/banner-hero.jpg"
            alt="Aleink — imprimindo sonhos. Impressoras, tintas e kits de recarga com alta resolução e o melhor custo por página."
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </section>

      {/* FAIXA DE BENEFÍCIOS */}
      <section className="border-b-4 border-ink-black bg-ink-black text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-display text-xs sm:text-sm">
          <div>FRETE GRÁTIS ACIMA DE R$380</div>
          <div className="text-ink-yellow">BULK REDUZ ATÉ 90% DO CUSTO</div>
          <div>CANON · EPSON · HP</div>
          <div className="text-ink-cyan">SUPORTE PELO WHATSAPP</div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl sm:text-4xl">DESTAQUES</h2>
          <Link to="/produtos" className="font-display text-xs underline hover:text-ink-magenta">
            VER TUDO
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-display text-3xl sm:text-4xl mb-10">O QUE VOCÊ PRECISA HOJE?</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { label: 'Impressoras com Bulk', to: '/produtos?categoria=Impressoras', color: '#00AEEF' },
            { label: 'Tintas e Kits', to: '/produtos?categoria=Tintas', color: '#E4002B' },
            { label: 'Papéis e Chips', to: '/produtos?categoria=Papéis', color: '#FFD100' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group relative overflow-hidden border-2 border-ink-black p-8 flex items-center justify-between transition-all duration-200 hover:text-paper hover:-translate-y-1 hover:shadow-[6px_6px_0_#151316]"
              style={{ '--hover-color': item.color }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                style={{ backgroundColor: item.color }}
              />
              <span className="relative font-display text-lg">{item.label}</span>
              <span className="relative font-display text-2xl transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA O BULK */}
      <section className="border-y-4 border-ink-black bg-ink-black text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="font-display text-xs tracking-widest text-ink-yellow mb-4">PASSO A PASSO</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-12 max-w-2xl">COMO FUNCIONA A INSTALAÇÃO DE BULK</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                color: '#00AEEF',
                title: 'ESCOLHA SUA IMPRESSORA',
                text: 'Compre uma impressora já com bulk de fábrica ou traga a sua para instalarmos o sistema.',
              },
              {
                n: '02',
                color: '#E4002B',
                title: 'INSTALAÇÃO COM GARANTIA',
                text: 'Nosso time instala o sistema bulk com garantia e já entrega com a primeira carga de tinta.',
              },
              {
                n: '03',
                color: '#FFD100',
                title: 'IMPRIMA SEM SUSTO',
                text: 'Reabasteça direto no pote, sem trocar cartucho — até 90% menos custo por página impressa.',
              },
            ].map((step) => (
              <div key={step.n} className="border-2 border-paper/30 p-8 transition-colors duration-200 hover:border-paper">
                <span className="font-display text-4xl" style={{ color: step.color }}>
                  {step.n}
                </span>
                <h3 className="font-display text-lg mt-4 mb-2">{step.title}</h3>
                <p className="text-paper/70 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="font-display text-xs tracking-widest text-ink-magenta mb-4">AVALIAÇÕES NO GOOGLE</p>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl max-w-2xl">O QUE OS CLIENTES DIZEM DA ALEINK</h2>
          <a
            href="https://www.google.com/maps/place/Aleink+Impressoras/@-23.4663876,-46.5852949,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs underline hover:text-ink-magenta"
          >
            VER NO GOOGLE →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Renan Oshita',
              context: 'Local Guide · 20 avaliações no Google',
              quote:
                'Tenho uma Cânon IX6810 há anos e recentemente investi em uma WF5390 e o que já era bom ficou melhor! Minha linha de produção está a todo vapor. Fora todo o suporte que a Aleink oferece, atendimento diferenciado e de alta qualidade. Não troco ALEINK por NADA!',
              color: '#00AEEF',
            },
            {
              name: 'A Coruja Papeleira',
              context: 'Cliente há 8 anos',
              quote:
                'Fui uma das primeiras clientes da Alessandra há uns 8 anos atrás, e não tenho PALAVRAS para o que sempre foi o atendimento e a qualidade dos serviços Aleink. Sigo sendo cliente fiel todos esses anos, atestando a confiança e durabilidade…',
              color: '#E4002B',
            },
            {
              name: 'Natália Moura',
              context: 'Avaliação no Google · 8 meses atrás',
              quote:
                'Trabalho com personalizados e todas as minhas impressoras e tintas são da Alê. Sempre que precisei o Ribas me atendeu com toda atenção. AMO!',
              color: '#FFD100',
            },
            {
              name: 'Patrícia Paula',
              context: '6 avaliações · 8 meses atrás',
              quote:
                'Minha experiência foi maravilhosa com Aleink, já estou na 3ª impressora rsrs. As meninas muito atenciosas e o suporte sempre que precisei foram fantástico.',
              color: '#151316',
            },
            {
              name: 'Mercia Maria Scareli Soranz',
              context: 'Local Guide · 13 avaliações · um ano atrás',
              quote:
                'Antes de comprar minha impressora IX6810, pesquisei em vários lugares. A Alessandra me atendeu de um jeito que me encantou! Esclareceu todas as minhas dúvidas. Inclusive fez teste de impressão pra mim em um papel que eu uso aqui e enviei para ela, para que tivesse certeza que ficaria bom. Ficou perfeito! O suporte pós venda também é ótimo, mesmo a minha impressora já tendo mais de 4 anos. Eu recomendo de olhos fechados, pela qualidade do produto mas principalmente pela qualidade no atendimento.',
              color: '#00AEEF',
            },
            {
              name: 'Grazy Parties',
              context: '3 avaliações · 3 anos atrás',
              quote:
                'Atendimento do técnico Ribas nota 1.000, segunda vez que ele me salva, dessa vez super fora do horário. Atendimento perfeito, muito atencioso e prestativo, sempre deixa minha impressora como nova. Obrigada pelo serviço perfeito.',
              color: '#E4002B',
            },
          ].map((t) => (
            <div key={t.name} className="border-2 border-ink-black p-8 bg-white">
              <p className="text-ink-yellow tracking-widest mb-4" aria-label="5 estrelas">
                ★★★★★
              </p>
              <p className="text-ink-black/80 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-display text-sm"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-sm">{t.name}</p>
                  <p className="text-xs text-ink-black/50">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL — WHATSAPP */}
      <section className="border-t-4 border-ink-black bg-ink-magenta text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">FICOU COM DÚVIDA?</h2>
          <p className="text-paper/90 max-w-xl mx-auto mb-8">
            Fala com a gente pelo WhatsApp e a equipe da Aleink te ajuda a escolher a impressora ou o kit certo.
          </p>
          <a
            href="https://wa.me/5511947338031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink-black text-paper font-display text-sm px-8 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_#151316]"
          >
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </section>
    </div>
  )
}

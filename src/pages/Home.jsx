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
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
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

      {/* PROVA SOCIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="font-display text-xs tracking-widest text-ink-magenta mb-4">QUEM JÁ COMPROU</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-12 max-w-2xl">ACOMPANHE E VEJA O QUE FALAM DA ALEINK</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { label: 'Instagram', handle: '@aleinkimpressorass', href: 'https://www.instagram.com/aleinkimpressorass/', color: '#E4002B' },
            { label: 'Facebook', handle: 'aleink.com.br', href: 'https://www.facebook.com/aleink.com.br/', color: '#00AEEF' },
            { label: 'Loja oficial', handle: 'aleinkimpressoras.com.br', href: 'https://aleinkimpressoras.com.br/', color: '#FFD100' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border-2 border-ink-black p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_#151316]"
            >
              <span className="block h-2 w-10 mb-6 transition-all duration-200 group-hover:w-full" style={{ backgroundColor: item.color }} />
              <p className="font-display text-lg">{item.label}</p>
              <p className="text-ink-black/60 text-sm mt-1">{item.handle}</p>
            </a>
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

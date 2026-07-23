import InkBlob from '../components/InkBlob'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="absolute top-10 right-0 opacity-50 pointer-events-none hidden sm:block">
        <InkBlob color="#EC0C8C" size={200} />
      </div>

      <p className="font-display text-xs text-ink-magenta mb-4">QUEM SOMOS</p>
      <h1 className="font-display text-4xl sm:text-5xl mb-8 max-w-2xl">
        TINTA E IMPRESSÃO SEM MISTÉRIO, SEM SUSTO NO BOLSO.
      </h1>
      <div className="space-y-6 text-ink-black/70 text-lg max-w-2xl">
        <p>
          A aleink nasceu para resolver um problema simples: imprimir custa caro quando o sistema não é pensado
          para durar. Trabalhamos com as marcas mais confiáveis do mercado — Canon, Epson e HP — e com sistema
          bulk, que reduz drasticamente o custo por página.
        </p>
        <p>
          Além de vender impressoras e tintas, também instalamos sistema bulk com garantia, oferecemos kits
          completos de recarga e suporte direto pelo WhatsApp para tirar qualquer dúvida antes, durante e depois
          da compra.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-6">
        {[
          { label: 'Marcas trabalhadas', value: 'Canon · Epson · HP' },
          { label: 'Frete grátis', value: 'Acima de R$380' },
          { label: 'Suporte', value: 'Direto pelo WhatsApp' },
        ].map((item) => (
          <div key={item.label} className="border-2 border-ink-black p-6">
            <p className="text-xs text-ink-black/50 mb-2">{item.label}</p>
            <p className="font-display text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

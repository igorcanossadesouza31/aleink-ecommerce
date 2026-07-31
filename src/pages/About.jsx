const PARAGRAPHS = [
  'À frente da Aleink, está Alessandra Canossa, com uma trajetória construída ao longo de anos de experiência no mercado de impressão e personalização.',
  'Estamos há mais de 8 anos no mercado, levando soluções em impressão para empreendedores e empresas de todo o Brasil, e contamos com mais de 18 anos de experiência no segmento de tintas.',
  'Mais do que vender impressoras, nosso propósito é entender o que cada cliente realmente precisa. Acreditamos que não existe uma solução única para todos: por isso, buscamos conhecer o negócio, o objetivo e a realidade de cada cliente para então indicar o equipamento mais adequado para sua necessidade.',
  'Na Aleink, o cliente está no centro de tudo o que fazemos. Nossa preocupação não termina no momento da compra. Pelo contrário: o pós-venda é uma das nossas maiores prioridades.',
  'Sabemos que investir em uma impressora é investir no próprio negócio. Por isso, queremos que nossos clientes tenham segurança não apenas na escolha do equipamento, mas também em todo o caminho depois da compra, contando com suporte, orientação e uma equipe preparada para ajudá-los.',
  'Estamos localizados em São Paulo, mas nossa atuação vai muito além da nossa região. Hoje, atendemos clientes de diferentes lugares do Brasil, sempre com o mesmo compromisso: oferecer produtos de qualidade, orientação verdadeira e um pós-venda de excelência.',
  'Na Aleink, nosso objetivo é simples: entender, orientar e entregar a solução certa para cada cliente.',
]

export default function About() {
  return (
    <div className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
        <div className="px-4 sm:px-6 lg:pl-8 lg:pr-12 max-w-2xl">
          <p className="font-display text-xs text-ink-magenta mb-4">QUEM SOMOS</p>
          <h1 className="font-display text-3xl sm:text-4xl mb-8">QUEM SOMOS</h1>
          <div className="space-y-6 text-ink-black/70 text-lg">
            {PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="h-[70vh] overflow-hidden lg:sticky lg:top-20 lg:self-start lg:h-[calc(100vh-5rem)]">
          <img
            src="/alessandra-canossa.jpg"
            alt="Alessandra Canossa, fundadora da Aleink"
            className="w-full h-full object-cover object-[50%_34%]"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid sm:grid-cols-3 gap-6">
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

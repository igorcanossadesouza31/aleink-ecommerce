export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <p className="font-display text-xs text-ink-magenta mb-4">CONTATO</p>
      <h1 className="font-display text-4xl sm:text-5xl mb-10">FALA COM A GENTE</h1>

      <div className="space-y-4">
        <a
          href="https://wa.me/5511947338031"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border-2 border-ink-black p-6 hover:bg-ink-yellow transition-colors"
        >
          <span className="font-display text-sm">WHATSAPP</span>
          <span>(11) 94733-8031</span>
        </a>

        <div className="flex items-center justify-between border-2 border-ink-black p-6">
          <span className="font-display text-sm">ENDEREÇO</span>
          <span className="text-right">Rua Benjamin Pereira, 881 — Jaçanã, São Paulo/SP</span>
        </div>

        <a
          href="https://instagram.com/aleinkimpressorass"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border-2 border-ink-black p-6 hover:bg-ink-cyan hover:text-paper transition-colors"
        >
          <span className="font-display text-sm">INSTAGRAM</span>
          <span>@aleinkimpressorass</span>
        </a>
      </div>
    </div>
  )
}

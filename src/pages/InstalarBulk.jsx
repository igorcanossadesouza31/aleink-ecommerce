const VIDEOS = [
  {
    title: 'Como instalar o Bulk — Parte 1',
    href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODkxNjAyMjE0MjEwMDcy',
    color: '#00AEEF',
  },
  {
    title: 'Como instalar o Bulk — Parte 2',
    href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDE5OTM4NTQ1MjEwNTE1',
    color: '#E4002B',
  },
]

export default function InstalarBulk() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="font-display text-xs tracking-widest text-ink-magenta mb-4">TUTORIAIS</p>
      <h1 className="font-display text-3xl sm:text-4xl mb-4 max-w-2xl">COMO INSTALAR O BULK NA SUA IMPRESSORA</h1>
      <p className="text-ink-black/70 max-w-xl mb-12">
        Passo a passo em vídeo, direto no nosso Instagram, mostrando como instalar o sistema bulk e
        deixar sua impressora pronta para imprimir sem trocar cartucho.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {VIDEOS.map((video, i) => (
          <a
            key={video.href}
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border-2 border-ink-black bg-white transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_#151316]"
          >
            <div
              className="aspect-video flex items-center justify-center"
              style={{ backgroundColor: `${video.color}15` }}
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full text-white transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: video.color }}
                aria-hidden="true"
              >
                <span className="ml-1 border-y-8 border-y-transparent border-l-[14px]" style={{ borderLeftColor: 'white' }} />
              </span>
            </div>
            <div className="p-5 border-t-2 border-ink-black">
              <p className="text-xs text-ink-black/50 font-medium mb-1">VÍDEO {i + 1}</p>
              <h2 className="font-display text-lg">{video.title}</h2>
              <p className="text-sm text-ink-black/60 mt-2">Assistir no Instagram →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

// Mapeia cada categoria a uma das cores CMYK da marca — reforça o motivo visual
// de "tinta" em todo o catálogo, sem precisar de fotos de produto reais.
const MAP = {
  Impressoras: '#00AEEF',
  Tintas: '#EC0C8C',
  Kits: '#FFD100',
  Bulk: '#151316',
  Papéis: '#00AEEF',
  Chip: '#EC0C8C',
  Mimo: '#EC0C8C',
}

export function categoryColor(category) {
  return MAP[category] ?? '#00AEEF'
}

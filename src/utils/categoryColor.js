// Mapeia cada categoria a uma das cores CMYK da marca — reforça o motivo visual
// de "tinta" em todo o catálogo, sem precisar de fotos de produto reais.
const MAP = {
  Impressoras: '#00AEEF',
  Tintas: '#E4002B',
  Kits: '#FFD100',
  Bulk: '#151316',
  Papéis: '#00AEEF',
  Chip: '#E4002B',
  Mimo: '#E4002B',
}

export function categoryColor(category) {
  return MAP[category] ?? '#00AEEF'
}

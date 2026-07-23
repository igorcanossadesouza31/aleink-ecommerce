import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products'
import ProductCard from '../components/ProductCard'

const SORT_OPTIONS = [
  { value: 'relevancia', label: 'Relevância' },
  { value: 'menor-preco', label: 'Menor preço' },
  { value: 'maior-preco', label: 'Maior preço' },
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('relevancia')

  const activeCategory = searchParams.get('categoria') || ''
  const activeBrand = searchParams.get('marca') || ''
  const maxPrice = searchParams.get('precoMax') || ''

  function toggleParam(key, value) {
    const next = new URLSearchParams(searchParams)
    if (next.get(key) === value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (activeCategory) list = list.filter((p) => p.category === activeCategory)
    if (activeBrand) list = list.filter((p) => p.brand === activeBrand)
    if (maxPrice) list = list.filter((p) => p.price <= Number(maxPrice))

    if (sort === 'menor-preco') list.sort((a, b) => a.price - b.price)
    if (sort === 'maior-preco') list.sort((a, b) => b.price - a.price)

    return list
  }, [activeCategory, activeBrand, maxPrice, sort])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-display text-3xl sm:text-4xl mb-2">CATÁLOGO</h1>
      <p className="text-ink-black/60 mb-10">{filtered.length} produtos encontrados</p>

      <div className="grid lg:grid-cols-[240px_1fr] gap-10">
        <aside className="space-y-8">
          <div>
            <h2 className="font-display text-xs mb-3 text-ink-magenta">CATEGORIA</h2>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleParam('categoria', cat)}
                  className={`text-left px-3 py-2 border-2 border-ink-black text-sm font-medium transition-colors ${
                    activeCategory === cat ? 'bg-ink-black text-paper' : 'hover:bg-ink-black/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xs mb-3 text-ink-magenta">MARCA</h2>
            <div className="flex flex-col gap-2">
              {BRANDS.map((brand) => (
                <button
                  key={brand}
                  onClick={() => toggleParam('marca', brand)}
                  className={`text-left px-3 py-2 border-2 border-ink-black text-sm font-medium transition-colors ${
                    activeBrand === brand ? 'bg-ink-black text-paper' : 'hover:bg-ink-black/5'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xs mb-3 text-ink-magenta">PREÇO MÁXIMO</h2>
            <div className="flex flex-col gap-2">
              {['100', '500', '2000', '7000'].map((val) => (
                <button
                  key={val}
                  onClick={() => toggleParam('precoMax', val)}
                  className={`text-left px-3 py-2 border-2 border-ink-black text-sm font-medium transition-colors ${
                    maxPrice === val ? 'bg-ink-black text-paper' : 'hover:bg-ink-black/5'
                  }`}
                >
                  até R$ {val}
                </button>
              ))}
            </div>
          </div>

          {(activeCategory || activeBrand || maxPrice) && (
            <button
              onClick={() => setSearchParams({})}
              className="font-display text-xs underline text-ink-magenta"
            >
              LIMPAR FILTROS
            </button>
          )}
        </aside>

        <div>
          <div className="flex justify-end mb-6">
            <label className="text-sm font-medium flex items-center gap-2">
              Ordenar por
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border-2 border-ink-black px-3 py-2 font-medium bg-white"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="border-2 border-dashed border-ink-black/30 p-16 text-center">
              <p className="font-display text-lg mb-2">Nenhum produto com esses filtros</p>
              <p className="text-ink-black/60 text-sm">Tente remover algum filtro para ver mais opções.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

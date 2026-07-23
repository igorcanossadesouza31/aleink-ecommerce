import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'aleink_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage indisponível — carrinho segue funcionando só na sessão atual
    }
  }, [items])

  function addItem(product, quantity = 1, variant = {}) {
    setItems((prev) => {
      const variantKey = JSON.stringify(variant)
      const existing = prev.find((i) => i.id === product.id && JSON.stringify(i.variant) === variantKey)
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, variant, quantity }]
    })
  }

  function removeItem(id, variant = {}) {
    const variantKey = JSON.stringify(variant)
    setItems((prev) => prev.filter((i) => !(i.id === id && JSON.stringify(i.variant) === variantKey)))
  }

  function updateQuantity(id, variant = {}, quantity) {
    const variantKey = JSON.stringify(variant)
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && JSON.stringify(i.variant) === variantKey ? { ...i, quantity: Math.max(1, quantity) } : i
      )
    )
  }

  function clearCart() {
    setItems([])
  }

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart precisa ser usado dentro de um CartProvider')
  return ctx
}

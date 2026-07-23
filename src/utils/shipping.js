// Cálculo de frete MOCKADO por faixa de CEP fictícia.
// TODO(integração real): substituir por chamada real à API dos Correios ou Melhor Envio,
// enviando CEP de origem da loja + CEP de destino + peso/dimensões do pedido.

export function estimateShipping(cep, subtotal) {
  const digits = String(cep).replace(/\D/g, '')

  if (digits.length !== 8) {
    return { error: 'CEP inválido. Digite os 8 números do CEP.' }
  }

  if (subtotal >= 380) {
    return { price: 0, label: 'Frete grátis', days: 5, free: true }
  }

  const firstDigit = Number(digits[0])
  // Faixas fictícias só para simular variação de preço/prazo por região.
  const table = {
    0: { price: 19.9, days: 3 },
    1: { price: 22.9, days: 4 },
    2: { price: 24.9, days: 5 },
    3: { price: 21.9, days: 4 },
    4: { price: 27.9, days: 6 },
    5: { price: 29.9, days: 6 },
    6: { price: 32.9, days: 7 },
    7: { price: 30.9, days: 7 },
    8: { price: 35.9, days: 8 },
    9: { price: 37.9, days: 9 },
  }

  const result = table[firstDigit] ?? { price: 29.9, days: 6 }
  return { ...result, label: 'Frete padrão', free: false }
}

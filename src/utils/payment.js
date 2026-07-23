// Processamento de pagamento MOCKADO — simula um delay de rede e retorna sucesso.
// TODO(integração real): substituir o corpo desta função pela chamada real ao gateway
// (ex: SDK do Mercado Pago ou Stripe), usando as chaves de API reais da loja.
// NUNCA commitar chaves de API reais neste arquivo — usar variáveis de ambiente (.env).

export function processPayment({ method, amount }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderId = `ALK-${Date.now().toString().slice(-8)}`
      resolve({
        success: true,
        orderId,
        method,
        amount,
        // Em uma integração real, aqui viriam status/transactionId retornados pelo gateway.
      })
    }, 1200)
  })
}

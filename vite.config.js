import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Só usa o prefixo /aleink-ecommerce/ no build de produção (GitHub Pages).
  // Em desenvolvimento local (`npm run dev`) o site continua na raiz normalmente.
  base: command === 'build' ? '/aleink-ecommerce/' : '/',
}))

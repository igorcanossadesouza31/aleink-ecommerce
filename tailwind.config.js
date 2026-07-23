/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          cyan: '#00AEEF',
          magenta: '#EC0C8C',
          yellow: '#FFD100',
          black: '#151316',
        },
        paper: '#FAF7F0',
        paperdark: '#EFEAE0',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        blob: '42% 58% 63% 37% / 41% 42% 58% 59%',
      },
      keyframes: {
        drip: {
          '0%': { transform: 'translateY(-8px) scaleY(0.9)' },
          '50%': { transform: 'translateY(0px) scaleY(1.05)' },
          '100%': { transform: 'translateY(-8px) scaleY(0.9)' },
        },
        wobble: {
          '0%, 100%': { borderRadius: '42% 58% 63% 37% / 41% 42% 58% 59%' },
          '50%': { borderRadius: '58% 42% 37% 63% / 52% 60% 40% 48%' },
        },
      },
      animation: {
        drip: 'drip 3.2s ease-in-out infinite',
        wobble: 'wobble 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

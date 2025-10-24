import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,css}",
  ],
  darkMode: 'class', // Mengaktifkan mode gelap berbasis 'class'
  theme: {
    extend: {
      colors: {
        // Palet Warna Kustom Sesuai Desain
        'primary': {
          light: '#28a745', // Varian lebih terang jika diperlukan
          DEFAULT: '#1D8436', // Hijau utama
          dark: '#146C2A', // Varian lebih gelap
        },
        'secondary': {
          DEFAULT: '#0F4A1E', // Hijau sangat gelap (header/footer)
          dark: '#0A3315',
        },
        'accent': {
          DEFAULT: '#F3C010', // Kuning/Emas
          dark: '#F5C933',
        },
        'danger': {
          DEFAULT: '#D41D2C', // Merah untuk tombol register
          dark: '#B31824',
        },
        'neutral': {
          DEFAULT: '#3D4451', // Abu-abu gelap untuk teks
          dark: '#B0B6BF', // Abu-abu terang untuk teks dark mode
        },
        'base': {
          '100': '#FFFFFF', // Latar belakang card/box putih
          '200': '#F4F8F5', // Latar belakang body (sedikit hijau)
          '300': '#E8F0EB', // Hover/border
          'content': '#212529', // Teks utama
        },
        // Palet Dark Mode
        'dark-primary': '#2ECC71', // Hijau lebih cerah untuk dark mode
        'dark-secondary': '#1ABC9C',
        'dark-base': {
          '100': '#2A3A2F', // Latar belakang card dark mode
          '200': '#1A2A20', // Latar belakang body dark mode
          '300': '#3E4E43', // Border/hover dark mode
          'content': '#E0E6E2', // Teks utama dark mode
        },
      },
      fontFamily: {
        // Font kustom sesuai desain
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    formsPlugin, // Plugin untuk styling form
  ],
};

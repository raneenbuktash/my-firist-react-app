import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-firist-react-app/', // ضيفي السطر ده باسم الـ Repo بتاعك بالظبط

})



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/fontawesome-svg-core'
      ]
    }
  }
});

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  preview:{
    host:true, // to expose the project in public addresses 
    port:8080
  }
})

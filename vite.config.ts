import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sets the base path for assets to match your GitHub repository name
  // This ensures CSS/JS loads correctly at https://elartslens.github.io/Portfolio/
  base: '/Portfolio/', 
});
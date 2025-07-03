import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'client',                 // ← where index.html lives
  plugins: [react()],
  build: {
    outDir: '../dist/client',     // keep same final folder
    emptyOutDir: true,
    rollupOptions: {
      external: ['/:routes.js'],  // the earlier build fix
    },
  },
});

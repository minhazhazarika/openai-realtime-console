import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const externals = ['/:routes.js', '/:create.jsx'];   // ← list all pseudo-files once

export default defineConfig({
  root: 'client',             // where index.html lives
  plugins: [react()],
  build: {
    outDir: '../dist/client', // final folder for client
    emptyOutDir: true,
    rollupOptions: {
      external: externals,    // ⬅️ client-side
    },
  },
  ssr: {
    external: externals,      // ⬅️ **server-side**
  },
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      // HMR disabled in AI Studio
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    // 🔒 Production Build Protection
    build: {
      sourcemap: false, // hides original source code
      minify: 'terser',

      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: false,
        },
      },

      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  };
});
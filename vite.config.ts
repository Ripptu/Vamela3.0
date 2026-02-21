import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
          manifest: {
            name: 'VAMELA | Webdesign & Branding',
            short_name: 'VAMELA',
            description: 'Exklusives Webdesign & Branding aus Haag an der Amper',
            theme_color: '#050505',
            background_color: '#050505',
            display: 'standalone',
            icons: [
              {
                src: 'https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png', // Fallback to logo for now, ideally needs specific sizes
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: 'https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png',
                sizes: '512x512',
                type: 'image/png'
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

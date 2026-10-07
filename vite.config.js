import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    host: true
  },
  plugins: [
    {
      name: 'clean-urls-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const cleanPath = req.url.split('?')[0];
          if (cleanPath !== '/' && !cleanPath.includes('.')) {
            const potentialDir = resolve(__dirname, cleanPath.replace(/^\//, ''));
            const potentialHtml = resolve(potentialDir, 'index.html');
            if (fs.existsSync(potentialHtml)) {
              if (!req.url.endsWith('/')) {
                req.url = cleanPath + '/' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
              }
            }
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        work: resolve(__dirname, 'work/index.html'),
        bagelBar: resolve(__dirname, 'work/bagel-bar/index.html'),
        heygluco: resolve(__dirname, 'work/heygluco/index.html'),
        lpi: resolve(__dirname, 'work/lpi/index.html'),
        merci: resolve(__dirname, 'work/merci/index.html'),
        munchiesAndCream: resolve(__dirname, 'work/munchies-and-cream/index.html'),
        mvp: resolve(__dirname, 'work/mvp/index.html'),
        tantiMaria: resolve(__dirname, 'work/tanti-maria/index.html'),
        yumYum: resolve(__dirname, 'work/yum-yum/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        letsTalk: resolve(__dirname, 'lets-talk/index.html')
      }
    }
  }
});

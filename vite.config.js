import { resolve } from 'path'
import { defineConfig } from 'vite'

const rewriteSlashToIndexHtml = () => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.html';
        }
        next();
      });
    },
  };
};

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about/index.html'),
        events: resolve(__dirname, 'src/events/index.html'),
        music: resolve(__dirname, 'src/music/index.html'),
        credits: resolve(__dirname, 'src/credits/index.html'),
        religion: resolve(__dirname, 'src/religion/index.html'),
        recipes_classical: resolve(__dirname, 'src/recipes/classical/index.html'),
        recipes_modern: resolve(__dirname, 'src/recipes/modern/index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          return 'assets/' + assetInfo.name;
        },
      },
    },
  },
  appType: 'mpa', // disable history fallback
  plugins: [
    rewriteSlashToIndexHtml(),
  ],
});
import { resolve } from 'path'
import { defineConfig } from 'vite'

const rewriteSlashToIndexastro = () => {
  return {
    name: 'rewrite-slash-to-index-astro',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.astro
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.astro';
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
        main: resolve(__dirname, 'src/index.astro'),
        about: resolve(__dirname, 'src/about/index.astro'),
        events: resolve(__dirname, 'src/events/index.astro'),
        music: resolve(__dirname, 'src/music/index.astro'),
        credits: resolve(__dirname, 'src/credits/index.astro'),
        religion: resolve(__dirname, 'src/religion/index.astro'),
        recipes_classical: resolve(__dirname, 'src/recipes/classical/index.astro'),
        recipes_modern: resolve(__dirname, 'src/recipes/modern/index.astro'),
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
    rewriteSlashToIndexastro(),
  ],
});
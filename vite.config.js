import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VuetifyPlugin from 'vite-plugin-vuetify'
import { resolve } from 'path';

// Define the server proxy
const serverProxy = {
  '/songs': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/songs/, ''),
  },
};

// Export the Vite config
export default defineConfig({
  plugins: [
    vue(),
    new VuetifyPlugin(),
  ],
  server: {
    proxy: serverProxy,
  },
  optimizeDeps: {
    include: [
      'axios',
    ],
  },
   publicDir: 'public',
     build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'public/index.html')
          }
        }
      }
});

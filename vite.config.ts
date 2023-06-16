import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7000,
    //open: true,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@/": `${pathSrc}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
  ]
})
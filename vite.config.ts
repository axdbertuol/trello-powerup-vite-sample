import { defineConfig, normalizePath, resolveBaseUrl } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createMpaPlugin } from "vite-plugin-virtual-mpa";

const base = "/"; // You can change whatever you want
/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue(),
    vueJsx({
      // include: ["src/components/**/**.tsx"],
    }),
    createMpaPlugin({
      pages: [
        {
          name: "note",
          filename: "app/card-buttons/note.html",
          entry: "/src/pages/app",
          data: {
            title: "This is a app page",
          },
        },
        {
          name: "manage",
          filename: "app/card-buttons/manage.html",
          entry: "/src/pages/app",
          data: {
            title: "This is a app page",
          },
        },
        {
          name: "index",
          entry: "/src/pages/home",
          data: {
            title: "This is Home page",
          },
        },
      ],
      /**
       * Customize the history fallback rewrite rules.
       * If you config your pages as above, this rewrite rules will be automatically generated.
       * Otherwise you should manually write it, which will overwrite the default.
       */
      // rewrites: [
      //   {
      //     from: new RegExp(
      //       normalizePath(`/${base}/(apple|banana|strawberries)`)
      //     ),
      //     to: (ctx) => normalizePath(`/${base}/fruits/${ctx.match[1]}.html`)
      //   }
      // ],
      /**
       * Sometimes you might want to reload `pages` config or restart ViteDevServer when
       * there are some files added, removed, changed and so on. You can set `watchOptions` to
       * customize your own logic.
       *
       * The `include` and `exclude` based on `Rollup.createFilter`
       * @see https://vitejs.dev/guide/api-plugin.html#filtering-include-exclude-pattern
       */
      watchOptions: {
        events: ["add", "unlink", "change"],
        include: ["fruits/**"],
        handler: (ctx) => {
          console.log(ctx.type, ctx.file);
          // ctx.reloadPages()
        },
      },
    }),
  ],
  esbuild: {
    jsxInject: ".tsx",
  },
  resolve: {
    alias: {
      "@/*": normalizePath(base + "/src/"),
    },
  },
});

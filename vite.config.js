import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "@rollup/plugin-alias";
import eslintPlugin from "vite-plugin-eslint";

// eslint-disable-next-line no-undef
const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [alias(), eslintPlugin(), vue()],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "./src"),
      "@components": resolve(projectRootDir, "./src/components"),
    },
    extensions: [".js", ".json", ".vue"],
  },
});

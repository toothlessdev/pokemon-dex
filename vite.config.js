import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "/src",
        },
    },

    plugins: [
        react({
            babel: {
                plugins: ["babel-plugin-styled-components"],
            },
        }),
        ViteImageOptimizer(),
    ],
});

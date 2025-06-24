import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    compatibilityDate: "2025-05-15",
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    shadcn: {
        prefix: "",
        componentDir: "./components/ui",
    },

    modules: [
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxt/scripts",
        "@nuxt/test-utils",
        "shadcn-nuxt",
        "@nuxtjs/color-mode",
    ],
    colorMode: {
        classSuffix: "",
    },
});

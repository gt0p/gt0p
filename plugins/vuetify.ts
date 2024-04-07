// plugins/vuetify.js
import type { ThemeDefinition } from "vuetify";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";

const customLight: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#086972",
    secondary: "#581b98",
    background: "#f5f5f5",
    surface: "#dfe6e9",
  },
};

const customDark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#f26d5b",
    secondary: "#e3c4a8",
    background: "#425071",
    surface: "#303a52",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "customLight",
      themes: {
        customLight,
        customDark,
      },
    },
    icons: {
      defaultSet: "fa",
      aliases,
      sets: { fa },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

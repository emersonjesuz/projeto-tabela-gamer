import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dourado: "#C39B61", // Dourado pálido
        pretoCarvao: "#282828", // Preto carvão
        azulEscuroCarvao: "#1A202C", // Azul escuro carvão
        cinzaClaro: "#E2E8F0", // Cinza claro
        cinzaAzulado: "#718096", // Cinza azulado
        azulEscuro: "#1B1B2F", // Azul Escuro
        vermelhoVibrante: "#E43F5A", // Vermelho Vibrante
        azulMarinho: "#162447", // Azul Marinho
        azulProdundo: "#1F4068", // Azul Profundo
      },
    },
  },
  plugins: [],
};
export default config;

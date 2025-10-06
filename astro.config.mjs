// astro.config.mjs (The updated version)
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        // This is where your Tailwind config now lives
        config: {
          theme: {
            extend: {
              fontFamily: {
                sans: ['Inter', 'sans-serif'],
              },
            },
          },
        },
      }),
    ],
  },
});

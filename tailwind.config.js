import { preset } from '@marigold/theme-b2b/preset';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@marigold/components/**/*.tsx',
    './node_modules/@marigold/theme-b2b/dist/index.mjs',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [preset],
};

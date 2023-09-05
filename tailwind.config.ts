import { preset } from '@marigold/theme-b2b/preset';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ...preset.content,
    './node_modules/@marigold/system/dist/*.js',
    './node_modules/@marigold/components/dist/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [preset],
};

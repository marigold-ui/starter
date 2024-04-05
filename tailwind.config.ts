import { preset } from '@marigold/theme-core/preset';

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: true,
  },
  content: [...preset.content, './src/**/*.{js,ts,jsx,tsx}'],
  presets: [preset],
};

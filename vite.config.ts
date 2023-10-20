import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // Specify the correct path to your project's root directory
  plugins: [react()],
});
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // This fixes "describe is not defined"
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
  },
});

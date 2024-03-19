import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
  },
  env: {
    app_url: 'http://localhost:5173',
  },
});

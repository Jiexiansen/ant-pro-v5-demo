import { defineConfig } from '@umijs/max';

console.log('hi, prod');
export default defineConfig({
  define: {
    API_BASE_URL: 'https://xxx',
  },
});

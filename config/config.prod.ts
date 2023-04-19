// import { defineConfig } from '@umijs/max';
import { defineConfig } from 'umi';

console.log('hi, prod');
export default defineConfig({
  define: {
    API_BASE_URL: 'https://xxx',
  },
});

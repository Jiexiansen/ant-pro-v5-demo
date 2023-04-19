// import { defineConfig } from '@umijs/max';
import { defineConfig } from 'umi';

console.log('hi, test');
export default defineConfig({
  define: {
    API_BASE_URL: 'https://api.devkeep.com/test',
    API_SECRET_KEY: 'XXXXXXXXXXXXXXXX', // API调用密钥
  },
});

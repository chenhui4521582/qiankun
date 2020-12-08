import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'app2',
          entry: 'http://localhost:8002/app2',
        },
      ],
    },
    slave: {}
  }
});

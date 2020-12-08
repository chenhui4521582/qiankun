import { defineConfig } from 'umi';

export default defineConfig({
  base: '/app1Name',
  publicPath: '/app1/',
  outputPath: './dist/app1',
  mountElementId: 'app1',
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
          entry: 'http://localhost:7002/app2',
        },
      ],
    },
    slave: {},
  },
});

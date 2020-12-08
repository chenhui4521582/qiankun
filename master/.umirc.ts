import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/layout/index' },
    {
      path: '/app1',
      microApp: 'app1',
    },
    {
      path: '/app1',
      microApp: 'app2',
    },
    {
      path: '/app1',
      microApp: 'app3',
    },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:7001'
        },
        {
          name: 'app1',
          entry: '//localhost:7002'
        },
        {
          name: 'app3',
          entry: '//localhost:7003'
        }
      ]
    }
  }
});

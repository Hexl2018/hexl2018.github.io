import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Hexl',
  // 'site' or 'doc'
  mode: 'site',
  // more config: https://d.umijs.org/config
  logo: '/images/logo.jpg',
  favicon: '/images/favicon.ico',
  fastRefresh: {},
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '博客',
      path: '/manual',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
});

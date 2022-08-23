import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Hexl',
  // 'site' or 'doc'
  mode: 'site',                                                  
  base:"hexl2018.github.io",
  publicPath:"hexl2018.github.io/",
  // more config: https://d.umijs.org/config
  logo: '/images/logo.jpg',
  mfsu: {},
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '操作文档',
      path: '/manual'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
});
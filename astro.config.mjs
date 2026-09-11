import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chotdaebawi.com',
  output: 'static',
  i18n: {
    defaultLocale: 'ko',
    locales: ['zh', 'en', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      // 根路径仅作跳转，不收录；排除错误页
      filter: (page) => page !== 'https://chotdaebawi.com/' && !/\/404\/?$/.test(page),
      // 键为 URL 路径段，值为输出到 hreflang 的语言标记
      i18n: {
        defaultLocale: 'ko',
        locales: {
          ko: 'ko-KR',
          en: 'en-US',
          ja: 'ja-JP',
          zh: 'zh-Hant',
        },
      },
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

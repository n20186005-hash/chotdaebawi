export const siteConfig = {
  name: 'Chuam Chotdaebawi Rock',
  baseUrl: 'https://chotdaebawi.com',
  slug: 'chuamchotdaebawi',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};

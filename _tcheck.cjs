const fs = require('fs');
for (const l of ['ko', 'zh', 'en', 'ja']) {
  const h = fs.readFileSync('dist/' + l + '/index.html', 'utf8');
  const j = JSON.parse(h.match(/id="weather-i18n">([\s\S]*?)<\/script>/)[1]);
  const days = (h.match(/<div class="weather-day( is-today)?">/g) || []).length;
  const navTide = h.includes('/' + l + '#tide');
  console.log(
    l.padEnd(3),
    '| tide keys:', String(Object.keys(j.tide).length).padEnd(3),
    '| tide block:', h.includes('data-w-tide'),
    '| nav #tide:', navTide,
    '| 7-day cards:', days,
    '| title:', j.tide.title
  );
}

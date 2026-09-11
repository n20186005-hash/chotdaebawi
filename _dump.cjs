const url =
  'https://marine-api.open-meteo.com/v1/marine?latitude=37.4793444&longitude=129.160125' +
  '&hourly=sea_level_height_msl&timezone=Asia%2FSeoul&forecast_days=2';
fetch(url)
  .then((r) => r.json())
  .then((j) => {
    const t = j.hourly.time, v = j.hourly.sea_level_height_msl;
    for (let i = 0; i < Math.min(30, t.length); i++) {
      const bar = '#'.repeat(Math.max(0, Math.round((v[i] + 0.3) * 30)));
      console.log(t[i].slice(5), String(v[i]).padStart(6), bar);
    }
    // strict extrema
    const strict = [], loose = [];
    for (let i = 1; i < t.length - 1; i++) {
      const a = v[i - 1], b = v[i], c = v[i + 1];
      if (b > a && b > c) strict.push([t[i].slice(5), 'H', b]);
      if (b < a && b < c) strict.push([t[i].slice(5), 'L', b]);
      const d1 = b - a, d2 = c - b;
      if (d1 > 0 && d2 <= 0) loose.push([t[i].slice(5), 'H', b]);
      else if (d1 < 0 && d2 >= 0) loose.push([t[i].slice(5), 'L', b]);
    }
    console.log('\nSTRICT extrema:', strict.length);
    strict.forEach((e) => console.log(' ', e.join(' ')));
    console.log('PLATEAU-SAFE extrema:', loose.length);
    loose.forEach((e) => console.log(' ', e.join(' ')));
  })
  .catch((e) => console.log('ERR', e.message));

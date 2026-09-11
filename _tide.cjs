const LAT = 37.4793444;
const LON = 129.160125;
const url =
  'https://marine-api.open-meteo.com/v1/marine?latitude=' + LAT + '&longitude=' + LON +
  '&current=wave_height,wave_period,sea_surface_temperature,sea_level_height_msl' +
  '&hourly=sea_level_height_msl&timezone=Asia%2FSeoul&forecast_days=2';

fetch(url)
  .then((r) => {
    console.log('HTTP', r.status);
    return r.text();
  })
  .then((t) => {
    console.log(t.slice(0, 900));
    try {
      const j = JSON.parse(t);
      if (j.hourly && j.hourly.time) {
        console.log('\nhourly.time len =', j.hourly.time.length);
        console.log('first 4:', JSON.stringify(j.hourly.time.slice(0, 4)));
        console.log('first 8 heights:', JSON.stringify((j.hourly.sea_level_height_msl || []).slice(0, 8)));
        console.log('current:', JSON.stringify(j.current));
      }
      if (j.error) console.log('API ERROR:', j.reason);
    } catch (e) {
      console.log('parse fail', e.message);
    }
  })
  .catch((e) => console.log('FETCH ERR:', e.message));

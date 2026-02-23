import fs from 'node:fs';
import leaflet from 'polyline-encoded';
import polyline from '../index.js';
import example from '../test/data/example-01.json' with { type: 'json' };

function readPolyline(filename) {
  const path = [import.meta.dirname, '../test/data', filename].join('/');
  return fs.readFileSync(path, 'utf8');
}

const huge = readPolyline('usa.txt');

/* global suite, bench */

suite('decode', () => {
  bench('3 points', () => polyline.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@'));

  bench('~350 points', () => polyline.decode(example.polyline));

  bench('~35000 points', () => polyline.decode(huge));
});

suite('leaflet decode', () => {
  bench('3 points', () => leaflet.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@'));

  bench('~350 points', () => leaflet.decode(example.polyline));

  bench('~35000 points', () => leaflet.decode(huge));
});

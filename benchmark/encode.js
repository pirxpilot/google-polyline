import fs from 'node:fs';
import leaflet from 'polyline-encoded';
import polyline from '../index.js';
import example from '../test/data/example-01.json' with { type: 'json' };

function readPolyline(filename) {
  const path = [import.meta.dirname, '../test/data', filename].join('/');
  const txt = fs.readFileSync(path, 'utf8');
  return polyline.decode(txt);
}

const huge = readPolyline('usa.txt');

/* global suite, bench */

suite('encode', () => {
  bench('3 points', () =>
    polyline.encode([
      [38.5, -120.2],
      [40.7, -120.95],
      [43.252, -126.453]
    ])
  );

  bench('~350 points', () => polyline.encode(example.points));

  bench('~35000 points', () => polyline.encode(huge));
});

suite('leaflet encode', () => {
  bench('3 points', () =>
    leaflet.encode([
      [38.5, -120.2],
      [40.7, -120.95],
      [43.252, -126.453]
    ])
  );

  bench('~350 points', () => leaflet.encode(example.points));

  bench('~35000 points', () => leaflet.encode(huge));
});

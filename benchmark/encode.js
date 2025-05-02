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

suite('encode', function () {
  bench('3 points', function () {
    return polyline.encode([
      [38.5, -120.2],
      [40.7, -120.95],
      [43.252, -126.453]
    ]);
  });

  bench('~350 points', function () {
    return polyline.encode(example.points);
  });

  bench('~35000 points', function () {
    return polyline.encode(huge);
  });
});

suite('leaflet encode', function () {
  bench('3 points', function () {
    return leaflet.encode([
      [38.5, -120.2],
      [40.7, -120.95],
      [43.252, -126.453]
    ]);
  });

  bench('~350 points', function () {
    return leaflet.encode(example.points);
  });

  bench('~35000 points', function () {
    return leaflet.encode(huge);
  });
});

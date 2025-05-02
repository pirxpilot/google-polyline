const fs = require('node:fs');
const leaflet = require('polyline-encoded');
const polyline = require('..');
const example = require('../test/data/example-01');

function readPolyline(filename) {
  const path = [__dirname, '../test/data', filename].join('/');
  return fs.readFileSync(path, 'utf8');
}

const huge = readPolyline('usa.txt');

/* global suite, bench */

suite('decode', function () {
  bench('3 points', function () {
    return polyline.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@');
  });

  bench('~350 points', function () {
    return polyline.decode(example.polyline);
  });

  bench('~35000 points', function () {
    return polyline.decode(huge);
  });
});

suite('leaflet decode', function () {
  bench('3 points', function () {
    return leaflet.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@');
  });

  bench('~350 points', function () {
    return leaflet.decode(example.polyline);
  });

  bench('~35000 points', function () {
    return leaflet.decode(huge);
  });
});

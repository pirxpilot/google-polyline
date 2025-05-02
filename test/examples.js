import assert from 'node:assert';
import { describe, it } from 'node:test';
import { decode, encode } from '../index.js';

describe('Google Polyline Example', function () {
  it('encode', function () {
    const points = [
      [-120.2, 38.5],
      [-120.95, 40.7],
      [-126.453, 43.252]
    ];

    const encoded = encode(points);

    assert.equal(encoded, '_p~iF~ps|U_ulLnnqC_mqNvxq`@');
  });

  it('encode', function () {
    const points = [
      [-120.2, 38.5],
      [-120.95, 40.7],
      [-126.453, 43.252]
    ];

    const encoded = encode(points, { prefix: '$$$' });

    assert.equal(encoded, '$$$_p~iF~ps|U_ulLnnqC_mqNvxq`@');
  });

  it('encode with map function', function () {
    const points = [
      { lon: -120.2, lat: 38.5 },
      { lon: -120.95, lat: 40.7 },
      { lon: -126.453, lat: 43.252 }
    ];

    const encoded = encode(points, { mapFn: ({ lon, lat }) => [lon, lat] });

    assert.equal(encoded, '_p~iF~ps|U_ulLnnqC_mqNvxq`@');
  });

  it('decode', function () {
    const points = decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@');
    const decoded = [
      [-120.2, 38.5],
      [-120.95, 40.7],
      [-126.453, 43.252]
    ];

    assert.deepEqual(points, decoded);
  });

  it('decode with start specified', function () {
    const points = decode('$$$_p~iF~ps|U_ulLnnqC_mqNvxq`@', { start: 3 });
    const decoded = [
      [-120.2, 38.5],
      [-120.95, 40.7],
      [-126.453, 43.252]
    ];

    assert.deepEqual(points, decoded);
  });

  it('decode with end specified', function () {
    const poly = '_p~iF~ps|U_ulLnnqC_mqNvxq`@$$$';
    const points = decode(poly, { end: poly.length - 3 });
    const decoded = [
      [-120.2, 38.5],
      [-120.95, 40.7],
      [-126.453, 43.252]
    ];

    assert.deepEqual(points, decoded);
  });

  it('decode with map function', function () {
    const points = decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@', { mapFn: ([lon, lat]) => ({ lon, lat }) });
    const decoded = [
      { lon: -120.2, lat: 38.5 },
      { lon: -120.95, lat: 40.7 },
      { lon: -126.453, lat: 43.252 }
    ];

    assert.deepEqual(points, decoded);
  });

  it('almost zero', function () {
    assert.equal(
      encode([
        [1, 1],
        [1.000001, 0.999999]
      ]),
      '_ibE_ibE??'
    );

    assert.deepEqual(decode('_ibE_ibE??'), [
      [1, 1],
      [1, 1]
    ]);
    assert.deepEqual(decode('_ibE_ibE>>'), [
      [1, 1],
      [1, 1]
    ]);
  });
});

const { describe, it } = require( 'node:test' );
const { encode, decode } = require( '..' );
const assert = require( 'assert' );

describe( 'Google Polyline Example', function() {

  it( 'encode', function() {

    let points = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ];

    let encoded = encode( points );

    assert.equal( encoded, '_p~iF~ps|U_ulLnnqC_mqNvxq`@' );

  });

  it( 'encode', function() {

    let points = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ];

    let encoded = encode( points, { prefix: '$$$' } );

    assert.equal( encoded, '$$$_p~iF~ps|U_ulLnnqC_mqNvxq`@' );

  });

  it( 'encode with map function', function() {

    let points = [
      { lon: -120.2, lat: 38.5 },
      { lon: -120.95, lat: 40.7 },
      { lon: -126.453, lat: 43.252 }
    ];

    let encoded = encode( points, { mapFn: ({ lon, lat }) => [ lon, lat ] });

    assert.equal( encoded, '_p~iF~ps|U_ulLnnqC_mqNvxq`@' );

  });

  it( 'decode', function() {

    let points = decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' );
    let decoded = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ];

    assert.deepEqual( points, decoded );

  });

  it( 'decode with start specified', function() {

    let points = decode( '$$$_p~iF~ps|U_ulLnnqC_mqNvxq`@', { start: 3 } );
    let decoded = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ];

    assert.deepEqual( points, decoded );

  });

  it( 'decode with end specified', function() {

    let poly = '_p~iF~ps|U_ulLnnqC_mqNvxq`@$$$';
    let points = decode( poly, { end: poly.length - 3 } );
    let decoded = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ];

    assert.deepEqual( points, decoded );

  });

  it( 'decode with map function', function() {

    let points = decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@', { mapFn: ([ lon, lat ]) => ({ lon, lat }) });
    let decoded = [
      { lon: -120.2, lat: 38.5 },
      { lon: -120.95, lat: 40.7 },
      { lon: -126.453, lat: 43.252 }
    ];

    assert.deepEqual( points, decoded );

  });

  it( 'almost zero', function () {

    assert.equal(encode([[1, 1], [1.000001, 0.999999]]), '_ibE_ibE??');

    assert.deepEqual(decode('_ibE_ibE??'), [[1, 1], [1, 1]]);
    assert.deepEqual(decode('_ibE_ibE>>'), [[1, 1], [1, 1]]);
  });
});

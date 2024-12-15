const { describe, it } = require( 'node:test' );
const fs = require('fs');
const leaflet = require('polyline-encoded');
const assert = require( 'assert' );

const polyline = require( '..' );

function readPolyline(filename) {
  let path = [__dirname, '../test/data', filename].join('/');
  return fs.readFileSync(path, 'utf8');
}

function reverse(c) {
  return [c[1], c[0]];
}

const huge = readPolyline('usa.txt');

describe( 'compare to Leaflet implementation', function() {

  it( 'decode', function() {

    let points = polyline.decode( huge );
    let pointsLeaflet = leaflet.decode( huge );

    assert.equal( points.length, pointsLeaflet.length );
    for (let i = 0; i < points.length; i ++) {
      assert.equal(points[i][0], pointsLeaflet[i][1], 'longitude should be the same ' + i);
      assert.equal(points[i][1], pointsLeaflet[i][0], 'latitutude should be the same ' + i);
    }
  });

  it( 'decode gp, encode leaflet', function() {
      let points = polyline.decode( huge );

      points = points.map(reverse);
      assert.equal(huge, leaflet.encode(points));
  });

  it( 'decode leaflet, encode gp', function() {
      let points = leaflet.decode( huge );

      points = points.map(reverse);
      assert.equal(huge, polyline.encode(points));
  });

});

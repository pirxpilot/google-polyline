var fs = require('fs');
var leaflet = require('polyline-encoded');
var polyline = require( '..' );
var example = require( '../test/data/example-01' );

function readPolyline(filename) {
  var path = [__dirname, '../test/data', filename].join('/');
  var txt = fs.readFileSync(path, 'utf8');
  return polyline.decode(txt);
}

var huge = readPolyline('usa.txt');

/* global suite, bench */

suite( 'encode', function() {

  bench( '3 points', function() {
    return polyline.encode([
      [ 38.5, -120.2 ],
      [ 40.7, -120.95 ],
      [ 43.252, -126.453 ]
    ]);
  });

  bench( '~350 points', function() {
    return polyline.encode( example.points );
  });

  bench( '~35000 points', function() {
    return polyline.encode( huge );
  });

});

suite( 'leaflet encode', function() {

  bench( '3 points', function() {
    return leaflet.encode([
      [ 38.5, -120.2 ],
      [ 40.7, -120.95 ],
      [ 43.252, -126.453 ]
    ]);
  });

  bench( '~350 points', function() {
    return leaflet.encode( example.points );
  });

  bench( '~35000 points', function() {
    return leaflet.encode( huge );
  });

});

var fs = require('fs')
var leaflet = require('polyline-encoded')
var assert = require( 'assert' )

var polyline = require( '..' )

function readPolyline(filename) {
  var path = [__dirname, '../test/data', filename].join('/')
  return fs.readFileSync(path, 'utf8')
}

function reverse(c) {
  return [c[1], c[0]]
}

var huge = readPolyline('usa.txt')

suite( 'compare to Leaflet implementation', function() {

  test( 'decode', function() {

    var points = polyline.decode( huge )
    var pointsLeaflet = leaflet.decode( huge )

    assert.equal( points.length, pointsLeaflet.length )
    for (var i = 0; i < points.length; i ++) {
      assert.equal(points[i][0], pointsLeaflet[i][1], 'longitude should be the same ' + i)
      assert.equal(points[i][1], pointsLeaflet[i][0], 'latitutude should be the same ' + i)
    }
  })

  test( 'decode gp, encode leaflet', function() {
      var points = polyline.decode( huge )

      points = points.map(reverse);
      assert.equal(huge, leaflet.encode(points));
  })

  test( 'decode leaflet, encode gp', function() {
      var points = leaflet.decode( huge )

      points = points.map(reverse);
      assert.equal(huge, polyline.encode(points));
  })

})

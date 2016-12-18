var polyline = require( '..' )
var leaflet = require('polyline-encoded')
var example = require( '../test/data/example-01' )

suite( 'decode', function() {

  bench( '3 points', function() {
    return polyline.decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' )
  })

  bench( '~350 points', function() {
    return polyline.decode( example.polyline )
  })

})

suite('leaflet decode', function() {

  bench( '3 points', function() {
    return leaflet.decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' )
  })

  bench( '~350 points', function() {
    return leaflet.decode( example.polyline )
  })

})

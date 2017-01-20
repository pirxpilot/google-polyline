var polyline = require( '..' )
var assert = require( 'assert' )

suite( 'Google Polyline Example', function() {

  test( 'encode', function() {

    var points = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ]

    var encoded = polyline.encode( points )

    assert.equal( encoded, '_p~iF~ps|U_ulLnnqC_mqNvxq`@' )

  })

  test( 'decode', function() {

    var points = polyline.decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' )
    var decoded = [
      [ -120.2, 38.5 ],
      [ -120.95, 40.7 ],
      [ -126.453, 43.252 ]
    ]

    assert.deepEqual( points, decoded )

  })

  test( 'almost zero', function () {

    assert.equal(polyline.encode([[1, 1], [1.000001, 0.999999]]), '_ibE_ibE??');

    assert.deepEqual(polyline.decode('_ibE_ibE??'), [[1, 1], [1, 1]]);
    assert.deepEqual(polyline.decode('_ibE_ibE>>'), [[1, 1], [1, 1]]);
  })
})

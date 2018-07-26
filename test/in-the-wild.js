const { encode, decode } = require( '..' );
const assert = require( 'assert' );

suite( 'Samples', function() {

  suite( '01', function() {

    const data = require( './data/example-01' );

    test( 'encode', function() {
      assert.strictEqual( encode( data.points ), data.polyline );
    });

    test( 'decode', function() {
      assert.deepEqual( decode( data.polyline ), data.points );
    });

  });

});

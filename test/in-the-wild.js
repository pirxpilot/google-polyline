const { describe, it } = require( 'node:test' );
const { encode, decode } = require( '..' );
const assert = require( 'assert' );

describe( 'Samples', function() {

  describe( '01', function() {

    const data = require( './data/example-01' );

    it( 'encode', function() {
      assert.strictEqual( encode( data.points ), data.polyline );
    });

    it( 'decode', function() {
      assert.deepEqual( decode( data.polyline ), data.points );
    });

  });

});

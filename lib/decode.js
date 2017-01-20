module.exports = decode

function decode( value, factor ) {

  var points = []
  var x, y, px = 0, py = 0

  if (factor === undefined) {
    factor = 1e5
  }

  integers(value, function(v) {
    if (y === undefined) {
      // y (as in longitude) comes first
      y = v;
      return;
    }
    x = v

    x = x + px
    y = y + py

    points.push( [ x / factor, y / factor ] )

    px = x
    py = y

    x = y = undefined
  });

  return points

}

function sign( value ) {
  return value & 1 ? ~( value >>> 1 ) : ( value >>> 1 )
}

function integers( value, fn ) {

  var byte = 0
  var current = 0
  var bits = 0

  for( var i = 0; i < value.length; i++ ) {

    byte = value.charCodeAt( i ) - 63
    current = current | (( byte & 0x1F ) << bits )
    bits += 5

    if( byte < 0x20 ) {
      if (byte === -1 && bits === 5) {
          // special case - single byte 0 encoded as -1
          current = 0
      }
      fn( sign( current ) )
      current = 0
      bits = 0
    }

  }
}

module.exports = decode

function decode( value, precision ) {

  var points = []
  var x, y, px = 0, py = 0

  if (precision === undefined) {
    precision = 1e5
  }

  integers(value, function(v) {
    if (x === undefined) {
      x = v;
      return;
    }
    y = v

    x = x + px
    y = y + py

    points.push( [ x / precision, y / precision ] )

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

  var values = []
  var byte = 0
  var current = 0
  var bits = 0

  for( var i = 0; i < value.length; i++ ) {

    byte = value.charCodeAt( i ) - 63
    current = current | (( byte & 0x1F ) << bits )
    bits = bits + 5

    if( byte < 0x20 ) {
      fn( sign( current ) )
      current = 0
      bits = 0
    }

  }

}


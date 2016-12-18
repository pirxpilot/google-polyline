module.exports = encode


function encode( points ) {

  var x, y
  var px = 0, py = 0
  var str = ''

  for( var i = 0; i < points.length; ++i ) {
    x = points[i][0];
    y = points[i][1];

    str += chars( sign( x - px ) )
    str += chars( sign( y - py ) )

    px = x
    py = y
  }

  return str
}

function sign( value ) {
  value = Math.round( value * 1e5 )
  return ( value < 0 ) ? ~( value << 1 ) : ( value << 1 )
}

function chars( value ) {
  var str = ''
  while( value >= 0x20 ) {
    str += String.fromCharCode( (( value & 0x1F ) | 0x20 ) + 63 )
    value = value >> 5
  }
  str += String.fromCharCode( value + 63 )
  return str
}


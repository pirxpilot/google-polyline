module.exports = encode;


function encode( points, { factor = 1e5, mapFn } = {}) {
  let point, x, y;
  let px = 0, py = 0;
  const str = [];

  for( let i = 0; i < points.length; ++i ) {
    point = points[i];
    if ( mapFn ) {
      point = mapFn( point, i, points );
    }

    x = point[0];
    y = point[1];

    // note the reverse order
    chars( str, sign( y - py, factor ) );
    chars( str, sign( x - px, factor ) );

    px = x;
    py = y;
  }

  return str.join('');
}

function sign( value, factor ) {
  value *= factor;
  if ( value < 0 ) {
    // Google's polyline algorithm uses round to -∞ for negative numbers
    value = Math.floor( 0.5 - value );
    if (value !== 0) {
      value = ~( -value << 1 );
    }
  } else {
    value = Math.round( value );
    value = value << 1;
  }
  return value;
}


function chars( str, value ) {
  while( value >= 0x20 ) {
    str.push(String.fromCharCode( (( value & 0x1F ) | 0x20 ) + 63 ));
    value = value >> 5;
  }
  str.push(String.fromCharCode( value + 63 ));
}

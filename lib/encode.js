module.exports = encode;


function encode( points, { factor = 1e5, prefix = '', mapFn } = {}) {
  let point, x, y;
  let px = 0, py = 0;
  const str = [ prefix ];

  for( let i = 0; i < points.length; ++i ) {
    point = points[i];
    if ( mapFn ) {
      point = mapFn( point, i, points );
    }

    x = round( factor * point[0] );
    y = round( factor * point[1] );

    // note the reverse order
    chars( str, sign( y - py ) );
    chars( str, sign( x - px ) );

    px = x;
    py = y;
  }

  return str.join('');
}

function round( v ) {
  return v < 0 ? - Math.floor( 0.5 - v ) : Math.round( v );
}

function sign( v ) {
  return v < 0 ?  ~( v << 1 ) : v << 1;
}

function chars( str, value ) {
  while( value >= 0x20 ) {
    str.push(String.fromCharCode( (( value & 0x1F ) | 0x20 ) + 63 ));
    value = value >> 5;
  }
  str.push(String.fromCharCode( value + 63 ));
}

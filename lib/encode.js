module.exports = encode;

function encode(points, { factor = 1e5, prefix = '', mapFn } = {}) {
  let px = 0;
  let py = 0;
  let str = prefix;

  for (let i = 0; i < points.length; ++i) {
    let point = points[i];
    if (mapFn) {
      point = mapFn(point, i, points);
    }

    const x = round(factor * point[0]);
    const y = round(factor * point[1]);

    // note the reverse order
    str = chars(str, sign(y - py));
    str = chars(str, sign(x - px));

    px = x;
    py = y;
  }

  return str;
}

function round(v) {
  return v < 0 ? -Math.floor(0.5 - v) : Math.round(v);
}

function sign(v) {
  return v < 0 ? ~(v << 1) : v << 1;
}

function chars(str, value) {
  while (value >= 0x20) {
    str += String.fromCharCode(((value & 0x1f) | 0x20) + 63);
    value = value >> 5;
  }
  return str + String.fromCharCode(value + 63);
}

export default function decode(value, { factor = 1e5, mapFn, start = 0, end = value.length } = {}) {
  const points = [];
  let x;
  let y;
  let px = 0;
  let py = 0;
  let point;

  integers(value, start, end, function (v) {
    if (y === undefined) {
      // y (as in longitude) comes first
      y = v;
      return;
    }
    x = v;

    x = x + px;
    y = y + py;

    point = [x / factor, y / factor];
    if (mapFn) {
      point = mapFn(point);
    }
    points.push(point);

    px = x;
    py = y;

    x = y = undefined;
  });

  return points;
}

function sign(value) {
  return value & 1 ? ~(value >>> 1) : value >>> 1;
}

function integers(value, start, end, fn) {
  let byte = 0;
  let current = 0;
  let bits = 0;

  for (let i = start; i < end; i++) {
    byte = value.charCodeAt(i) - 63;
    current = current | ((byte & 0x1f) << bits);
    bits += 5;

    if (byte < 0x20) {
      if (byte === -1 && bits === 5) {
        // special case - single byte 0 encoded as -1
        current = 0;
      }
      fn(sign(current));
      current = 0;
      bits = 0;
    }
  }
}

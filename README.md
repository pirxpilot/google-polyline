[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]

# google-polyline

Encodes and decodes [Google's polyline format][google-polyline-format] It's a forked version of
[google-polyline][org-google-polyline] module with minor performance improvements and reversed order
of coordinates: **longitude**, **latitude** (think **x**, **y** or **easting**, **northing**), which
corresponds to position definition in [GeoJSON] spec.


## Install

```sh
$ npm install --save @pirxpilot/google-polyline

# or

$ yarn add @pirxpilot/google-polyline
```

## Usage

```js
const { encode, decode } = require('@pirxpilot/google-polyline')

encode([
  [ -120.2, 38.5 ],
  [ -120.95, 40.7 ],
  [ -126.453, 43.252 ]
])

> '_p~iF~ps|U_ulLnnqC_mqNvxq`@'

decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' )

> [
  [ -120.2, 38.5 ],
  [ -120.95, 40.7 ],
  [ -126.453, 43.252 ]
]
```

## API

### `polyline.encode(points[, options])`

returns a string representing encoded polyline

- `points` is an array of points, each point is a 2 element array [longitude, latitude]
- `options.factor` - optional (defaults to `1e5`), factor by which coordinates are multiplied during encoding
- `options.mapFn` - can be optionally passed to convert array of elements to [lon. lat] pairs
mapFunction is called for each item in `points` array and has the same signature as `Array.map` callback
- `options.prefix` - optional prefix for encoded String

### `polyline.decode(string[, options ])`

returns an array of points representing decoded polyline

- `string` is an encoded polyline representation
- `options.factor` - optional (defaults to `1e5`), factor by which coordinates are divided after decoding; use factor `1e6` when decoding polylines from OSM data ([OSRM], [mapzen] etc.)
- `options.mapFn` - optional - if provided it'll be called for each [lon. lat] pair to convert the `point` before it is added to resulting `points` array
- `start`, `end` - (defaults to `0`, `points.length`) - allows to decode a substring

[OSRM]: http://project-osrm.org/
[mapzen]: https://mapzen.com/

[google-polyline-format]: https://developers.google.com/maps/documentation/utilities/polylinealgorithm
[org-google-polyline]: https://github.com/jhermsmeier/node-google-polyline
[GeoJSON]: http://geojson.org/geojson-spec.html#positions

[npm-image]: https://img.shields.io/npm/v/@pirxpilot/google-polyline
[npm-url]: https://npmjs.org/package/@pirxpilot/google-polyline

[build-url]: https://github.com/pirxpilot/google-polyline/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/pirxpilot/google-polyline/check.yaml?branch=pu


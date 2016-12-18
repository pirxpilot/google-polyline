[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# google-polyline

Encodes and decodes [Google's polyline format][google-polyline-format] It's a forked version of
[google-polyline][org-google-polyline] module with minor performance improvements and reversed order
of coordinates: **longitude**, **latitude** (think **x**, **y** or **easting**, **northing**), which
corresponds to position definition in [GeoJSON] spec.


## Install via [npm](https://npmjs.com)

```sh
$ npm install --save google-polyline
```

## Usage

```js
var polyline = require( 'google-polyline' )
```

```js
polyline.encode([
  [ -120.2, 38.5 ],
  [ -120.95, 40.7 ],
  [ -126.453, 43.252 ]
])

> '_p~iF~ps|U_ulLnnqC_mqNvxq`@'
```

```js
polyline.decode( '_p~iF~ps|U_ulLnnqC_mqNvxq`@' )

> [
  [ 38.5, -120.2 ],
  [ 40.7, -120.95 ],
  [ 43.252, -126.453 ]
]
```

## API

### `polyline.encode(points)`

returns string representing encoded polyline

- `points` is an array of points, each point is a 2 element array [longitude, latitude]

### `polyline.decode(string, factor)`

returns array of point representing decoded polyline

- `string` is an encoded polyline representation
- `factor` - optional (defaults to `10e5`), factor by which coordinates are divided after decoding; use factor `10e6` when decoding polylines from OSM data ([OSRM], [mapzen] etc.)

[OSRM]: http://project-osrm.org/
[mapzen]: https://mapzen.com/

[google-polyline-format]: https://developers.google.com/maps/documentation/utilities/polylinealgorithm
[org-google-polyline]: https://github.com/jhermsmeier/node-google-polyline
[GeoJSON]: http://geojson.org/geojson-spec.html#positions

[npm-image]: https://img.shields.io/npm/v/code42day-google-polyline.svg
[npm-url]: https://npmjs.org/package/code42day-google-polyline

[travis-url]: https://travis-ci.org/code42day/google-polyline
[travis-image]: https://img.shields.io/travis/code42day/google-polyline.svg

[gemnasium-image]: https://img.shields.io/gemnasium/code42day/google-polyline.svg
[gemnasium-url]: https://gemnasium.com/code42day/google-polyline

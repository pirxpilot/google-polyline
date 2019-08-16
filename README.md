[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
[![Development Dependency Status][dev-deps-image]][dev-deps-url]

# google-polyline

Encodes and decodes [Google's polyline format][google-polyline-format] It's a forked version of
[google-polyline][org-google-polyline] module with minor performance improvements and reversed order
of coordinates: **longitude**, **latitude** (think **x**, **y** or **easting**, **northing**), which
corresponds to position definition in [GeoJSON] spec.


## Install via [npm](https://npmjs.com)

```sh
$ npm install --save @pirxpilot/google-polyline
```
## Install via [yarn](https://yarnpkg.com)
```sh
$ yarn add @pirxpilot/google-polyline
```

## Usage

ES5:
```js
var polyline = require('@pirxpilot/google-polyline')
```
or

ES6+:

```js
import * as polyline from "@pirxpilot/google-polyline";
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
  [ -120.2, 38.5 ],
  [ -120.95, 40.7 ],
  [ -126.453, 43.252 ]
]
```

## API

### Typescript support

This library was updated in 16/08/2019 to support typescript definitions, if you find any bug on it please report them to [n0minal](https://github.com/n0minal).

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

[npm-image]: https://img.shields.io/npm/v/@pirxpilot/google-polyline.svg
[npm-url]: https://npmjs.org/package/@pirxpilot/google-polyline

[travis-url]: https://travis-ci.org/pirxpilot/google-polyline
[travis-image]: https://img.shields.io/travis/pirxpilot/google-polyline.svg

[deps-image]: https://img.shields.io/david/pirxpilot/google-polyline.svg
[deps-url]: https://david-dm.org/pirxpilot/google-polyline

[dev-deps-image]: https://img.shields.io/david/dev/pirxpilot/google-polyline.svg
[dev-deps-url]: https://david-dm.org/pirxpilot/google-polyline?type=dev

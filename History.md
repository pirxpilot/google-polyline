
3.0.2 / 2024-12-14
==================

 * switch from Travis CI to google actions
 * replace mocha with built-in node:test

3.0.1 / 2019-08-16
==================

 * update package name in README.md file
 * update documentation

3.0.0 / 2018-07-25
==================

 * optimize encoding
 * fix rounding errors
 * add support for prefix option for encoding
 * add support for start, end options for decoding
 * use options object to pass decode/encode options
 * enable es6 syntax

2.2.0 / 2018-07-24
==================

 * support configuring precision for encoding

2.1.1 / 2017-12-24
==================

 * fixed typo blocking code-formatting in README

2.1.0 / 2017-10-24
==================

 * add optional `mapFn` parameter to `encode` and `decode`

2.0.4 / 2017-10-23
==================

 * upgrade mocha to ~4
 * travis CI: switch to testing node LTS and stable versions
 * fix default `factor` value in README.md

2.0.3 / 2017-02-16
==================

 * change name to @pirxpilot/google-polyline

2.0.2 / 2017-01-20
==================

 * add 'lib' to the list of linted dirs
 * handle fractional values smaller than precision

2.0.1 / 2016-12-18
==================

 * clarify factor parameter name

2.0.0 / 2016-12-18
==================

 * switch to lat, lon (x,y) order
 * encode optimization: keep array of chars
 * encode optimization: stop creating partial Strings
 * minor adjustment to negative numbers rounding
 * add longer polyline example to benchmark

1.1.0 / 2016-12-17
==================

 * add precision parameter to decode
 * optimize decode
 * remove flatten
 * compare benchmarks with leaflet implementation
 * add Makefile

// Type definitions for @pirxpilot/google-polyline 3.0
// Project: https://github.com/pirxpilot/google-polyline#readme
// Definitions by: n0minal <https://github.com/n0minal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Point = number[];

export interface decodeOptions {
  factor: number,
  mapFn: any,
  start: number,
  end: number
}
export interface encodeOptions {
  factor: number,
  prefix: string,
  mapFn: any
}

declare function decode(value: string, options?: decodeOptions): Point[];
declare function encode(points: Point[], options?: encodeOptions): string;

export {
  decode,
  encode
};

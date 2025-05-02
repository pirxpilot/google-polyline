import assert from 'node:assert';
import { describe, it } from 'node:test';
import { decode, encode } from '../index.js';
import data from './data/example-01.json' with { type: 'json' };

describe('Samples', function () {
  describe('01', function () {
    it('encode', function () {
      assert.strictEqual(encode(data.points), data.polyline);
    });

    it('decode', function () {
      assert.deepEqual(decode(data.polyline), data.points);
    });
  });
});

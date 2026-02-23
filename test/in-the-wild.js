import assert from 'node:assert';
import { describe, it } from 'node:test';
import { decode, encode } from '../index.js';
import data from './data/example-01.json' with { type: 'json' };

describe('Samples', () => {
  describe('01', () => {
    it('encode', () => {
      assert.strictEqual(encode(data.points), data.polyline);
    });

    it('decode', () => {
      assert.deepEqual(decode(data.polyline), data.points);
    });
  });
});

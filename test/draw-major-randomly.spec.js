import assert from 'assert'
import {shuffleDeck, drawMajorRandomly} from '../src/draw-major-randomly.js'

describe('drawMajorRandomly Tests', () => {
  describe('call shuffleDeck', () => {
    let deck
    beforeEach( async function () {
      deck = await shuffleDeck(7)
    })
    it('should return a value and not null', () => {
      assert.notStrictEqual(deck, null)
    })
    it('should should have all 22 cards', () => {
      assert.strictEqual(deck.size, 22)
      // deck.forEach(card => console.log(card))
    })
  })

  describe('call drawMajorRandomly', () => {
    let key, value
    beforeEach( async function () {
      [key, value] = await drawMajorRandomly(7)
    })
    it ('should return a value and not null', () => {
      assert.notStrictEqual(key, null)
      assert.notStrictEqual(value, null)
    })
    it ('should return a single card as an array', () => {
      assert.strictEqual(typeof value, 'object')
      assert.strictEqual(typeof key, 'string')
    })
  })
})

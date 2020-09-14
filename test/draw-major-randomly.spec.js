import assert from 'assert'
import {drawMajorRandomly} from '../src/draw-major-randomly.js'

describe('drawMajorRandomly Tests', () => {
  describe('call drawMajorRandomly', () => {
    let deck
    beforeEach( function () {
      deck = drawMajorRandomly(7)
    })
    it('should return a value and not null', () => {
      assert.notEqual(deck, null)
    })
    it('should should have all 22 cards', () => {
      assert.equal(deck.size, 22)
      deck.forEach(card => console.log(card))
    })
  })
})

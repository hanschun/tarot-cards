import assert from 'assert'
import {drawMajorByName} from '../src/draw-major-by-name.js'
import {majorArcana} from '../lib/major-arcana.js'

describe('drawMajorByName Tests', function () {
  describe('call drawMajorByName', function () {
    let card;

    beforeEach( function() {
      card = drawMajorByName('Strength')
    })

    it('should return a card and not null', function () {
      assert.notEqual(card, null)
    });
    it('should return a card with the name "Strength"', function () {
      assert.equal(card.name, 'Strength')
    });
    it('should return a card with the number "VIII"', function () {
      assert.equal(card.number, 'VIII')
    });
    it('should return a card with the image URI', function () {
      const strength = majorArcana.find(i => i.name === 'Strength')
      assert.equal(card.image, strength.image)
    });
  });
});

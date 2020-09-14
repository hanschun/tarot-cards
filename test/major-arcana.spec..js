import assert from 'assert'
import {majorArcana} from '../lib/major-arcana.js'

describe('majorArcana Tests', function () {
  describe('call majorArcana', function () {
    let major, card;

    beforeEach( function() {
      major = majorArcana
      card = major.find(card => card.name === 'Strength')
    })

    it('should not return null', function () {
      assert.notEqual(major, null)
    });
    it('should return an array', function () {
      assert.equal(Array.isArray(major), true)
    });
    it('should return an array of 22 items', function () {
      assert.equal(major.length, 22)
    });
    it('should return an array that contains a card with the name "Strength"', function () {
      assert.equal(card.name, 'Strength')
    });
    it('should return an array that contains a card with the number "VIII"', function () {
      assert.equal(card.number, 'VIII')
    });
    it('should return an array that contains a card with the image URI', function () {
      const strength = majorArcana.find(i => i.name === 'Strength')
      assert.equal(card.image, strength.image)
    });
    it('should return an array that does not contain a card with the name "Joker"', function () {
      const joker = major.find(card => card.name === 'Joker')
      assert.equal(joker, null)
    });
  });
});

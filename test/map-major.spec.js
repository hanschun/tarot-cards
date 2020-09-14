import assert from 'assert'
import {mapMajor} from '../src/map-major.js'
import {majorArcana} from '../lib/major-arcana.js'

describe('mapMajor Tests', function () {
  describe('call mapMajor', function () {
    let map, card;

    beforeEach( function() {
      map = mapMajor()
      card = map.get('Strength')
    })

    it('should return a map and not null', function () {
      assert.notEqual(map, null)
    });
    it('should return a map that contains a card with the name "Strength"', function () {
      assert.equal(card.name, 'Strength')
    });
    it('should return a map that contains a card with the number "VIII"', function () {
      assert.equal(card.number, 'VIII')
    });
    it('should return a map that contains a card with the image URI', function () {
      const strength = majorArcana.find(i => i.name === 'Strength')
      assert.equal(card.image, strength.image)
    });
    it('should return a map that does not contain a card with the name "Joker"', function () {
      const joker = map.get('Joker')
      assert.equal(joker, null)
    });
  });
});

import assert from 'assert'
import {deal} from '../src/deal-cards.js'
import {mapMajor} from '../src/map-major.js'
import {majorArcana} from '../lib/major-arcana.js'

describe('dealCards Tests', () => {
  let card, major

  beforeEach( function() {
    major = mapMajor()
    card = major.get('Strength')
  })
  describe('input verification test', () => {
    it('should return a card and not null', () => {
      assert.notStrictEqual(card, null)
    });
    it('should return a card with the name "Strength"', () => {
      assert.strictEqual(card.name, 'Strength')
    });
    it('should return a card with the number "VIII"', () => {
      assert.strictEqual(card.number, 'VIII')
    });
    it('should return a card with the image URI', () => {
      const strength = majorArcana.find(i => i.name === 'Strength')
      assert.strictEqual(card.image, strength.image)
    });
  });

  describe('deal function test', () => {
    describe('return next card in series', () => {
      let nextCard, match
      beforeEach( function() {
        // the next card should be 'The Hermit', card number 'IX'
        // next card returns as a [key, {value}]
        nextCard = deal(card.name)
        match = major.get('The Hermit')
      })

      it('should return a card', () => {
        assert.notStrictEqual(nextCard, null)
      })
  
      it('should return a card with the name "The Hermit"', () => {
        assert.strictEqual(nextCard.name, 'The Hermit')
      })
  
      it('should return a card with the number "IX"', () => {
        assert.strictEqual(nextCard.number, 'IX')
      })
  
      it('should return a card with an image URI', () => {
        assert.strictEqual(nextCard.image, match.image)
      })
    })
    
    describe('return third card in series', () => {
      let nextCard, match
      beforeEach( function() {
        card = major.get('The Hermit')
        nextCard = deal(card.name)
        match = major.get('Wheel of Fortune')
      })

      it('should return a card', () => {
        assert.notStrictEqual(nextCard, null)
      })
  
      it('should return a card with the name "Wheel of Fortune"', () => {
        assert.strictEqual(nextCard.name, 'Wheel of Fortune')
      })
  
      it('should return a card with the number "IX"', () => {
        assert.strictEqual(nextCard.number, 'X')
      })
  
      it('should return a card with an image URI', () => {
        assert.strictEqual(nextCard.image, match.image)
      })
    })

    describe('return first card when at end of series', () => {
      let nextCard, match
      beforeEach( function() {
        card = major.get('The World')
        nextCard = deal(card.name)
        match = major.get('The Fool')
      })

      it('should return a card and not null', () => {
        assert.notStrictEqual(nextCard, null)
      })

      it('should return a card with the name "The Fool"', () => {
        assert.strictEqual(nextCard.name, 'The Fool')
      })

      it('should return a card with the number "0"', () => {
        assert.strictEqual(nextCard.number, '0')
      })

      it('should return a card and not null', () => {
        assert.strictEqual(nextCard.image, match.image)
      })
    })
  })
})

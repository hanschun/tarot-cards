import assert from 'assert'
import {cutMap, divideMap, shuffleMap, combineMaps, sortMap, compareTarotByNumber, queueMap} from '../src/map-sort.js'
import {romanNumerals} from '../lib/roman-numerals.js'
import {mapMajor} from '../src/map-major.js'

describe('map-sort Tests', () => {
  let major, romans
  beforeEach( function() {
    major = mapMajor()
    romans = romanNumerals()
  })

  describe('call divideMap', () => {
    let results
    beforeEach( function() {
      results = divideMap(major)
    })

    it('should return a value and not null', () => {
      assert.notEqual(results, null)
    })
    it('should return 2 split arrays', () => {
      assert.equal(results[0].size, 11)
      assert.equal(results[1].size, 11)
    })
    it('should return 2 split arrays and results[0] should not contain The Fool', () => {
      assert.equal(results[0].has('The Fool'), false)
    })
    it('should return 2 split arrays and results[1] should contain The Fool', () => {
      assert.equal(results[1].has('The Fool'), true)
    })
  })

  describe('call cutMap', () => {
    let results
    beforeEach( function() {
      results = cutMap(major)
    })

    it('should return a value and not null', () => {
      assert.notEqual(results, null)
    })
    it('should return 2 split arrays', () => {
      assert.equal(results[0].size, 11)
      assert.equal(results[1].size, 11)
    })
    it('results[1] should not contain The Fool', () => {
      assert.equal(results[1].has('The Fool'), false)
    })
    it('results[0] should contain The Fool', () => {
      assert.equal(results[0].has('The Fool'), true)
    })
    it('results[0] should not contain Justice', () => {
      assert.equal(results[0].has('Justice'), false)
    })
    it('results[1] should contain Justice', () => {
      assert.equal(results[1].has('Justice'), true)
    })
  })

  describe('call shuffleMap', () => {
    let shuffled
    beforeEach( function() {
      shuffled = shuffleMap(major)
    })

    it('should return a value and not null', () => {
      assert.notEqual(shuffled, null)
    })
    it('should return 1 shuffled array', () => {
      assert.equal(shuffled.size, 22)
    })
    it('should return shuffled and should contain The Fool', () => {
      assert.equal(shuffled.has('The Fool'), true)
    })
    it('should return a map with a new order', () => {
      it = shuffled.values()
      const one = it.next().value
      const two = it.next().value
      assert.notEqual(one.number, '0')
      assert.notEqual(romans.get(one.number), 0)
      assert.notEqual(two.number, 'I')
      assert.notEqual(romans.get(two.number), 1)
    })
  })

  describe('call shuffleMap', () => {
    let mapA, mapB, results
    beforeEach( function() {
      [mapA, mapB] = divideMap(major)
      results = combineMaps(mapA, mapB)
    })
    it('should return a value and not null', () => {
      assert.notEqual(results, null)
    })
    it('should receive 2 arrays each of size 11', () => {
      assert.equal(mapA.size, 11)
      assert.equal(mapB.size, 11)
    })
    it('should return a single array of size 22', () => {
      assert.equal(results.size, 22)
    })
  })

  describe('call reverseSortMap', () => {
    let results
    beforeEach( function() {
      results = sortMap(major)
    })
    it('should return a value and not null', () => {
      assert.notEqual(results, null)
    })
    it('should return a single array of size 22', () => {
      assert.equal(results.size, 22)
    })
    it('should contain the element (Death) first', () => {
      const it = results.values()
      const first = it.next().value
      assert.equal(first.name, 'Death')
      assert.equal(romans.get(first.number), 13)
    })
  })

  describe('call compareTarotByNumber', () => {
    let iter, first, second, result
    beforeEach(function() {
      iter = major.entries()
      first = iter.next().value
      second = iter.next().value
    })
    describe('normal order sort', () => {
      it('should return -1 if the first value has a smaller number and not reversed', () => {
        result = compareTarotByNumber(first, second)
        assert.equal(result, -1)
      })
      it('should return 1 if the first value has a larger number and not reversed', () => {
        result = compareTarotByNumber(second, first)
        assert.equal(result, 1)
      })
    })
    describe('reversed order sort', () => {
      it('should return 1 if the first value has a smaller number and is reversed', () => {
        result = compareTarotByNumber(first, second, true)
        assert.equal(result, 1)
      })
      it('should return -1 if the first value has a larger number and is reversed', () => {
        result = compareTarotByNumber(second, first, true)
        assert.equal(result, -1)
      })
    })
  })

  describe('call queueMap', () => {
    let results, iter, first, second
    beforeEach( function() {
      results = queueMap(major, 5)
      iter = results.entries()
      // for first and second, they return as arrays with values [key, value]
      // so we check against first[1] to read the value
      first = iter.next().value
      second = iter.next().value
    })

    it('should return a value and not null', () => {
      assert.notEqual(results, null)
    })
    it('should return 1 array', () => {
      assert.equal(results.size, 22)
    })
    it('should return the first element as card V, The Hierophant', () => {
      assert.equal(first[1].name, 'The Hierophant')
    })
    it('should return the first element as card VI, The Lovers', () => {
      assert.equal(second[1].name, 'The Lovers')
    })
  })
})

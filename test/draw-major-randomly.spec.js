import assert from 'assert'
import {cutMap, divideMap, drawMajorRandomly, shuffleMap, combineMaps, sortMap} from '../src/draw-major-randomly.js'
import {majorArcana} from '../lib/major-arcana.js'
import {romanNumerals} from '../lib/roman-numerals.js'
import {mapMajor} from '../src/map-major.js'

describe('drawMajorRandomly Tests', function () {
  let major, romans
  beforeEach( function() {
    major = mapMajor()
    romans = romanNumerals()
  })
  describe('call divideMap', function () {
    let results
    beforeEach( function() {
      results = divideMap(major)
    })

    it('should return a value and not null', function () {
      assert.notEqual(results, null)
    })
    it('should return 2 split arrays', function () {
      assert.equal(results[0].size, 11)
      assert.equal(results[1].size, 11)
    })
    it('should return 2 split arrays and results[0] should not contain The Fool', function () {
      assert.equal(results[0].has('The Fool'), false)
    })
    it('should return 2 split arrays and results[1] should contain The Fool', function () {
      assert.equal(results[1].has('The Fool'), true)
    })
  })

  describe('call cutMap', function () {
    let results
    beforeEach( function() {
      results = cutMap(major)
    })

    it('should return a value and not null', function () {
      assert.notEqual(results, null)
    })
    it('should return 2 split arrays', function () {
      assert.equal(results[0].size, 11)
      assert.equal(results[1].size, 11)
    })
    it('results[1] should not contain The Fool', function () {
      assert.equal(results[1].has('The Fool'), false)
    })
    it('results[0] should contain The Fool', function () {
      assert.equal(results[0].has('The Fool'), true)
    })
    it('results[0] should not contain Justice', function () {
      assert.equal(results[0].has('Justice'), false)
    })
    it('results[1] should contain Justice', function () {
      assert.equal(results[1].has('Justice'), true)
    })
  })

  describe('call shuffleMap', function () {
    let shuffled
    beforeEach( function() {
      shuffled = shuffleMap(major)
    })

    it('should return a value and not null', function () {
      assert.notEqual(shuffled, null)
    })
    it('should return 1 shuffled array', function () {
      assert.equal(shuffled.size, 22)
    })
    it('should return 1 shuffled array and shuffled should contain The Fool', function () {
      assert.equal(shuffled.has('The Fool'), true)
    })
    it('should return an array with a new order', function () {
      it = shuffled.values()
      const one = it.next().value
      const two = it.next().value
      assert.equal(one.number, '0')
      assert.equal(romans.get(one.number), 0)
      assert.equal(two.number, 'II')
      assert.equal(romans.get(two.number), 2)
    })
  })

  describe('call shuffleMap', function () {
    let mapA, mapB, results
    beforeEach( function() {
      [mapA, mapB] = divideMap(major)
      results = combineMaps(mapA, mapB)
    })
    it('should return a value and not null', function () {
      assert.notEqual(results, null)
    })
    it('should receive 2 arrays each of size 11', function () {
      assert.equal(mapA.size, 11)
      assert.equal(mapB.size, 11)
    })
    it('should return a single array of size 22', function () {
      assert.equal(results.size, 22)
    })
  })

  describe('call reverseSortMap', function () {
    let results
    beforeEach( function() {
      results = sortMap(major)
    })
    it('should return a value and not null', function () {
      assert.notEqual(results, null)
    })
    it('should return a single array of size 22', function () {
      assert.equal(results.size, 22)
    })
    it('should contain the last element (The World) first', function () {
      const it = results.values()
      const first = it.next().value
      assert.equal(first.name, 'Death')
      assert.equal(romans.get(first.number), 13)
    })
  })
})

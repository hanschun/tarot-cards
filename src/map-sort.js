import {romanNumerals} from '../lib/roman-numerals.js'

/**
 * divideMap
 * Take a Map and divide it evenly into two smaller Maps.
 * @param {Map} initialMap starting Map
 * @var {Map} mapA contains the first Map element and every second element after.
 * @var {Map} mapB contains the second Map element and every second element after.
 * @returns {Array[Map]} [mapA, mapB]
 */
export const divideMap = (initialMap) => {
  const mapA = new Map(),
    mapB = new Map()
  let index = 0
  initialMap.forEach((value, key) => {
    if (index % 2 === 0) {
      mapB.set(key, value)
    } else {
      mapA.set(key, value)
    }
    index += 1
  })
  return [mapA, mapB]
}

/**
 * cutMap
 * Cut a Map into two smaller maps.
 * Cuts the Map in half (rounding down) by its size.
 * @param {Map} initialMap starting Map
 * @var {Map} mapA contains the first half of the elements.
 * @var {Map} mapB contains the second half of the elements.
 * @returns {Array[Map]} [mapA, mapB]
 */
export const cutMap = (initialMap) => {
  const mapA = new Map(),
    mapB = new Map()
  const limit = Math.floor(initialMap.size / 2)
  let index = 0
  initialMap.forEach((value, key) => {
    if (index < limit) {
      mapA.set(key, value)
    } else {
      mapB.set(key, value)
    }
    index += 1
  })
  return [mapA, mapB]
}

/**
 * Combines two Maps in order passed.
 * @param {Map} mapA 
 * @param {Map} mapB 
 * @returns {Map} map
 */
export const combineMaps = (mapA, mapB) => {
  return new Map([...mapB, ...mapA])
}

/**
 * queueMap
 * take the first X elements of a map and move them to the back.
 * @param {Map} initialMap starting Map
 * @returns {Map} map with changes
 */
export const queueMap = (initialMap, number = 1) => {
  const iter = initialMap.entries()
  const updated = new Map()
  for (let i = 0; i < number; i ++) {
    const [key, value] = iter.next().value
    updated.set(key, value)
    initialMap.delete(key)
  }
  return combineMaps(updated, initialMap)
}

/**
 * Compare Major Arcana cards by their number and return a sort value.
 * @param {Map iterator object} a the first object to compare
 * @param {Map iterator object} b the second object to compare
 * @param {boolean} reverse flag to reverse the sort
 * @var {Map} romans mapping of roman numerals to arabic numerals
 * @var {number} value the numerical value to sort by, either 1 or -1.
 * 1 sorts in order, -1 sortes in reverse order.
 * @returns {number} the sort value of 1 or -1.
 */
export const compareTarotByNumber = (a, b, reverse = false) => {
  const romans = romanNumerals()
  const numA = romans.get(a[1].number)
  const numB = romans.get(b[1].number)
  const value = numA > numB ? 1 : -1
  return reverse ? value * -1 : value
}

/**
 * Sort the objects of a Map.
 * @param {Map} initialMap Map to be sorted
 * @param {Function} fun (optional) function to be used for sorting.
 * @returns {Map} sorted Map
 */
export const sortMap = (initialMap, fun = null) => {
  if (fun) {
    return new Map([...initialMap.entries()].sort(fun));
  }
  return new Map([...initialMap.entries()].sort());
}

/**
 * shuffleMap
 * shuffle the Map items through divisions and cuts.
 * @param {Map} initialMap the Map to be shuffled
 * @returns {Map} shuffled Map
 */
export const shuffleMap = (initialMap) => {
  const [mapA, mapB] = divideMap(initialMap)
  const [mapAA, mapAB] = cutMap(mapA)
  const [mapBA, mapBB] = cutMap(mapB)
  const mapC = combineMaps(mapAA, mapBB)
  const mapD = combineMaps(mapAB, mapBA)
  return combineMaps(mapD, mapC)
}

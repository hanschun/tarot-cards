import {mapMajor} from './map-major.js'

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

export const cutMap = (initialMap) => {
  const mapA = new Map(),
    mapB = new Map()
  const limit = initialMap.size / 2
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

export const combineMaps = (mapA, mapB) => {
  return new Map([...mapB, ...mapA])
}

export const compareTarotByNumber = () => {
  //use the roman number library to compare?

  return null
}

export const sortMap = (initialMap) => {
  return new Map([...initialMap.entries()].sort());
}

export const shuffleMap = (initialMap) => {
  // returns [mapA, mapB] from divideMap
  const [mapA, mapB] = divideMap(initialMap)
  return combineMaps(mapA, mapB)
}

export const drawMajorRandomly = () => {
  const major = mapMajor()
  return shuffleMap(major)
  /* 
    1. iterate over the map
    2. divide the map into two smaller maps.
    3. return the shuffled map.
    4. repeat (so a sub-function)
  */  


}

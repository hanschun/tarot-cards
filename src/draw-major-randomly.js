import {mapMajor} from './map-major.js'
import {shuffleMap} from './map-sort.js'

// THESE FUNCTIONS NEED TO GET TURNED INTO A SET OF UTILITIES

export const drawMajorRandomly = (times) => {
  let deck = mapMajor()
  for(let i = 0; i < times; i++) {
    const shuffled = shuffleMap(deck)
    deck = shuffled
  }
  return deck
  /* 
    1. iterate over the map
    2. divide the map into two smaller maps.
    3. return the shuffled map.
    4. repeat (so a sub-function)
  */  


}

import {mapMajor} from './map-major.js'

export const deal = (cardName) => {
  // know which card we are on
  // deal next card in order
  const deck = mapMajor()
  // values is [{values}] as an Array
  const cards = [...deck.values()]
  const ind = cards.findIndex(c => c.name === cardName)
  return ind+1 < cards.length ?
    cards[ind+1] : 
    cards[0]
}

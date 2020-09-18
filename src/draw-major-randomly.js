import {mapMajor} from './map-major.js'
import {shuffleMap, queueMap} from './map-sort.js'

export const shuffle = async (deck, times) => {
  for(let i = 0; i < times; i++) {
    const shuffled = shuffleMap(deck)
    deck = shuffled
  }
  return deck
}

export const queueCards = async (deck) => {
  const min = 2
  const max = 25
  const limit = Math.floor(Math.random() * (max - min) + min)
  const iter = limit > 2 ? limit : 2
  for(let j = 0; j < iter; j++) {
    const queued = queueMap(deck, j)
    deck = queued
  }
  return deck
}

export const shuffleDeck = async (times) => {
  let deck = mapMajor()
  deck = await shuffle(deck, times)
  deck = await queueCards(deck)
  return deck
}

export const drawMajorRandomly = async (times) => {
  const deck = await shuffleDeck(times)
  const cards = deck.entries()
  return cards.next().value
}

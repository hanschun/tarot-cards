import {majorArcana} from '../lib/major-arcana.js'

export const mapMajor = () => {
  const major = new Map()
  majorArcana.map(card => major.set(card.name, { ...card }))
  return major
}

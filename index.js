import {majorArcana} from './lib/major-arcana'

export const drawMajor = () => {
  const major = new Map()
  majorArcana.map(card => major.set(card.name, {...card.number, ...card.image}))
  return major.get('Strength')
}
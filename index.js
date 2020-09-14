import {majorArcana} from './lib/major-arcana'

export const drawMajor = () => {
  const major = new Map()
  majorArcana.map(card => major.set(card.name, {...card}))
  console.log(major.get('Strength'))
}
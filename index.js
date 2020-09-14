import {majorArcana} from './lib/major-arcana'

const mapMajor = () => {
  const major = new Map()
  majorArcana.map(card => major.set(card.name, { ...card }))
  return major
}

export const drawMajorByName = (name) => {
  const major = mapMajor()
  console.log(major.get(name))
  return major.get(name)
}
import {mapMajor} from './map-major.js'

export const drawMajorByName = (name) => {
  const major = mapMajor()
  return major.get(name)
}

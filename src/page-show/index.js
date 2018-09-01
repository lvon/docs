import {asyncComponent} from '../common/util'
import './show.styl'

export default asyncComponent(async () => {
  try {
    const module = await import('./show')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

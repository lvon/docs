import {asyncComponent} from '../common/util'
import './edit.styl'

export default asyncComponent(async () => {
  try {
    const module = await import('./edit')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

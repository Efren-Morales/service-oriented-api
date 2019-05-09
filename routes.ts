import { send } from 'micro'
import { router, get } from 'microrouter'
import { getPeople } from './services'

export default router(
  get('/', async (req, res) => {
    const people = await getPeople()
    return send(res, 200, people)
  })
)
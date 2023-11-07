import { Router } from 'express'
import { v4 } from 'uuid'

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Progamador do Futuro',
    email: 'futuro@progamação.com',
    password_hash: '123456abc',
  })
  return response.json(user)
})

export default routes

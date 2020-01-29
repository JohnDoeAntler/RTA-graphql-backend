import { auth } from './Mutation/auth'
import { UserMutation } from './Mutation/UserMutation'
import { UserQuery } from './Query/UserQuery'

export default {
  Query: {
    ...UserQuery,
  },
  Mutation: {
    ...auth,
    ...UserMutation,
  },
}

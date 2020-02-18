import { forwardTo } from "prisma-binding";

export const UserQuery = {
	user: forwardTo('db'),
	users: forwardTo('db'),
	usersConnection: forwardTo('db'),
}

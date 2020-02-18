import { forwardTo } from "prisma-binding";

export const UserMutation = {
	createUser: forwardTo('db'),
	updateUser: forwardTo('db'),
	updateManyUsers: forwardTo('db'),
	deleteUser: forwardTo('db'),
	deleteManyUsers: forwardTo('db'),
}

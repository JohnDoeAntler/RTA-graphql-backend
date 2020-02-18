import { forwardTo } from "prisma-binding";

export const WorkMutation = {
	createWork: forwardTo('db'),
	updateWork: forwardTo('db'),
	updateManyWorks: forwardTo('db'),
	deleteWork: forwardTo('db'),
	deleteManyWorks: forwardTo('db'),
}

import { forwardTo } from "prisma-binding";

export const WorkQuery = {
	work: forwardTo('db'),
	works: forwardTo('db'),
	worksConnection: forwardTo('db'),
}

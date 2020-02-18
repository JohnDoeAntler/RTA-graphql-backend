import { forwardTo } from "prisma-binding";

export const CategoryQuery = {
	category: forwardTo('db'),
	categories: forwardTo('db'),
	categoriesConnection: forwardTo('db'),
}

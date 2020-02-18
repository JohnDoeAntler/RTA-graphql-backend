import { forwardTo } from "prisma-binding";

export const CategoryMutation = {
	createCategory: forwardTo('db'),
	updateCategory: forwardTo('db'),
	updateManyCategories: forwardTo('db'),
	deleteCategory: forwardTo('db'),
	deleteManyCategories: forwardTo('db'),
}

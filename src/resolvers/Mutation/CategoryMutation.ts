import { Context } from "../../utils";

export const CategoryMutation = {
	async createCategory(parent, args, ctx: Context, info) {
		return ctx.prisma.createCategory(
			args
		);
	},
	async updateCategory(parent, args, ctx: Context, info) {
		return ctx.prisma.updateCategory(
			args
		);
	},
	async updateManyCategories(parent, args, ctx: Context, info) {
		return ctx.prisma.updateManyCategories(
			args
		);
	},
	async deleteCategory(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteCategory(
			args
		);
	},
	async deleteManyCategories(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyCategories(
			args
		)
	}
}
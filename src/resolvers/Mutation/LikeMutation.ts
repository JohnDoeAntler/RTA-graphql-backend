import { Context } from "../../utils";

export const LikeMutation = {
	async createLike(parent, args, ctx: Context, info) {
		return ctx.prisma.createLike(
			args
		);
	},
	async updateLike(parent, args, ctx: Context, info) {
		return ctx.prisma.updateLike(
			args
		);
	},
	async deleteLike(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteLike(
			args
		);
	},
	async deleteManyLikes(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyLikes(
			args
		)
	}
}
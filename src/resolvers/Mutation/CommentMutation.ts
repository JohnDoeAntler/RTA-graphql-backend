import { Context } from "../../utils";

export const CommentMutation = {
	async createComment(parent, args, ctx: Context, info) {
		return ctx.prisma.createComment(
			args
		);
	},
	async updateComment(parent, args, ctx: Context, info) {
		return ctx.prisma.updateComment(
			args
		);
	},
	async updateManyComments(parent, args, ctx: Context, info) {
		return ctx.prisma.updateManyComments(
			args
		);
	},
	async deleteComment(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteComment(
			args
		);
	},
	async deleteManyComments(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyComments(
			args
		)
	}
}
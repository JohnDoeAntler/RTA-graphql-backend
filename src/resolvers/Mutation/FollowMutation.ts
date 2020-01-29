import { Context } from "../../utils";

export const FollowMutation = {
	async createFollow(parent, args, ctx: Context, info) {
		return ctx.prisma.createFollow(
			args
		);
	},
	async updateFollow(parent, args, ctx: Context, info) {
		return ctx.prisma.updateFollow(
			args
		);
	},
	async deleteFollow(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteFollow(
			args
		);
	},
	async deleteManyFollows(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyFollows(
			args
		)
	}
}
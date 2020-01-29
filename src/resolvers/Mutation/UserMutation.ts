import { Context } from "../../utils";

export const UserMutation = {
	async createUser(parent, args, ctx: Context, info) {
		return ctx.prisma.createUser(
			args
		);
	},
	async updateUser(parent, args, ctx: Context, info) {
		return ctx.prisma.updateUser(
			args
		);
	},
	async updateManyUsers(parent, args, ctx: Context, info) {
		return ctx.prisma.updateManyUsers(
			args
		);
	},
	async deleteUser(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteUser(
			args
		);
	},
	async deleteManyUsers(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyUsers(
			args
		)
	}
}
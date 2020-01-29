import { Context } from "../../utils";

export const WorkMutation = {
	async createWork(parent, args, ctx: Context, info) {
		return ctx.prisma.createWork(
			args
		);
	},
	async updateWork(parent, args, ctx: Context, info) {
		return ctx.prisma.updateWork(
			args
		);
	},
	async updateManyWorks(parent, args, ctx: Context, info) {
		return ctx.prisma.updateManyWorks(
			args
		);
	},
	async deleteWork(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteWork(
			args
		);
	},
	async deleteManyWorks(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyWorks(
			args
		)
	}
}
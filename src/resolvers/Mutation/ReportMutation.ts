import { Context } from "../../utils";

export const ReportMutation = {
	async createReport(parent, args, ctx: Context, info) {
		return ctx.prisma.createReport(
			args
		);
	},
	async updateReport(parent, args, ctx: Context, info) {
		return ctx.prisma.updateReport(
			args
		);
	},
	async updateManyReports(parent, args, ctx: Context, info) {
		return ctx.prisma.updateManyReports(
			args
		);
	},
	async deleteReport(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteReport(
			args
		);
	},
	async deleteManyReports(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyReports(
			args
		)
	}
}
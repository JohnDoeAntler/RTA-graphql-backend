import { Context } from '../../utils';

export const ReportQuery = {
	report: (parent, args, ctx: Context) => {
		return ctx.prisma.report(args);
	},
	reports: (parent, args, ctx: Context) => {
		return ctx.prisma.reports(args);
	},
}

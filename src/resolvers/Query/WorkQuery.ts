import { Context } from '../../utils';

export const WorkQuery = {
	work: (parent, args, ctx: Context) => {
		return ctx.prisma.work(args);
	},
	works: (parent, args, ctx: Context) => {
		return ctx.prisma.works(args);
	},
}

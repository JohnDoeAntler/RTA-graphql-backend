import { Context } from '../../utils';

export const CategoryQuery = {
	category: (parent, args, ctx: Context) => {
		return ctx.prisma.category(args);
	},
	categorys: (parent, args, ctx: Context) => {
		return ctx.prisma.categories(args);
	},
}

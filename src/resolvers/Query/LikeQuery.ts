import { Context } from '../../utils';

export const LikeQuery = {
	like: (parent, args, ctx: Context) => {
		return ctx.prisma.like(args);
	},
	likes: (parent, args, ctx: Context) => {
		return ctx.prisma.likes(args);
	},
}

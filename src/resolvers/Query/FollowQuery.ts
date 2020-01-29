import { Context } from '../../utils';

export const FollowQuery = {
	follow: (parent, args, ctx: Context) => {
		return ctx.prisma.follow(args);
	},
	follows: (parent, args, ctx: Context) => {
		return ctx.prisma.follows(args);
	},
}

import { Context } from '../../utils';

export const UserQuery = {
	user: (parent, args, ctx: Context) => {
		return ctx.prisma.user(args);
	},
	users: (parent, args, ctx: Context) => {
		return ctx.prisma.users(args);
	},
}

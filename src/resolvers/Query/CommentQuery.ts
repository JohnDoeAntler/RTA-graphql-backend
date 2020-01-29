import { Context } from '../../utils';

export const CommentQuery = {
	comment: (parent, args, ctx: Context) => {
		return ctx.prisma.comment(args);
	},
	comments: (parent, args, ctx: Context) => {
		return ctx.prisma.comments(args);
	},
}

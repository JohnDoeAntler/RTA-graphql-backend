import { Context } from '../../utils';

export const FavouriteQuery = {
	favourite: (parent, args, ctx: Context) => {
		return ctx.prisma.favourite(args);
	},
	favourites: (parent, args, ctx: Context) => {
		return ctx.prisma.favourites(args);
	},
}

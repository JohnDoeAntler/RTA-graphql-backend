import { Context } from "../../utils";

export const FavouriteMutation = {
	async createFavourite(parent, args, ctx: Context, info) {
		return ctx.prisma.createFavourite(
			args
		);
	},
	async updateFavourite(parent, args, ctx: Context, info) {
		return ctx.prisma.updateFavourite(
			args
		);
	},
	async deleteFavourite(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteFavourite(
			args
		);
	},
	async deleteManyFavourites(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyFavourites(
			args
		)
	}
}
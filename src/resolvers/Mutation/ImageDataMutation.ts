import { Context } from "../../utils";

export const ImageDataMutation = {
	async createImageData(parent, args, ctx: Context, info) {
		return ctx.prisma.createImageData(
			args
		);
	},
	async updateImageData(parent, args, ctx: Context, info) {
		return ctx.prisma.updateImageData(
			args
		);
	},
	async updateManyImageDatas(parent, args, ctx: Context, info) {
		return ctx.prisma.updateManyImageDatas(
			args
		);
	},
	async deleteImageData(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteImageData(
			args
		);
	},
	async deleteManyImageDatas(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyImageDatas(
			args
		)
	}
}
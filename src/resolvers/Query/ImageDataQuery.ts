import { Context } from '../../utils';

export const ImageDataQuery = {
	imageData: (parent, args, ctx: Context) => {
		return ctx.prisma.imageData(args);
	},
	imageDatas: (parent, args, ctx: Context) => {
		return ctx.prisma.imageDatas(args);
	},
}

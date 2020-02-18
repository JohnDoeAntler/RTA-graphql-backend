import { forwardTo } from "prisma-binding";

export const ImageDataQuery = {
	imageData: forwardTo('db'),
	imageDatas: forwardTo('db'),
	imageDatasConnection: forwardTo('db'),
}

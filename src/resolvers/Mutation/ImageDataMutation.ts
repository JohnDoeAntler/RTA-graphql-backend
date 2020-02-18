import { forwardTo } from "prisma-binding";

export const ImageDataMutation = {
	createImageData: forwardTo('db'),
	updateImageData: forwardTo('db'),
	updateManyImageDatas: forwardTo('db'),
	deleteImageData: forwardTo('db'),
	deleteManyImageDatas: forwardTo('db'),
}

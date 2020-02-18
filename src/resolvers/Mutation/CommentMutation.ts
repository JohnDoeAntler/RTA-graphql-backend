import { forwardTo } from "prisma-binding";

export const CommentMutation = {
	createComment: forwardTo('db'),
	updateComment: forwardTo('db'),
	updateManyComments: forwardTo('db'),
	deleteComment: forwardTo('db'),
	deleteManyComments: forwardTo('db'),
}

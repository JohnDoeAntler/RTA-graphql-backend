import { forwardTo } from "prisma-binding";

export const CommentQuery = {
	comment: forwardTo('db'),
	comments: forwardTo('db'),
	commentsConnection: forwardTo('db'),
}

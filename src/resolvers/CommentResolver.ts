import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Comment } from './../entity/Comment';

@InputType()
class CommentQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public content: string;

	@Field({ nullable: true })
	public userId: string;

	@Field({ nullable: true })
	public workId: string;

	@Field({ nullable: true })
	public createdAt: Date;

	@Field({ nullable: true })
	public updatedAt: Date;

}

@InputType()
class CommentCreateInput {

	@Field()
	public content: string;

	@Field()
	public userId: string;

	@Field()
	public workId: string;

}

@InputType()
class CommentUpdateInput {

	@Field({ nullable: true })
	public content: string;

	@Field({ nullable: true })
	public userId: string;

	@Field({ nullable: true })
	public workId: string;

}

@Resolver()
export class CommentResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Comment])
	public async comments(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => CommentQueryInput, { nullable: true }) where: CommentQueryInput,
	) {
		return await Comment.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Comment)
	public async createComment(
		@Arg('input', () => CommentCreateInput) input: CommentCreateInput,
	) {
		return await Comment.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateComment(
		@Arg('id') id: string,
		@Arg('input', () => CommentUpdateInput) input: CommentUpdateInput,
	) {
		return (await Comment.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeComment(
		@Arg('id') id: string,
	) {
		return (await Comment.delete({ id })).raw.affectedRows > 0;
	}

}

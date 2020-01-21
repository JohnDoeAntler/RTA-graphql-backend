import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Like } from './../entity/Like';

@InputType()
class LikeQueryInput {

	@Field({ nullable: true })
	public id: string;

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
class LikeCreateInput {

	@Field()
	public userId: string;

	@Field()
	public workId: string;

}

@InputType()
class LikeUpdateInput {

	@Field({ nullable: true })
	public userId: string;

	@Field({ nullable: true })
	public workId: string;

}

@Resolver()
export class LikeResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Like])
	public async likes(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => LikeQueryInput, { nullable: true }) where: LikeQueryInput,
	) {
		return await Like.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Like)
	public async createLike(
		@Arg('input', () => LikeCreateInput) input: LikeCreateInput,
	) {
		return await Like.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateLike(
		@Arg('id') id: string,
		@Arg('input', () => LikeUpdateInput) input: LikeUpdateInput,
	) {
		return (await Like.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeLike(
		@Arg('id') id: string,
	) {
		return (await Like.delete({ id })).raw.affectedRows > 0;
	}

}

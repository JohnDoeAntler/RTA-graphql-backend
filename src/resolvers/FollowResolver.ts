import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Follow } from './../entity/Follow';

@InputType()
class FollowQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public followingId: string;

	@Field({ nullable: true })
	public followerId: string;

	@Field({ nullable: true })
	public createdAt: Date;

	@Field({ nullable: true })
	public updatedAt: Date;

}

@InputType()
class FollowCreateInput {

	@Field()
	public followingId: string;

	@Field()
	public followerId: string;

}

@InputType()
class FollowUpdateInput {

	@Field({ nullable: true })
	public followingId: string;

	@Field({ nullable: true })
	public followerId: string;

}

@Resolver()
export class FollowResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Follow])
	public async follows(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => FollowQueryInput, { nullable: true }) where: FollowQueryInput,
	) {
		return await Follow.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Follow)
	public async createFollow(
		@Arg('input', () => FollowCreateInput) input: FollowCreateInput,
	) {
		return await Follow.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateFollow(
		@Arg('id') id: string,
		@Arg('input', () => FollowUpdateInput) input: FollowUpdateInput,
	) {
		return (await Follow.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeFollow(
		@Arg('id') id: string,
	) {
		return (await Follow.delete({ id })).raw.affectedRows > 0;
	}

}

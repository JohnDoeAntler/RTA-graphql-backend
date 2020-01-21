import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Favourite } from './../entity/Favourite';

@InputType()
class FavouriteQueryInput {

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
class FavouriteCreateInput {

	@Field()
	public userId: string;

	@Field()
	public workId: string;

}

@InputType()
class FavouriteUpdateInput {

	@Field({ nullable: true })
	public userId: string;

	@Field({ nullable: true })
	public workId: string;

}

@Resolver()
export class FavouriteResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Favourite])
	public async favourites(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => FavouriteQueryInput, { nullable: true }) where: FavouriteQueryInput,
	) {
		return await Favourite.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Favourite)
	public async createFavourite(
		@Arg('input', () => FavouriteCreateInput) input: FavouriteCreateInput,
	) {
		return await Favourite.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateFavourite(
		@Arg('id') id: string,
		@Arg('input', () => FavouriteUpdateInput) input: FavouriteUpdateInput,
	) {
		return (await Favourite.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeFavourite(
		@Arg('id') id: string,
	) {
		return (await Favourite.delete({ id })).raw.affectedRows > 0;
	}

}

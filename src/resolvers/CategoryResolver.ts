import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Category } from './../entity/Category';

@InputType()
class CategoryQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public name: string;

	@Field({ nullable: true })
	public description: string;

	@Field({ nullable: true })
	public createdAt: Date;

	@Field({ nullable: true })
	public updatedAt: Date;

}

@InputType()
class CategoryCreateInput {

	@Field()
	public name: string;

	@Field()
	public description: string;

}

@InputType()
class CategoryUpdateInput {

	@Field({ nullable: true })
	public name: string;

	@Field({ nullable: true })
	public description: string;

}

@Resolver()
export class CategoryResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Category])
	public async categories(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => CategoryQueryInput, { nullable: true }) where: CategoryQueryInput,
	) {
		return await Category.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Category)
	public async createCategory(
		@Arg('input', () => CategoryCreateInput) input: CategoryCreateInput,
	) {
		return await Category.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateCategory(
		@Arg('id') id: string,
		@Arg('input', () => CategoryUpdateInput) input: CategoryUpdateInput,
	) {
		return (await Category.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeCategory(
		@Arg('id') id: string,
	) {
		return (await Category.delete({ id })).raw.affectedRows > 0;
	}

}

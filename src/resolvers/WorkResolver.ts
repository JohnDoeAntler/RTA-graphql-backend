import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Work } from './../entity/Work';

@InputType()
class WorkQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public name: string;

	@Field({ nullable: true })
	public description: string;

	@Field({ nullable: true })
	public visibility: boolean;

	@Field(() => Int, { nullable: true })
	public views: number;

	@Field(() => Int, { nullable: true })
	public usage: number;

	@Field({ nullable: true })
	public userId: string;

	@Field({ nullable: true })
	public categoryId: string;

	@Field({ nullable: true })
	public createdAt: Date;

	@Field({ nullable: true })
	public updatedAt: Date;

}

@InputType()
class WorkCreateInput {

	@Field()
	public name: string;

	@Field()
	public description: string;

	@Field()
	public visibility: boolean;

	@Field(() => Int)
	public views: number;

	@Field(() => Int)
	public usage: number;

	@Field()
	public userId: string;

	@Field()
	public categoryId: string;

}

@InputType()
class WorkUpdateInput {

	@Field({ nullable: true })
	public name: string;

	@Field({ nullable: true })
	public description: string;

	@Field({ nullable: true })
	public visibility: boolean;

	@Field(() => Int, { nullable: true })
	public views: number;

	@Field(() => Int, { nullable: true })
	public usage: number;

	@Field({ nullable: true })
	public userId: string;

	@Field({ nullable: true })
	public categoryId: string;

}

@Resolver()
export class WorkResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Work])
	public async works(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => WorkQueryInput, { nullable: true }) where: WorkQueryInput,
	) {
		return await Work.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Work)
	public async createWork(
		@Arg('input', () => WorkCreateInput) input: WorkCreateInput,
	) {
		return await Work.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateWork(
		@Arg('id') id: string,
		@Arg('input', () => WorkUpdateInput) input: WorkUpdateInput,
	) {
		return (await Work.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeWork(
		@Arg('id') id: string,
	) {
		return (await Work.delete({ id })).raw.affectedRows > 0;
	}

}

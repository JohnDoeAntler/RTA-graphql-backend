import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Role } from './../entity/Role';

@InputType()
class RoleQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public name: string;

	@Field({ nullable: true })
	public createdAt: Date;

	@Field({ nullable: true })
	public updatedAt: Date;

}

@InputType()
class RoleCreateInput {

	@Field()
	public name: string;

}

@InputType()
class RoleUpdateInput {

	@Field({ nullable: true })
	public name: string;

}

@Resolver()
export class RoleResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Role])
	public async roles(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => RoleQueryInput, { nullable: true }) where: RoleQueryInput,
	) {
		return await Role.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Role)
	public async createRole(
		@Arg('input', () => RoleCreateInput) input: RoleCreateInput,
	) {
		return await Role.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateRole(
		@Arg('id') id: string,
		@Arg('input', () => RoleUpdateInput) input: RoleUpdateInput,
	) {
		return (await Role.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeRole(
		@Arg('id') id: string,
	) {
		return (await Role.delete({ id })).raw.affectedRows > 0;
	}

}

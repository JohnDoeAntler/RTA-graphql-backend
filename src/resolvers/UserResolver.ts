import bcrypt from 'bcrypt';
import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { User } from './../entity/User';

@InputType()
class UserQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public email: string;

	@Field({ nullable: true })
	public passwordDigest: string;

	@Field({ nullable: true })
	public roleId: string;

	@Field({ nullable: true })
	public createdAt: Date;

	@Field({ nullable: true })
	public updatedAt: Date;

}

@InputType()
class UserCreateInput {

	@Field()
	public email: string;

	@Field()
	public passwordDigest: string;

	@Field()
	public roleId: string;

}

@InputType()
class UserUpdateInput {

	@Field({ nullable: true })
	public email: string;

	@Field({ nullable: true })
	public passwordDigest: string;

	@Field({ nullable: true })
	public roleId: string;

}

@Resolver()
export class UserResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [User])
	public async users(
		@Arg('skip', () => Int, { nullable: true }) skip?: number,
		@Arg('take', () => Int, { nullable: true }) take?: number,
		@Arg('where', () => UserQueryInput, { nullable: true }) where?: UserQueryInput,
	) {
		return await User.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => User)
	public async createUser(
		@Arg('input', () => UserCreateInput) input: UserCreateInput,
	) {
		const hashedPassword = await new Promise<string>((res, rej) => {
			bcrypt.hash(input.passwordDigest, 1024, (err, hash) => {
				if (err) {
					rej(err);
				}
				res(hash);
			});
		});

		return await User.create({
			...input,
			passwordDigest: hashedPassword,
		}).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateUser(
		@Arg('id') id: string,
		@Arg('input', () => UserUpdateInput) input: UserUpdateInput,
	) {
		let result;

		if (!!input.passwordDigest) {
			const hashedPassword = await new Promise<string>((res, rej) => {
				bcrypt.hash(input.passwordDigest, 1024, (err, hash) => {
					if (err) {
						rej(err);
					}
					res(hash);
				});
			});

			result = await User.update({ id }, {
				...input,
				passwordDigest: hashedPassword,
			});
		} else {
			result = await User.update({ id }, input);
		}

		return result.raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeUser(
		@Arg('id') id: string,
	) {
		return (await User.delete({ id })).raw.affectedRows > 0;
	}

}

import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Report } from './../entity/Report';

@InputType()
class ReportQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public reason: string;

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
class ReportCreateInput {

	@Field()
	public reason: string;

	@Field()
	public userId: string;

	@Field()
	public workId: string;

}

@InputType()
class ReportUpdateInput {

	@Field({ nullable: true })
	public reason: string;

	@Field({ nullable: true })
	public userId: string;

	@Field({ nullable: true })
	public workId: string;

}

@Resolver()
export class ReportResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [Report])
	public async reports(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => ReportQueryInput, { nullable: true }) where: ReportQueryInput,
	) {
		return await Report.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Report)
	public async createReport(
		@Arg('input', () => ReportCreateInput) input: ReportCreateInput,
	) {
		return await Report.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateReport(
		@Arg('id') id: string,
		@Arg('input', () => ReportUpdateInput) input: ReportUpdateInput,
	) {
		return (await Report.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeReport(
		@Arg('id') id: string,
	) {
		return (await Report.delete({ id })).raw.affectedRows > 0;
	}

}

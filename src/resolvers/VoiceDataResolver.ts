import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { VoiceData } from './../entity/VoiceData';

@InputType()
class VoiceDataQueryInput {

	@Field({ nullable: true })
	public id: string;

	@Field({ nullable: true })
	public fileUrl: string;

	@Field({ nullable: true })
	public workId: string;

	@Field({ nullable: true })
	public createdAt: Date;

	@Field({ nullable: true })
	public updatedAt: Date;

}

@InputType()
class VoiceDataCreateInput {

	@Field()
	public fileUrl: string;

	@Field()
	public workId: string;

}

@InputType()
class VoiceDataUpdateInput {

	@Field({ nullable: true })
	public fileUrl: string;

	@Field({ nullable: true })
	public workId: string;

}

@Resolver()
export class VoiceDataResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [VoiceData])
	public async voiceDatas(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => VoiceDataQueryInput, { nullable: true }) where: VoiceDataQueryInput,
	) {
		return await VoiceData.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => VoiceData)
	public async createVoiceData(
		@Arg('input', () => VoiceDataCreateInput) input: VoiceDataCreateInput,
	) {
		return await VoiceData.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateVoiceData(
		@Arg('id') id: string,
		@Arg('input', () => VoiceDataUpdateInput) input: VoiceDataUpdateInput,
	) {
		return (await VoiceData.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeVoiceData(
		@Arg('id') id: string,
	) {
		return (await VoiceData.delete({ id })).raw.affectedRows > 0;
	}

}

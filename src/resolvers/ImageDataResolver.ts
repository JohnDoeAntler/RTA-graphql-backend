import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { ImageData } from './../entity/ImageData';

@InputType()
class ImageDataQueryInput {

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
class ImageDataCreateInput {

	@Field()
	public fileUrl: string;

	@Field()
	public workId: string;

}

@InputType()
class ImageDataUpdateInput {

	@Field({ nullable: true })
	public fileUrl: string;

	@Field({ nullable: true })
	public workId: string;

}

@Resolver()
export class ImageDataResolver {

	//
	// ─── READ ───────────────────────────────────────────────────────────────────────
	//

	@Query(() => [ImageData])
	public async imageDatas(
		@Arg('skip', () => Int, { nullable: true }) skip: number,
		@Arg('take', () => Int, { nullable: true }) take: number,
		@Arg('where', () => ImageDataQueryInput, { nullable: true }) where: ImageDataQueryInput,
	) {
		return await ImageData.find({
			skip,
			take,
			where,
		});
	}

	//
	// ─── CREATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => ImageData)
	public async createImageData(
		@Arg('input', () => ImageDataCreateInput) input: ImageDataCreateInput,
	) {
		return await ImageData.create(input).save();
	}

	//
	// ─── UPDATE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async updateImageData(
		@Arg('id') id: string,
		@Arg('input', () => ImageDataUpdateInput) input: ImageDataUpdateInput,
	) {
		return (await ImageData.update({ id }, input)).raw.affectedRows > 0;
	}

	//
	// ─── REMOVE ─────────────────────────────────────────────────────────────────────
	//

	@Mutation(() => Boolean)
	public async removeImageData(
		@Arg('id') id: string,
	) {
		return (await ImageData.delete({ id })).raw.affectedRows > 0;
	}

}

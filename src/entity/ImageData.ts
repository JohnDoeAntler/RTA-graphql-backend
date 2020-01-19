import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Work } from './Work';

@Entity()
@ObjectType()
export class ImageData extends BaseEntity {

	//
	// ─── PRIMARY KEY ────────────────────────────────────────────────────────────────
	//

	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	public readonly id: string;

	//
	// ─── ATTRIBUTE ──────────────────────────────────────────────────────────────────
	//

	@Field()
	@Column()
	public fileUrl: Date;

	//
	// ─── MANY TO ONE ────────────────────────────────────────────────────────────────
	//

	@ManyToOne(() => Work, (work) => work.imageData, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
	@JoinColumn({
		name: 'workId',
	})
	public work: Work;

	@Field()
	@Column()
	public workId: string;

	//
	// ─── TIMESTAMP ──────────────────────────────────────────────────────────────────
	//

	@Field()
	@CreateDateColumn()
	public createdAt: Date;

	@Field()
	@UpdateDateColumn()
	public updatedAt: Date;

}

import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Work } from './Work';

@ObjectType()
@Entity()
export class Report extends BaseEntity {

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
	public reason: string;

	//
	// ─── MANY TO ONE ────────────────────────────────────────────────────────────────
	//

	@ManyToOne(() => User, (user) => user.reports)
	public user: User;

	@Field()
	public userId: string;

	@ManyToOne(() => Work, (work) => work.reports)
	public work: Work;

	@Field()
	public workId: string;

	//
	// ─── TIMESTAMP ──────────────────────────────────────────────────────────────────
	//

	@Field()
	@Column()
	public createdAt: Date;

	@Field()
	@Column()
	public updatedAt: Date;

}

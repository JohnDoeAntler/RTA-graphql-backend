import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Work } from './Work';

@Entity()
@ObjectType()
export class Like extends BaseEntity {

	//
	// ─── PRIMARY KEY ────────────────────────────────────────────────────────────────
	//

	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	public readonly id: string;

	//
	// ─── MANY TO ONE ────────────────────────────────────────────────────────────────
	//

	@ManyToOne(() => User, (user) => user.likes, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
	@JoinColumn({
		name: 'userId',
	})
	public user: User;

	@Field()
	@Column()
	public userId: string;

	@ManyToOne(() => Work, (work) => work.likes, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
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

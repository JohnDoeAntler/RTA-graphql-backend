import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';

@Entity()
@ObjectType()
export class Follow extends BaseEntity {

	//
	// ─── PRIMARY KEY ────────────────────────────────────────────────────────────────
	//

	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	public readonly id: string;

	//
	// ─── MANY TO ONE ────────────────────────────────────────────────────────────────
	//

	@ManyToOne(() => User, (user) => user.followings, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
	@JoinColumn({
		name: 'followingId',
	})
	public following: User;

	@Field()
	@Column()
	public followingId: string;

	@ManyToOne(() => User, (user) => user.followers, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
	@JoinColumn({
		name: 'followerId',
	})
	public follower: User;

	@Field()
	@Column()
	public followerId: string;

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

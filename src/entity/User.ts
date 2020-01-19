import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Comment } from './Comment';
import { Favourite } from './Favourite';
import { Follow } from './Follow';
import { Like } from './Like';
import { Report } from './Report';
import { Role } from './Role';
import { Work } from './Work';

@Entity()
@ObjectType()
export class User extends BaseEntity {

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
	public email: string;

	@Field()
	@Column()
	public passwordDigest: string;

	//
	// ─── MANY TO ONE ────────────────────────────────────────────────────────────────
	//

	@ManyToOne(() => Role, (role) => role.users, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
	@JoinColumn({
		name: 'roleId',
	})
	public role: Role;

	@Field()
	@Column()
	public roleId: string;

	//
	// ─── TIMESTAMP ──────────────────────────────────────────────────────────────────
	//

	@Field()
	@CreateDateColumn()
	public createdAt: Date;

	@Field()
	@UpdateDateColumn()
	public updatedAt: Date;

	//
	// ─── ONE TO MANY ────────────────────────────────────────────────────────────────
	//

	@OneToMany(() => Work, (work) => work.user)
	public works: Work[];

	@OneToMany(() => Like, (like) => like.user)
	public likes: Like[];

	@OneToMany(() => Favourite, (favourite) => favourite.user)
	public favourites: Favourite[];

	@OneToMany(() => Comment, (comment) => comment.user)
	public comments: Comment[];

	@OneToMany(() => Report, (report) => report.user)
	public reports: Report[];

	@OneToMany(() => Follow, (follow) => follow.following)
	public followings: Follow[];

	@OneToMany(() => Follow, (follow) => follow.follower)
	public followers: Follow[];

}

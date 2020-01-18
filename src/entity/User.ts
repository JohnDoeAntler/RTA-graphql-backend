import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './Comment';
import { Favourite } from './Favourite';
import { Follow } from './Follow';
import { Like } from './Like';
import { Report } from './Report';
import { Role } from './Role';
import { Work } from './Work';

@ObjectType()
@Entity()
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

	@ManyToOne(() => Role, (role) => role.users)
	public role: Role;

	@Field()
	public roleId: string;

	//
	// ─── TIMESTAMP ──────────────────────────────────────────────────────────────────
	//

	@Field()
	@Column()
	public createdAt: Date;

	@Field()
	@Column()
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

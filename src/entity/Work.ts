import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from './Category';
import { Comment } from './Comment';
import { Favourite } from './Favourite';
import { ImageData } from './ImageData';
import { Like } from './Like';
import { Report } from './Report';
import { User } from './User';
import { VoiceData } from './VoiceData';

@Entity()
@ObjectType()
export class Work extends BaseEntity {

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
	public name: string;

	@Field()
	@Column()
	public description: string;

	@Field()
	@Column()
	public visibility: boolean;

	@Field(() => Int)
	@Column()
	public views: number;

	@Field(() => Int)
	@Column()
	public usage: number;

	//
	// ─── MANY TO ONE ────────────────────────────────────────────────────────────────
	//

	@ManyToOne(() => User, (user) => user.works, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
	@JoinColumn({
		name: 'userId',
	})
	public user: User;

	@Field()
	@Column()
	public userId: string;

	@ManyToOne(() => Category, (category) => category.works, { nullable: false, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
	@JoinColumn({
		name: 'categoryId',
	})
	public category: string;

	@Field()
	@Column()
	public categoryId: string;

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

	@OneToMany(() => VoiceData, (voiceData) => voiceData.work)
	public voiceData: VoiceData[];

	@OneToMany(() => ImageData, (imageData) => imageData.work)
	public imageData: ImageData[];

	@OneToMany(() => Like, (like) => like.work)
	public likes: Like[];

	@OneToMany(() => Favourite, (favourite) => favourite.work)
	public favourites: Favourite[];

	@OneToMany(() => Comment, (comment) => comment.work)
	public comments: Comment[];

	@OneToMany(() => Report, (report) => report.work)
	public reports: Report[];

}

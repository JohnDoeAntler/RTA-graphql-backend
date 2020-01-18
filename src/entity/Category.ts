import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Work } from './Work';

@ObjectType()
@Entity()
export class Category extends BaseEntity {

	//
	// ─── PRIMARY KEY ────────────────────────────────────────────────────────────────
	//

	@Field()
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	//
	// ─── ATTRIBUTE ──────────────────────────────────────────────────────────────────
	//

	@Field()
	@Column()
	public name: string;

	@Field()
	@Column()
	public description: string;

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

	@OneToMany(() => Work, (work) => work.category)
	public works: Work[];

}

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const APP_SECRET = process.env.APP_SECRET;

export const auth = {
	async signup(parent, args, ctx) {
		const password = await bcrypt.hash(args.password, 10)

		const user = await ctx.db.mutation.createUser({
			data: {
				...args,
				password,
				role: "CARETAKER",
				imageUrl: "https://www.stickpng.com/assets/images/585e4beacb11b227491c3399.png",
			}
		})

		return {
			token: jwt.sign({ userId: user.id }, APP_SECRET),
			user,
		}
	},

	async login(parent, { email, password }, ctx) {
		const user = await ctx.db.query.user({
			where: {
				email
			}
		})

		if (!user) {
			throw new Error(`No such user found for email: ${email}`)
		}

		const valid = await bcrypt.compare(password, user.password)

		if (!valid) {
			throw new Error('Invalid password')
		}

		return {
			token: jwt.sign({ userId: user.id }, APP_SECRET),
			user,
		}
	},
}
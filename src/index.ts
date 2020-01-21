import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection, getConnectionOptions } from 'typeorm';
import { CategoryResolver } from './resolvers/CategoryResolver';
import { CommentResolver } from './resolvers/CommentResolver';
import { FavouriteResolver } from './resolvers/FavouriteResolver';
import { FollowResolver } from './resolvers/FollowResolver';
import { HelloWorldResolver } from './resolvers/HelloWorldResolver';
import { ImageDataResolver } from './resolvers/ImageDataResolver';
import { LikeResolver } from './resolvers/LikeResolver';
import { ReportResolver } from './resolvers/ReportResolver';
import { RoleResolver } from './resolvers/RoleResolver';
import { UserResolver } from './resolvers/UserResolver';
import { VoiceDataResolver } from './resolvers/VoiceDataResolver';
import { WorkResolver } from './resolvers/WorkResolver';

(async () => {
	const app = express();

	const options = await getConnectionOptions(
		process.env.NODE_ENV || 'development',
	);

	await createConnection({ ...options, name: 'default' });

	const apolloServer = new ApolloServer({
		context: ({ req, res }) => ({ req, res }),
		schema: await buildSchema({
			resolvers: [
				HelloWorldResolver,
				CategoryResolver,
				CommentResolver,
				FavouriteResolver,
				FollowResolver,
				ImageDataResolver,
				LikeResolver,
				ReportResolver,
				RoleResolver,
				UserResolver,
				VoiceDataResolver,
				WorkResolver,
			],
			validate: true,
		}),
	});

	apolloServer.applyMiddleware({ app, cors: false });

	const port = process.env.PORT || 4000;

	app.listen(port, () => {
		console.log(`server started at http://localhost:${port}/graphql`);
	});
})();

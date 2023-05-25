import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/schema';
import graphqlResolver from './graphql/resolvers';

app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphqlSchema,
		rootValue: graphqlResolver,
		graphiql: true,
	})
);

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log('Running!');
	});
});

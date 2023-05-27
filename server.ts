import express, { Express, Request, Response, NextFunction } from 'express';
import db from './models';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/schema';
import graphqlResolver from './graphql/resolvers';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// interface LoggerRequest extends Request {
// 	hello: string;
// }
// const logger = (req: Request, res: Response, next: NextFunction) => {
// 	(req as LoggerRequest).hello = 'hello world';
// 	console.log('Middleware');
// 	next();
// };
// app.use(logger);

app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphqlSchema,
		rootValue: graphqlResolver,
		graphiql: true,
	})
);

db.sequelize
	// .sync({ force: true })
	.sync()
	.then(() => {
		app.listen(port, () => {
			console.log('Running!');
		});
	});

import db from '../models';

export default {
	getBootcamps: async (args: any, req: Request) => {
		try {
			const bootcamps = await db.Bootcamp.findAll();
			return {
				...bootcamps,
			};
		} catch (err) {
			console.error(err);
		}
	},
};

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
	getBootcamp: async (args: any, req: Request) => {
		try {
			const bootcampId: String = args.id;
			const bootcamp = await db.Bootcamp.findOne({
				where: { id: bootcampId },
			});
			return {
				...bootcamp,
			};
		} catch (err) {
			console.log(err);
		}
	},
};

import db from '../models';

export default {
	getBootcamps: async (args: any, req: Request) => {
		try {
			const bootcamps = await db.Bootcamp.findAll();
			console.log(bootcamps);
			return bootcamps;
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
			return bootcamp;
		} catch (err) {
			console.log(err);
		}
	},
	createBootcamp: async (args: any, req: Request) => {
		try {
			const bootcamp = new db.Bootcamp({
				text: args.bootcampInput.text,
			});
			const newBootcamp = await bootcamp.save();
			return newBootcamp;
		} catch (err) {
			console.log(err);
		}
	},
};

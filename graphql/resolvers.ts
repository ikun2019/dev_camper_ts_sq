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
	updateBootcamp: async (args: any, req: Request) => {
		try {
			const bootcampId = args.id;
			const bootcamp = await db.Bootcamp.findOne({
				where: { id: bootcampId },
			});
			bootcamp.text = args.bootcampInput.text;
			const updateBootcamp = await bootcamp.save();
			return updateBootcamp;
		} catch (err) {
			console.log(err);
		}
	},
	deleteBootcamp: async (args: any, req: Request) => {
		try {
			const bootcampId = args.id;
			const bootcamp = await db.Bootcamp.findOne({
				where: { id: bootcampId },
			});
			await bootcamp.destroy();
			return true;
		} catch (err) {
			console.log(err);
		}
	},
	createUser: async (args: any, req: Request) => {
		try {
			const user = new db.User({
				name: args.userInput.name,
				email: args.userInput.email,
				password: args.userInput.password,
			});
			const newUser = await user.save();
			const token = user.getSignedJwtToken();
			return {
				token,
				...newUser.dataValues,
				user: newUser,
			};
		} catch (err) {
			console.log(err);
		}
	},
	loginUser: async (args: any, req: Request) => {
		try {
			const user = await db.User.findOne({
				where: { email: args.email },
			});
			if (!user) {
				throw new Error('ユーザーが存在しません');
			}
			const isMatch = await user.comparePassword(args.password);
			if (!isMatch) {
				throw new Error('パスワードが一致しません');
			}
			const token = user.getSignedJwtToken();
			return {
				token,
				user,
			};
		} catch (err) {
			console.log(err);
		}
	},
};

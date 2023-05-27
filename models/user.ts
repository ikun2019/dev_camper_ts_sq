'use strict';
import { Sequelize, Model, DataTypes, UUIDV4 } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();

interface UserAttributes {
	id: string;
	name: string;
	email: string;
	password: string;
}

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	class User extends Model<UserAttributes> implements UserAttributes {
		id!: string;
		name!: string;
		email!: string;
		password!: string;

		// モデルメソッド
		getSignedJwtToken() {
			const secret = process.env.JWT_SECRET;
			if (!secret) {
				throw new Error('JWT secret is not defined.');
			}
			return jwt.sign({ id: this.id }, secret, {
				expiresIn: process.env.JWT_EXPIRE,
			});
		}
		async comparePassword(enteredPassword: string) {
			return await bcrypt.compare(enteredPassword, this.password);
		}
		static associate(models: any) {
			User.hasMany(models.Bootcamp);
		}
	}
	User.init(
		{
			id: {
				type: dataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: dataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: dataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);

	User.beforeSave(async (user: User) => {
		const hashedPassword = await bcrypt.hash(user.password, 10);
		user.password = hashedPassword;
	});

	return User;
};

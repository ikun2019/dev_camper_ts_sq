'use strict';

import { Sequelize, Model, DataTypes } from 'sequelize';

interface BootcampAttributes {
	id: number;
	text: string;
}

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	class Bootcamp extends Model<BootcampAttributes> implements BootcampAttributes {
		id!: number;
		text!: string;
		static associate(models: any) {
			// define association here
		}
	}
	Bootcamp.init(
		{
			id: {
				type: dataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			text: {
				type: dataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Bootcamp',
		}
	);
	return Bootcamp;
};

'use strict';

import { Sequelize, Model, DataTypes } from 'sequelize';

interface BootcampAttributes {
	name: string;
}

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	class Bootcamp extends Model<BootcampAttributes> implements BootcampAttributes {
		name!: string;
		static associate(models: any) {
			// define association here
		}
	}
	Bootcamp.init(
		{
			name: dataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Bootcamp',
		}
	);
	return Bootcamp;
};

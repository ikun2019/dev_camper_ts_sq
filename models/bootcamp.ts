'use strict';
const { Model } = require('sequelize');

interface BootcampAttributes {
	name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Bootcamp extends Model<BootcampAttributes> implements BootcampAttributes {
		name!: string;
		static associate(models: any) {
			// define association here
		}
	}
	Bootcamp.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Bootcamp',
		}
	);
	return Bootcamp;
};

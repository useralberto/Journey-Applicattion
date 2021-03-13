import Sequelize from "sequelize";

export const sequelize = new Sequelize(
	'bydprqfpjzbjwbk1466e',
	'upth3znhlu89h4ikehql',
	'oNsKfxNiUZ9AwpfLf499',
	{
		host: 'bydprqfpjzbjwbk1466e-postgresql.services.clever-cloud.com',
		dialect: 'postgresql',
		pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
 		logging: false
	}
);

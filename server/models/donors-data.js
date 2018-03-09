var bcrypt = require('bcryptjs');
var cryptojs = require('crypto-js');
var models = require('../models');


module.exports = function(sequelize, DataTypes) {
	var Donors = sequelize.define('Donors', {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone : {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		// blood_group: {
		// 	type: DataTypes.TEXT,
		// 	allowNull: false,
		// },
		
	}, {
		classMethods: {
					associate: function(models) {
					 // associations can be defined here
					},
		},
		instanceMethods: {
		}
	});
	return Donors;
};

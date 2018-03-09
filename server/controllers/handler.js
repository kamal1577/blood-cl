// var models = require('./../models');

// module.exports = {
// 	createDonor: (first_namen, last_name, email, age, phone, address, blood_group, donorsData) => {
// 			models.Donors.create({
// 				first_namen: first_namen,
// 				last_name: last_name,
// 				email: email,
// 				age: age,
// 				phone: phone,
// 				address: address,
// 				blood_group: blood_group,
// 		}).then((res) => {
// 				donorsData(res);
// 		});
// 	},
// 	getAllPoints: (donors) => {
// 		models.Donors.findAll({}).then((res) => {
// 			donors(res);
// 		});
// 	},
// };
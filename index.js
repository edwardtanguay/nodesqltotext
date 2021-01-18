fs = require('fs');
const SqliteManager = require('./sqliteManager');

const sqliteManager = new SqliteManager('data/main.sqlite');

sqliteManager.getRecordWithSql(`SELECT * FROM contacts WHERE id=1`)
	.then((record) => {
		if (record !== null) {
			console.log(record);
		}
	})
	.catch((error) => console.log(error));

let content = '';
sqliteManager.getRecordsWithSql(`SELECT * FROM contacts LIMIT 5`)
	.then((records) => {
		for (const record of records) {
			console.log(record.firstName);
			content += record.firstName + '\n';
		}
		fs.writeFileSync('output/contacts.txt', content);
	})
	.catch((error) => console.log(error));

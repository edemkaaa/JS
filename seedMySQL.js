var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE priora;'
var seedQuery = 'INSERT INTO priora (title, nick, avatar, about) VALUES ("Хэтчбек", "hatchback", "/images/hatchback.jpeg", "Приора,которая подойдет всем - и груз загрузить,и поставить музыку,и покататься."), ("Седан", "sedan", "/images/sedan.png", "Приора,которая самая молодежная. Её тонируют,и выглядит она лучше всех."), ("Универсал", "universal", "/images/universal.png", "Приора для дедушек,либо рабочих - в ней можно возить много груза");'

var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'priora'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})

var fs = require("fs");
fs.mkdir('file io', function (err) {
	if (err) {
		return console.error(err);
	}
	console.log("file io directory is created succesfully");
});

fs.writeFile('file1.txt', "this is my first file 1", function (err) {
	if (err) {
		return console.error(err);
	}
	console.log("file now has content");
});
fs.readFile('file1.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log(data.toString());
});

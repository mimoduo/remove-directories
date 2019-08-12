const fs = require("fs");

function removeDirectory(path) {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach(function(file) {
			var currentPath = path + "/" + file;

			if (fs.lstatSync(currentPath).isDirectory()) {
				removeDirectory(currentPath);
			} else {
				fs.unlinkSync(currentPath);
		 	}
	  });

	  fs.rmdirSync(path);
	}
};

module.exports = removeDirectory;
const fs = require("fs");
const path = require("path");
const logDir = path.join(__dirname, "log");

if (!fs.existsSync(logDir)) {
    console.log("log directory does not exist");
} else {
    fs.readdirSync(logDir).forEach(file => {
        console.log(`delete files... ${file}`);
        fs.unlinkSync(path.join(logDir, file));
    });

    fs.rmdirSync(logDir);
    console.log("log directory deleted.");
}

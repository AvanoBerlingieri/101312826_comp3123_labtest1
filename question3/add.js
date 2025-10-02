const fs = require("fs");
const path= require("path");
const logDir = path.join(__dirname, "log");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log("log directory created.");
}

process.chdir(logDir);

for (let i = 1; i < 11; i++){
    const file = `log${i}.txt`
    fs.writeFileSync(file, `this is sample data for log${i}`);
    console.log(`${file} created`);
}



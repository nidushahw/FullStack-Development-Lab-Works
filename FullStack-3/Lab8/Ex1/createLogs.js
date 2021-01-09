const fs = require("fs");
const path = require("path");

let creatLogs = async () => {

    let logFolder = path.join(process.cwd(), 'Logs');
    if (!fs.existsSync(logFolder)) {
        fs.mkdirSync(logFolder);
    }

    for (let i = 0; i < 10; i++) {
        let fileName = path.join(logFolder, `mynewfile${i}.txt`)
        fs.writeFile(fileName, 'Hello content!', function (err) {
            if (err) throw err;
            console.log(`Created!${fileName}`);
        });
    }
}

//creatLogs();
//module.exports.creatLogs = creatLogs;

let creatLogsAsync = async() => {
    
    let logFolder = path.join(process.cwd(), 'Logs');
     fs.exists(logFolder, (exists) => {
        if (!exists) {
            console.log("Directory does not exist, creating first");
           await fs.mkdir(logFolder, (err) => {
                if (err) throw err;
                for (let i = 0; i < 10; i++) {
                    let fileName = path.join(logFolder, `mynewfile${i}.txt`)
                    fs.writeFile(fileName, 'Hello content!', function (err) {
                        if (err) throw err;
                        console.log(`Created! mynewfile${i}.txt`);
                    });
                }
            });
        } /* else {
            console.log("Directory exist. No need to create it");
            for (let i = 0; i < 10; i++) {
                let fileName = path.join(logFolder, `mynewfile${i}.txt`)
                fs.writeFile(fileName, 'Hello content!', function (err) {
                    if (err) throw err;
                    console.log(`Created! mynewfile${i}.txt`);
                });
            }
        } */
    });
};

creatLogsAsync();
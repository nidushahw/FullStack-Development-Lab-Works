const fs = require('fs/promises');
const path = require('path');

let logFolder = path.join(process.cwd(), 'Logs');

let removeAllFiles = async () => {
    try {
        let files = await fs.readdir(logFolder);
        console.log(`Found ${files.length} files`);
        for (let file of files) {
            await fs.unlink(path.join(logFolder, file));
            console.log(`delete file ${file}`);
        }
        await fs.rmdir(logFolder);
        console.log("Removed all files and directory");
    } catch (error) {
        console.log("Error while removing files", error);
    }
}

removeAllFiles();

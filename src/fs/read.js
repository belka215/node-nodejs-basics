import fs from "node:fs";

const read = async () => {
    if (fs.existsSync("files/fileToRead.txt")) {
        fs.readFile("files/fileToRead.txt", 'utf8', (err, data) => {
            if (err) {
                throw err;
            } else {
                console.log(data)
            }
        })
    } else {
        throw new Error('FS operation failed')
    }
};

await read();
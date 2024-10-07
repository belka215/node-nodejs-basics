import fs from "node:fs";

const write = async () => {
    const file = fs.createWriteStream('files/fileToWrite.txt');
    process.stdin.pipe(file);
    process.stdin.resume();
};

await write();
import fs from "node:fs";

const read = async () => {
    const stream = fs.createReadStream("files/fileToRead.txt");
    stream.on('data', (text) => {
        process.stdout.write(text)
    })
};

await read();
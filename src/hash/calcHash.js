import fs from "node:fs";
import crypto from "node:crypto";

const calculateHash = async () => {
    const stream = fs.createReadStream("files/fileToCalculateHashFor.txt");
    stream.on('data', (content) => {
        console.log(crypto.createHash('sha256').update(content).digest('hex'))
    })

};

await calculateHash();
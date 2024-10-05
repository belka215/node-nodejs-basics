import fs from "node:fs";

const remove = async () => {
    if (fs.existsSync("files/fileToRemove.txt")) {
        fs.unlinkSync("files/fileToRemove.txt")
    } else {
        throw new Error('FS operation failed')
    }
};

await remove();
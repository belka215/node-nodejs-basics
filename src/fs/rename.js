import fs from "node:fs";

const rename = async () => {
    if (fs.existsSync("files/wrongFileName.txt") || fs.existsSync("files/properFilename.md") === false) {
        fs.rename("files/wrongFileName.txt", "files/properFilename.md", (err) => {
            if (err) throw err;
        });
    } else {
        throw new Error('FS operation failed');
    }
    if (fs.existsSync("files/properFilename.md")) {
        throw new Error('FS operation failed');
    }
};

await rename();
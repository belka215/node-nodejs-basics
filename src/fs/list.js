import fs from "node:fs";

const list = async () => {
    if (fs.existsSync("files")) {
        fs.readdir("files", (err, files) => {
            if (err)
                throw err;
            else {
                files.forEach(file => {
                    console.log(file);
                })
            }
        })
    } else {
        throw new Error('FS operation failed')
    }
};

await list();
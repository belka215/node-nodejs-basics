import { createRequire } from "module";
const require = createRequire(import.meta.url);

import crypto from 'crypto'
const fs = require('fs')

const copy = async () => {
    if (fs.existsSync("./files_copy") || fs.existsSync("./files") === false) {
        throw new Error('FS operation failed')
    } else {
        fs.mkdirSync("files_copy")
        fs.cp("files", "files_copy", { recursive: true }, (err) => {
            if (err) throw err;
        });
    }
};

await copy();

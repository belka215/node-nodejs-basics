import { createRequire } from "module";
const require = createRequire(import.meta.url);

import crypto from 'crypto'
const fs = require('fs')

const create = async () => {
    const content = "I am fresh and young";

    if (fs.existsSync("files/fresh.txt")) {
        throw new Error('FS operation failed')
    } else {
        fs.writeFile("files/fresh.txt", content, (err) => {
            if (err) throw err;
        })
    }

};

await create();
"use strict";

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const version = require(path.resolve(root, 'package.json')).version;

const Files = [
    {
        file: 'src/iziModalWrap.ts',
        search: /public static VERSION = '[^']+'/i,
        replace: `public static VERSION = '${version}'`
    }
];

for(let f of Files){
    const raw = fs.readFileSync(f.file, 'utf-8');
    const replaced = raw.replace(f.search, f.replace);
    fs.writeFileSync(f.file, replaced, 'utf8');
}

console.log('Complete');
process.exit(0);

'use strict';

import 'mocha';
import fs from 'fs';
import path from 'path';

before(done => {
    const cssPath = path.resolve(__dirname, '..', 'styles', 'iziModalWrap.css');
    const css = fs.readFileSync(cssPath, 'utf8');
    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    document.body.appendChild(styleElement);
    setTimeout(() => done(), 50);
});

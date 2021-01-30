# iziModalWraps

[![GitHub issues](https://img.shields.io/github/issues/voltsonic/javascript-izimodal-wrap)](https://github.com/voltsonic/javascript-izimodal-wrap/issues)
![Package version](https://img.shields.io/badge/version-1.0.0-informational)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub license](https://img.shields.io/github/license/voltsonic/javascript-izimodal-wrap)](https://github.com/voltsonic/javascript-izimodal-wrap/blob/master/LICENSE)

A simple wrapper for iziModal.

---

### Prerequisites

- jQuery >= 2.x

### Install

- `npm i --save-dev izimodal-wrap` or `npm i --save izimodal-wrap`

### Quick Use

- Configure Globals
```typescript
import iziModalWrap from './src/iziModalWrap'; 
iziModalWrap.globals.init({
    themes: {
        customKey: {
            color: '#000',
            icon: 'custom-icon-class',
            title: 'Modal Title',
            subtitle: 'Modal Sub-title',
        },
        add: {
            title: 'Adding',
        },
        edit: {
            title: 'Editing',
        }
    },
});
```

- Basic
```typescript
import iziModalWrap from './src/iziModalWrap'; 
const m = new iziModalWrap('new-modal');
```

### Reference.

[click here](./docs/README.md) for more information about the classes (work in progress).

### CDN

Currently, not setup.

### Development

[click here](./developer/DEVELOPMENT.md) for more information about contributing.

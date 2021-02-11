# iziModalWraps

[![GitHub issues](https://img.shields.io/github/issues/voltsonic/javascript-izimodal-wrap)](https://github.com/voltsonic/javascript-izimodal-wrap/issues)
![Package version](https://img.shields.io/badge/version-1.0.2-0-informational)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub license](https://img.shields.io/github/license/voltsonic/javascript-izimodal-wrap)](https://github.com/voltsonic/javascript-izimodal-wrap/blob/master/LICENSE)

A simple wrapper for iziModal.

> :warning: This project is undergoing refinement still so use with caution. Once it's fully ready for production I will be bumping to v1.1.0
>
> Any feedback just open up an issue on the [Issues](https://github.com/voltsonic/javascript-izimodal-wrap/issues) tab.
>
> Most options/events/theming should be pretty concrete. Most changes now are going to be documentation, tests, and linting updates to ensure good releases.
>
> Any oddness with version tags in the early stages of the project should be fixed after `v1.0.1-alpha.0`

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

### Special thanks

To Chris Wells for his [typescript template project](https://github.com/chriswells0/node-typescript-template/) to get things started on `v1.x.x` changes.

[iziModalWrap - v1.0.0](../README.md) / iziModalWrap

# Module: iziModalWrap

## Table of contents

### Classes

- [default](../classes/izimodalwrap.default.md)

### Interfaces

- [IModalSelectors](../interfaces/izimodalwrap.imodalselectors.md)

## Type aliases

### TAfterRenderCallback

Ƭ **TAfterRenderCallback**: () => *void*

Defined in: [iziModalWrap.ts:14](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L14)

___

### TModalEvents

Ƭ **TModalEvents**: [*TOnFullScreenCallback*](izimodalwrap.md#tonfullscreencallback) | [*TOnResizeCallback*](izimodalwrap.md#tonresizecallback) | [*TOnOpeningCallback*](izimodalwrap.md#tonopeningcallback) | [*TOnOpenedCallback*](izimodalwrap.md#tonopenedcallback) | [*TOnClosingCallback*](izimodalwrap.md#tonclosingcallback) | [*TOnClosedCallback*](izimodalwrap.md#tonclosedcallback) | [*TAfterRenderCallback*](izimodalwrap.md#tafterrendercallback)

Defined in: [iziModalWrap.ts:16](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L16)

___

### TModalWrapConfigMerge

Ƭ **TModalWrapConfigMerge**: TModalId | { `events?`: { [event in TModalEventStrings]?: TModalEvents} ; `fullscreen?`: { `forced?`: *boolean* ; `ifMobile?`: *boolean*  } ; `iziModalSettings?`: IziModalSettings ; `layerUp?`: *number* ; `modalId`: TModalId ; `openRightAway?`: *boolean* ; `themes?`: { [themeKey in TThemeTypesAll]?: IModalTheme}  }

Defined in: [iziModalWrap.ts:89](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L89)

___

### TOnClosedCallback

Ƭ **TOnClosedCallback**: () => *void*

Defined in: [iziModalWrap.ts:13](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L13)

___

### TOnClosingCallback

Ƭ **TOnClosingCallback**: () => *void*

Defined in: [iziModalWrap.ts:12](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L12)

___

### TOnFullScreenCallback

Ƭ **TOnFullScreenCallback**: () => *void*

Defined in: [iziModalWrap.ts:8](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L8)

___

### TOnOpenedCallback

Ƭ **TOnOpenedCallback**: () => *void*

Defined in: [iziModalWrap.ts:11](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L11)

___

### TOnOpeningCallback

Ƭ **TOnOpeningCallback**: () => *void*

Defined in: [iziModalWrap.ts:10](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L10)

___

### TOnResizeCallback

Ƭ **TOnResizeCallback**: () => *void*

Defined in: [iziModalWrap.ts:9](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L9)

[iziModalWrap - v1.0.0](../README.md) / [iziModalWrapGlobal](../modules/izimodalwrapglobal.md) / iziModalWrapGlobalInner

# Class: iziModalWrapGlobalInner

[iziModalWrapGlobal](../modules/izimodalwrapglobal.md).iziModalWrapGlobalInner

iziModalWrapGlobal class.

**`internal`** 

**`summary`** 
This is the main way to add/change/update global settings.

**`example`** TS // Basic example.
```ts
import iziModalWrap from 'izimodal-wrap';
iziModalWrap.globals.addTheme();
```

## Hierarchy

* **iziModalWrapGlobalInner**

## Methods

### addTheme

▸ **addTheme**(`key`: *string*, `color`: *string*, `icon?`: *string* | () => *undefined* | *string*, `title?`: *string* | () => *undefined* | *string*, `subtitle?`: *string* | () => *undefined* | *string*): [*iziModalWrapGlobalInner*](izimodalwrapglobal.izimodalwrapglobalinner.md)

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |
`color` | *string* |
`icon?` | *string* | () => *undefined* | *string* |
`title?` | *string* | () => *undefined* | *string* |
`subtitle?` | *string* | () => *undefined* | *string* |

**Returns:** [*iziModalWrapGlobalInner*](izimodalwrapglobal.izimodalwrapglobalinner.md)

Defined in: [iziModalWrapGlobal.ts:151](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrapGlobal.ts#L151)

___

### getBodyStyle

▸ **getBodyStyle**(`reset?`: *boolean*): CSSStyleDeclaration

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`reset` | *boolean* | false |

**Returns:** CSSStyleDeclaration

Defined in: [iziModalWrapGlobal.ts:121](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrapGlobal.ts#L121)

___

### getSettings

▸ **getSettings**(): IIMWGlobalSettingsStatic

**Returns:** IIMWGlobalSettingsStatic

Defined in: [iziModalWrapGlobal.ts:221](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrapGlobal.ts#L221)

___

### getTheme

▸ **getTheme**(`key`: *string*): *undefined* | IIMWGlobalThemeStatic

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *undefined* | IIMWGlobalThemeStatic

Defined in: [iziModalWrapGlobal.ts:144](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrapGlobal.ts#L144)

___

### init

▸ **init**(`merge?`: [*IIMWGlobalSettings*](../interfaces/izimodalwrapglobal.iimwglobalsettings.md), `forceReInit?`: *boolean*): [*iziModalWrapGlobalInner*](izimodalwrapglobal.izimodalwrapglobalinner.md)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`merge` | [*IIMWGlobalSettings*](../interfaces/izimodalwrapglobal.iimwglobalsettings.md) | ... |  |
`forceReInit` | *boolean* | false | used in testing.    |

**Returns:** [*iziModalWrapGlobalInner*](izimodalwrapglobal.izimodalwrapglobalinner.md)

Defined in: [iziModalWrapGlobal.ts:177](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrapGlobal.ts#L177)

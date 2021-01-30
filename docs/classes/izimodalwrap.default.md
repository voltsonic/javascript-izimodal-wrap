[iziModalWrap - v1.0.0](../README.md) / [iziModalWrap](../modules/izimodalwrap.md) / default

# Class: default

[iziModalWrap](../modules/izimodalwrap.md).default

iziModalWrap constructor.

**`summary`** 
This is the main entrypoint class for wrapping around modals.

**`example`** TS // Basic example.
```ts
import iziModalWrap from 'izimodal-wrap';
const modal = new iziModalWrap('modal-id');
```

## Hierarchy

* **default**

## Constructors

### constructor

\+ **new default**(`config`: [*TModalWrapConfigMerge*](../modules/izimodalwrap.md#tmodalwrapconfigmerge)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`config` | [*TModalWrapConfigMerge*](../modules/izimodalwrap.md#tmodalwrapconfigmerge) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:163](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L163)

## Properties

### methods

• **methods**: [*ModMethod*](modules_modmethod.modmethod.md)

Defined in: [iziModalWrap.ts:151](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L151)

___

### modal

• **modal**: [*IModalSelectors*](../interfaces/izimodalwrap.imodalselectors.md)

Defined in: [iziModalWrap.ts:141](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L141)

___

### theme

• **theme**: [*ModTheme*](modules_modtheme.modtheme.md)

Defined in: [iziModalWrap.ts:152](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L152)

___

### VERSION

▪ `Static` **VERSION**: *string*= '1.0.1'

Defined in: [iziModalWrap.ts:126](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L126)

___

### globals

▪ `Static` **globals**: [*iziModalWrapGlobalInner*](izimodalwrapglobal.izimodalwrapglobalinner.md)

Defined in: [iziModalWrap.ts:163](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L163)

## Methods

### applyMethodRaw

▸ **applyMethodRaw**(`method`: *string*, `options?`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`method` | *string* |
`options?` | *any* |

**Returns:** *any*

Defined in: [iziModalWrap.ts:347](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L347)

___

### applyMethodsRaw

▸ **applyMethodsRaw**(`apply`: { [method: string]: *any*;  }): *void*

#### Parameters:

Name | Type |
------ | ------ |
`apply` | { [method: string]: *any*;  } |

**Returns:** *void*

Defined in: [iziModalWrap.ts:350](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L350)

___

### on

▸ **on**(`listen`: *fullscreen*, `callback`: [*TOnFullScreenCallback*](../modules/izimodalwrap.md#tonfullscreencallback)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`listen` | *fullscreen* |
`callback` | [*TOnFullScreenCallback*](../modules/izimodalwrap.md#tonfullscreencallback) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:317](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L317)

▸ **on**(`listen`: *resize*, `callback`: [*TOnResizeCallback*](../modules/izimodalwrap.md#tonresizecallback)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`listen` | *resize* |
`callback` | [*TOnResizeCallback*](../modules/izimodalwrap.md#tonresizecallback) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:318](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L318)

▸ **on**(`listen`: *opening*, `callback`: [*TOnOpeningCallback*](../modules/izimodalwrap.md#tonopeningcallback)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`listen` | *opening* |
`callback` | [*TOnOpeningCallback*](../modules/izimodalwrap.md#tonopeningcallback) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:319](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L319)

▸ **on**(`listen`: *opened*, `callback`: [*TOnOpenedCallback*](../modules/izimodalwrap.md#tonopenedcallback)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`listen` | *opened* |
`callback` | [*TOnOpenedCallback*](../modules/izimodalwrap.md#tonopenedcallback) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:320](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L320)

▸ **on**(`listen`: *closing*, `callback`: [*TOnClosingCallback*](../modules/izimodalwrap.md#tonclosingcallback)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`listen` | *closing* |
`callback` | [*TOnClosingCallback*](../modules/izimodalwrap.md#tonclosingcallback) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:321](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L321)

▸ **on**(`listen`: *closed*, `callback`: [*TOnClosedCallback*](../modules/izimodalwrap.md#tonclosedcallback)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`listen` | *closed* |
`callback` | [*TOnClosedCallback*](../modules/izimodalwrap.md#tonclosedcallback) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:322](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L322)

▸ **on**(`listen`: *after_render*, `callback`: [*TAfterRenderCallback*](../modules/izimodalwrap.md#tafterrendercallback)): [*default*](izimodalwrap.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`listen` | *after_render* |
`callback` | [*TAfterRenderCallback*](../modules/izimodalwrap.md#tafterrendercallback) |

**Returns:** [*default*](izimodalwrap.default.md)

Defined in: [iziModalWrap.ts:323](https://github.com/voltsonic/javascript-izimodal-wrap/blob/04f6ec1/src/iziModalWrap.ts#L323)

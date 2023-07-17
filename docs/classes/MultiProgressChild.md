# Class: MultiProgressChild

Multi-progress child bar

## Hierarchy

- [`Progress`](Progress.md)

  ↳ **`MultiProgressChild`**

## Table of contents

### Properties

- [bar](MultiProgressChild.md#bar)
- [id](MultiProgressChild.md#id)
- [options](MultiProgressChild.md#options)
- [out](MultiProgressChild.md#out)

### Methods

- [eta](MultiProgressChild.md#eta)
- [fail](MultiProgressChild.md#fail)
- [finish](MultiProgressChild.md#finish)
- [message](MultiProgressChild.md#message)
- [set](MultiProgressChild.md#set)
- [setTotal](MultiProgressChild.md#settotal)
- [start](MultiProgressChild.md#start)
- [stop](MultiProgressChild.md#stop)
- [tick](MultiProgressChild.md#tick)
- [update](MultiProgressChild.md#update)

## Properties

### bar

• **bar**: `SingleBar`

#### Inherited from

[Progress](Progress.md).[bar](Progress.md#bar)

___

### id

• **id**: `string`

___

### options

• **options**: [`MultiProgressChildConfig`](../interfaces/MultiProgressChildConfig.md)

#### Overrides

[Progress](Progress.md).[options](Progress.md#options)

___

### out

• **out**: `Out`

#### Inherited from

[Progress](Progress.md).[out](Progress.md#out)

## Methods

### eta

▸ **eta**(): `string` \| `number`

Get the ETA

#### Returns

`string` \| `number`

#### Inherited from

[Progress](Progress.md).[eta](Progress.md#eta)

___

### fail

▸ **fail**(`...messages`): [`MultiProgressChild`](MultiProgressChild.md)

Fail and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[fail](Progress.md#fail)

___

### finish

▸ **finish**(`...messages`): [`MultiProgressChild`](MultiProgressChild.md)

Succeed and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[finish](Progress.md#finish)

___

### message

▸ **message**(`message`): [`MultiProgressChild`](MultiProgressChild.md)

Set the progress bar message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[message](Progress.md#message)

___

### set

▸ **set**(`value`, `payload?`): `void`

Set the progress bar current value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

`void`

#### Inherited from

[Progress](Progress.md).[set](Progress.md#set)

___

### setTotal

▸ **setTotal**(`total`): [`MultiProgressChild`](MultiProgressChild.md)

Set the progress bar total

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[setTotal](Progress.md#settotal)

___

### start

▸ **start**(`options?`): [`MultiProgressChild`](MultiProgressChild.md)

Start the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[start](Progress.md#start)

___

### stop

▸ **stop**(`...messages`): [`MultiProgressChild`](MultiProgressChild.md)

Stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[stop](Progress.md#stop)

___

### tick

▸ **tick**(`payload`): [`MultiProgressChild`](MultiProgressChild.md)

Tick the progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

▸ **tick**(`value?`, `payload?`): [`MultiProgressChild`](MultiProgressChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

▸ **tick**(`message`, `payload?`): [`MultiProgressChild`](MultiProgressChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

___

### update

▸ **update**(`payload?`): [`MultiProgressChild`](MultiProgressChild.md)

Update the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[update](Progress.md#update)

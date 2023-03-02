# Class: Spinner

Spinner. Uses Spinnies to show spinners in the terminal.

**`See`**

https://www.npmjs.com/package/@trufflesuite/spinnies

## Table of contents

### Constructors

- [constructor](Spinner.md#constructor)

### Properties

- [auto\_increment](Spinner.md#auto_increment)
- [out](Spinner.md#out)
- [spinnies](Spinner.md#spinnies)

### Methods

- [add](Spinner.md#add)
- [autoIncrement](Spinner.md#autoincrement)
- [error](Spinner.md#error)
- [fail](Spinner.md#fail)
- [finish](Spinner.md#finish)
- [get](Spinner.md#get)
- [isActive](Spinner.md#isactive)
- [remove](Spinner.md#remove)
- [start](Spinner.md#start)
- [status](Spinner.md#status)
- [stop](Spinner.md#stop)
- [stopAll](Spinner.md#stopall)
- [text](Spinner.md#text)
- [update](Spinner.md#update)

## Constructors

### constructor

• **new Spinner**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

• **new Spinner**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

## Properties

### auto\_increment

• **auto\_increment**: `number` = `0`

___

### out

• **out**: `Out`

___

### spinnies

• **spinnies**: `Spinnies`

## Methods

### add

▸ **add**(`message?`): [`SpinnerChild`](SpinnerChild.md)

Add a spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **add**(`id`, `message?`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `message?` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **add**(`options`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **add**(`id`, `options`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### autoIncrement

▸ **autoIncrement**(`auto_increment`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `auto_increment` | `number` |

#### Returns

[`Spinner`](Spinner.md)

___

### error

▸ **error**(`message?`): [`Spinner`](Spinner.md)

Error and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **error**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

▸ **error**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### fail

▸ **fail**(`message?`): [`Spinner`](Spinner.md)

Fail and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **fail**(`id`, `message?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **fail**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

▸ **fail**(`id`, `options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### finish

▸ **finish**(`message?`): [`Spinner`](Spinner.md)

Succeed and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **finish**(`id`, `message?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **finish**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

▸ **finish**(`id`, `options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### get

▸ **get**(`id`): `any`

Get a spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |

#### Returns

`any`

___

### isActive

▸ **isActive**(`id?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `SpinnerId` |

#### Returns

`boolean`

___

### remove

▸ **remove**(`id`): [`Spinner`](Spinner.md)

Remove a spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |

#### Returns

[`Spinner`](Spinner.md)

___

### start

▸ **start**(`message?`): [`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

Start the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

▸ **start**(`id`, `message?`): [`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

▸ **start**(`options`): [`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

▸ **start**(`id`, `options`): [`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md) \| [`SpinnerChild`](SpinnerChild.md)

___

### status

▸ **status**(`status`): [`Spinner`](Spinner.md)

Update the status of the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `SpinnerStatus` |

#### Returns

[`Spinner`](Spinner.md)

▸ **status**(`id`, `status`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `status` | `SpinnerStatus` |

#### Returns

[`Spinner`](Spinner.md)

___

### stop

▸ **stop**(`message?`): [`Spinner`](Spinner.md)

Stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **stop**(`id`, `message?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `message?` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **stop**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

▸ **stop**(`id`, `options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### stopAll

▸ **stopAll**(): [`Spinner`](Spinner.md)

Stop all spinners

#### Returns

[`Spinner`](Spinner.md)

___

### text

▸ **text**(`message`): [`Spinner`](Spinner.md)

Set the spinner text

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **text**(`id`, `message`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

___

### update

▸ **update**(`options`): [`Spinner`](Spinner.md)

Update the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

▸ **update**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

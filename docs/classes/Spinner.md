# Class: Spinner

Spinner. Uses Spinnies to show spinners in the terminal.

**`See`**

https://www.npmjs.com/package/@trufflesuite/spinnies

## Table of contents

### Constructors

- [constructor](Spinner.md#constructor)

### Properties

- [out](Spinner.md#out)
- [preload\_message](Spinner.md#preload_message)
- [spinner](Spinner.md#spinner)
- [spinnies](Spinner.md#spinnies)

### Methods

- [add](Spinner.md#add)
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
| `options?` | `string` \| `SpinnerOptions` |

## Properties

### out

• **out**: `Out`

___

### preload\_message

• **preload\_message**: `string` = `''`

___

### spinner

• **spinner**: `any`

___

### spinnies

• **spinnies**: `Spinnies`

## Methods

### add

▸ **add**(`id`, `options?`): [`Spinner`](Spinner.md)

Add a spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

___

### error

▸ **error**(`message`): [`Spinner`](Spinner.md)

Error and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **error**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

▸ **error**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

___

### fail

▸ **fail**(`message`): [`Spinner`](Spinner.md)

Fail and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **fail**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

▸ **fail**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

___

### finish

▸ **finish**(`message`): [`Spinner`](Spinner.md)

Succeed and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **finish**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

▸ **finish**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `SpinnerOptions` |

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

▸ **start**(`message`): [`Spinner`](Spinner.md)

Start the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **start**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

▸ **start**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

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

▸ **stop**(`message`): [`Spinner`](Spinner.md)

Stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

▸ **stop**(`options`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

▸ **stop**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `SpinnerOptions` |

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
| `options` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

▸ **update**(`id`, `options?`): [`Spinner`](Spinner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `SpinnerId` |
| `options?` | `SpinnerOptions` |

#### Returns

[`Spinner`](Spinner.md)

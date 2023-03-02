# Class: SpinnerChild

## Table of contents

### Constructors

- [constructor](SpinnerChild.md#constructor)

### Properties

- [id](SpinnerChild.md#id)
- [spinner](SpinnerChild.md#spinner)

### Methods

- [error](SpinnerChild.md#error)
- [fail](SpinnerChild.md#fail)
- [finish](SpinnerChild.md#finish)
- [isActive](SpinnerChild.md#isactive)
- [remove](SpinnerChild.md#remove)
- [start](SpinnerChild.md#start)
- [status](SpinnerChild.md#status)
- [stop](SpinnerChild.md#stop)
- [text](SpinnerChild.md#text)
- [update](SpinnerChild.md#update)

## Constructors

### constructor

• **new SpinnerChild**(`spinner`, `id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spinner` | [`Spinner`](Spinner.md) |
| `id` | `SpinnerId` |

## Properties

### id

• `Readonly` **id**: `SpinnerId`

___

### spinner

• `Readonly` **spinner**: [`Spinner`](Spinner.md)

## Methods

### error

▸ **error**(`message?`): [`SpinnerChild`](SpinnerChild.md)

Error and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **error**(`options`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### fail

▸ **fail**(`message?`): [`SpinnerChild`](SpinnerChild.md)

Fail and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **fail**(`options`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### finish

▸ **finish**(`message?`): [`SpinnerChild`](SpinnerChild.md)

Succeed and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **finish**(`options`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

___

### remove

▸ **remove**(): `void`

Remove a spinner

#### Returns

`void`

___

### start

▸ **start**(`message?`): [`SpinnerChild`](SpinnerChild.md)

Start the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **start**(`options`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### status

▸ **status**(`status`): [`SpinnerChild`](SpinnerChild.md)

Update the status of the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `SpinnerStatus` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### stop

▸ **stop**(`message?`): [`SpinnerChild`](SpinnerChild.md)

Stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

▸ **stop**(`options`): [`SpinnerChild`](SpinnerChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### text

▸ **text**(`message`): [`SpinnerChild`](SpinnerChild.md)

Set the spinner text

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

___

### update

▸ **update**(`options`): [`SpinnerChild`](SpinnerChild.md)

Update the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`SpinnerChild`](SpinnerChild.md)

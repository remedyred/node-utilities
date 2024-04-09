# @snickbit/node-utilities

## Table of contents

### Interfaces

- [AutoCompleteMultiSelectQuestion](interfaces/AutoCompleteMultiSelectQuestion.md)
- [AutoCompleteQuestion](interfaces/AutoCompleteQuestion.md)
- [ChoiceDefinition](interfaces/ChoiceDefinition.md)
- [ConfirmQuestion](interfaces/ConfirmQuestion.md)
- [DateQuestion](interfaces/DateQuestion.md)
- [FindUpOptions](interfaces/FindUpOptions.md)
- [ImportDefinition](interfaces/ImportDefinition.md)
- [InvisibleQuestion](interfaces/InvisibleQuestion.md)
- [ListQuestion](interfaces/ListQuestion.md)
- [MultiSelectQuestion](interfaces/MultiSelectQuestion.md)
- [NumberQuestion](interfaces/NumberQuestion.md)
- [ParsedImport](interfaces/ParsedImport.md)
- [PasswordQuestion](interfaces/PasswordQuestion.md)
- [PromptState](interfaces/PromptState.md)
- [PromptTypeMethod](interfaces/PromptTypeMethod.md)
- [PromptsLocales](interfaces/PromptsLocales.md)
- [SelectQuestion](interfaces/SelectQuestion.md)
- [TextQuestion](interfaces/TextQuestion.md)
- [ToggleQuestion](interfaces/ToggleQuestion.md)
- [UnparsedImport](interfaces/UnparsedImport.md)

### Type Aliases

- [AnswerTypes](README.md#answertypes)
- [Answers](README.md#answers)
- [ChoiceOption](README.md#choiceoption)
- [ChoiceRecords](README.md#choicerecords)
- [ImportMethod](README.md#importmethod)
- [ImportRecords](README.md#importrecords)
- [ParsedImportRecords](README.md#parsedimportrecords)
- [PromptType](README.md#prompttype)
- [PromptsMethod](README.md#promptsmethod)
- [Question](README.md#question)
- [QuestionRecords](README.md#questionrecords)
- [RawImports](README.md#rawimports)
- [RecordOfImportRecords](README.md#recordofimportrecords)

### Variables

- [app\_data\_dir](README.md#app_data_dir)
- [bashrc\_path](README.md#bashrc_path)
- [home\_dir](README.md#home_dir)
- [is\_wsl](README.md#is_wsl)
- [platform](README.md#platform)
- [temp\_dir](README.md#temp_dir)
- [user\_config\_dir](README.md#user_config_dir)
- [user\_data\_dir](README.md#user_data_dir)
- [verbose](README.md#verbose)

### Functions

- [ask](README.md#ask)
- [beforeExit](README.md#beforeexit)
- [bufferStream](README.md#bufferstream)
- [confirm](README.md#confirm)
- [fileExists](README.md#fileexists)
- [findUp](README.md#findup)
- [getFile](README.md#getfile)
- [getFileJSON](README.md#getfilejson)
- [getPackageJSON](README.md#getpackagejson)
- [interpolateEnv](README.md#interpolateenv)
- [isBundledElectronApp](README.md#isbundledelectronapp)
- [isDirectory](README.md#isdirectory)
- [isElectronApp](README.md#iselectronapp)
- [isImport](README.md#isimport)
- [isImportDefinition](README.md#isimportdefinition)
- [makeBuffer](README.md#makebuffer)
- [mkdir](README.md#mkdir)
- [parseImports](README.md#parseimports)
- [prompt](README.md#prompt)
- [saveFile](README.md#savefile)
- [saveFileJSON](README.md#savefilejson)
- [unlink](README.md#unlink)

## Before Exit

### beforeExit

▸ **beforeExit**(`callback`): `void`

Registers a callback function to be executed before the program exits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | The callback function to be executed. |

#### Returns

`void`

## Environment

### app\_data\_dir

• `Const` **app\_data\_dir**: `string`

___

### bashrc\_path

• `Const` **bashrc\_path**: `string`

___

### home\_dir

• `Const` **home\_dir**: `string`

___

### is\_wsl

• `Const` **is\_wsl**: `boolean` = `isWsl`

___

### platform

• `Const` **platform**: `string`

___

### temp\_dir

• `Const` **temp\_dir**: `string`

___

### user\_config\_dir

• `Const` **user\_config\_dir**: `string`

___

### user\_data\_dir

• `Const` **user\_data\_dir**: `string` = `app_data_dir`

___

### verbose

• `Const` **verbose**: `number`

___

### interpolateEnv

▸ **interpolateEnv**(`str`, `defaultValues?`): `string`

Interpolate environment variables in the provided string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string in which to interpolate environment variables. |
| `defaultValues` | `Record`\<`string`, `string`\> | An object representing the default values for variables. |

#### Returns

`string`

The interpolated string.

___

### isBundledElectronApp

▸ **isBundledElectronApp**(): `boolean`

Determine if the current process is a bundled Electron app.

#### Returns

`boolean`

True if the current process is a bundled Electron app, false otherwise.

___

### isElectronApp

▸ **isElectronApp**(): `boolean`

Determine if the current process is an Electron app.

#### Returns

`boolean`

True if the current process is an Electron app, false otherwise.

## Files

### fileExists

▸ **fileExists**(`filepath`): `boolean`

Check if a file or directory exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `PathLike` | The filepath to check |

#### Returns

`boolean`

- Return true if the file or directory exists, false otherwise

___

### findUp

▸ **findUp**(`name`, `options?`): `any`

Search upward from a directory for a file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `PathLike` | The file to find |
| `options?` | `string` \| `boolean` \| `Partial`\<[`FindUpOptions`](interfaces/FindUpOptions.md)\> | options to be used while finding file |

#### Returns

`any`

- Return the path of the file, if found. Null if not found

___

### getFile

▸ **getFile**(`filepath`, `fallback?`): `any` \| `string`

Read a file and return its data as string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `PathLike` | The path of the file |
| `fallback?` | `any` | The fallback data if the file doesn't exist |

#### Returns

`any` \| `string`

- The data read from the file, or the fallback data if the file doesn't exist

___

### getFileJSON

▸ **getFileJSON**(`filepath`, `fallback?`): `any` \| `object`

Reads a JSON file and return its data as Javascript object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `PathLike` | The path of the file |
| `fallback?` | `any` | The fallback data if the file doesn't exist |

#### Returns

`any` \| `object`

- The JSON parsed data, or the fallback data if the file doesn't exist

___

### getPackageJSON

▸ **getPackageJSON**(`cwd`): `any`

Gets the contents of the package.json file located in the specified directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cwd` | `string` | The current working directory. |

#### Returns

`any`

- The contents of the package.json file as a JSON object.

___

### isDirectory

▸ **isDirectory**(`filepath`): `boolean`

Check if a path is directory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `PathLike` | The path to check |

#### Returns

`boolean`

- Return true if the path is a directory, false otherwise

___

### mkdir

▸ **mkdir**(`dir_path`, `recursive?`): `void`

Create a new directory

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dir_path` | `PathLike` | `undefined` | The path of the directory to create |
| `recursive?` | `boolean` | `true` | Whether to create directories recursively |

#### Returns

`void`

___

### saveFile

▸ **saveFile**(`filepath`, `content`, `options?`): `void`

Write data to a file

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` | The path of the file |
| `content` | `string` \| `ArrayBufferView` | `undefined` | The content to write |
| `options?` | `WriteFileOptions` | `'utf8'` | options to be used while writing file |

#### Returns

`void`

- Return nothing

___

### saveFileJSON

▸ **saveFileJSON**(`filepath`, `content`, `options?`): `void`

Write a Javascript object to a JSON file

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` | The path of the file |
| `content` | `any` | `undefined` | The object to write |
| `options?` | `WriteFileOptions` | `'utf8'` | options to be used while writing file |

#### Returns

`void`

- Return nothing

___

### unlink

▸ **unlink**(`filepath`): `void`

Delete a file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `PathLike` | The path of the file |

#### Returns

`void`

## Imports

### ImportMethod

Ƭ **ImportMethod**\<`Args`, `Results`\>: (...`args`: `Args`[]) => `Promise`\<`Results`\> \| `Results`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `any` |
| `Results` | `any` |

#### Type declaration

▸ (`...args`): `Promise`\<`Results`\> \| `Results`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args`[] |

##### Returns

`Promise`\<`Results`\> \| `Results`

___

### ImportRecords

Ƭ **ImportRecords**\<`I`\>: `Record`\<`string`, `I` \| [`ImportDefinition`](interfaces/ImportDefinition.md)\<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

### ParsedImportRecords

Ƭ **ParsedImportRecords**\<`I`\>: `Record`\<`string`, [`ParsedImport`](interfaces/ParsedImport.md)\<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

### RawImports

Ƭ **RawImports**\<`I`\>: [`ImportRecords`](README.md#importrecords)\<`I`\> \| [`RecordOfImportRecords`](README.md#recordofimportrecords)\<`I`\> \| `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

### RecordOfImportRecords

Ƭ **RecordOfImportRecords**\<`I`\>: `Record`\<`string`, [`ImportRecords`](README.md#importrecords)\<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

### isImport

▸ **isImport**(`data`): `boolean`

Checks whether a given data is of "import" type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to be checked. |

#### Returns

`boolean`

- Returns true if provided data is an import type.

___

### isImportDefinition

▸ **isImportDefinition**(`data`): `boolean`

Checks whether a given data is of "import definition" type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to be checked. |

#### Returns

`boolean`

- Returns true if provided data is an import definition type.

___

### parseImports

▸ **parseImports**\<`I`\>(`imports`, `parent?`): [`ParsedImportRecords`](README.md#parsedimportrecords)\<`I`\>

Parse provided imports and prepares a record of it.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod)\<`any`, `any`\> = [`ImportMethod`](README.md#importmethod)\<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imports` | `any` | The raw imports to be parsed. |
| `parent?` | `string` | The parent name. |

#### Returns

[`ParsedImportRecords`](README.md#parsedimportrecords)\<`I`\>

## Modules

### bufferStream

▸ **bufferStream**(`readable`): `Promise`\<`Buffer`\>

Buffers the data from a Readable stream and returns a Promise that resolves to a Buffer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `readable` | `Readable` | The Readable stream to be buffered. |

#### Returns

`Promise`\<`Buffer`\>

A Promise that resolves to a Buffer containing all the data from the Readable stream.

___

### makeBuffer

▸ **makeBuffer**(`content`): `Buffer`

Creates a new Buffer object from the given content.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | The content to be used for creating the Buffer. |

#### Returns

`Buffer`

- The created Buffer object.

## Prompts

### AnswerTypes

Ƭ **AnswerTypes**: `Date` \| `boolean` \| `number` \| `string`

___

### Answers

Ƭ **Answers**: `Record`\<`string`, `string`\>

___

### ChoiceOption

Ƭ **ChoiceOption**: [`ChoiceDefinition`](interfaces/ChoiceDefinition.md) \| `string`

___

### ChoiceRecords

Ƭ **ChoiceRecords**: `Record`\<`string`, [`ChoiceOption`](README.md#choiceoption)\>

___

### PromptType

Ƭ **PromptType**: ``"autocomplete"`` \| ``"autocompleteMultiselect"`` \| ``"confirm"`` \| ``"date"`` \| ``"invisible"`` \| ``"list"`` \| ``"multiselect"`` \| ``"number"`` \| ``"password"`` \| ``"select"`` \| ``"text"`` \| ``"toggle"``

___

### PromptsMethod

Ƭ **PromptsMethod**: (`prev`: `string`, `answers`: [`Answers`](README.md#answers), `previousQuestion`: [`Question`](README.md#question)) => `Promise`\<`string`\> \| `string`

#### Type declaration

▸ (`prev`, `answers`, `previousQuestion`): `Promise`\<`string`\> \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `prev` | `string` |
| `answers` | [`Answers`](README.md#answers) |
| `previousQuestion` | [`Question`](README.md#question) |

##### Returns

`Promise`\<`string`\> \| `string`

___

### Question

Ƭ **Question**: [`AutoCompleteMultiSelectQuestion`](interfaces/AutoCompleteMultiSelectQuestion.md) \| [`AutoCompleteQuestion`](interfaces/AutoCompleteQuestion.md) \| [`ConfirmQuestion`](interfaces/ConfirmQuestion.md) \| [`DateQuestion`](interfaces/DateQuestion.md) \| [`InvisibleQuestion`](interfaces/InvisibleQuestion.md) \| [`ListQuestion`](interfaces/ListQuestion.md) \| [`MultiSelectQuestion`](interfaces/MultiSelectQuestion.md) \| [`NumberQuestion`](interfaces/NumberQuestion.md) \| [`PasswordQuestion`](interfaces/PasswordQuestion.md) \| [`SelectQuestion`](interfaces/SelectQuestion.md) \| [`TextQuestion`](interfaces/TextQuestion.md) \| [`ToggleQuestion`](interfaces/ToggleQuestion.md)

___

### QuestionRecords

Ƭ **QuestionRecords**: `Record`\<`string`, [`Question`](README.md#question)\>

___

### ask

▸ **ask**(`question`, `defaultAnswer?`): `Promise`\<`any`\>

Prompt the user for input using Prompts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `question` | `string` | The question to be asked to the user. |
| `defaultAnswer?` | `string` \| `boolean` | The default answer for the question. |

#### Returns

`Promise`\<`any`\>

- A promise that will be resolved with the answer.

**`See`**

https://github.com/terkelg/prompts

▸ **ask**(`question`, `options?`): `Promise`\<`any`\>

Prompt the user for input using Prompts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `question` | `string` | The question to be asked to the user. |
| `options?` | `Partial`\<[`Question`](README.md#question)\> | The options for the question. |

#### Returns

`Promise`\<`any`\>

- A promise that will be resolved with the answer.

**`See`**

https://github.com/terkelg/prompts

___

### confirm

▸ **confirm**(`question`, `defaultAnswer?`): `Promise`\<`boolean`\>

Prompt the user for confirmation using Prompts with a default boolean answer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `question` | `string` | The question to be asked to the user. |
| `defaultAnswer?` | `boolean` | The default answer for the question. |

#### Returns

`Promise`\<`boolean`\>

- A promise that will be resolved with the answer.

**`See`**

https://github.com/terkelg/prompts

▸ **confirm**(`question`, `options?`): `Promise`\<`boolean`\>

Prompt the user for confirmation using Prompts with question options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `question` | `string` | The question to be asked to the user. |
| `options?` | `Partial`\<[`Question`](README.md#question)\> | The options for the question. |

#### Returns

`Promise`\<`boolean`\>

- A promise that will be resolved with the answer.

**`See`**

https://github.com/terkelg/prompts

___

### prompt

▸ **prompt**(`questions`): `Promise`\<[`Answers`](README.md#answers)\>

Prompts the user with questions and returns the answers as a promise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `questions` | [`QuestionRecords`](README.md#questionrecords) \| [`Question`](README.md#question)[] | The questions to prompt the user with. |

#### Returns

`Promise`\<[`Answers`](README.md#answers)\>

- A promise that resolves with the answers provided by the user.

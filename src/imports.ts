import {arrayUnique, isCallable} from '@snickbit/utilities'

/** @category Imports */
export interface ImportDefinition<I extends ImportMethod = ImportMethod, Args = any, Results = any> extends ImportMethod<Args, Results> {
	default: Array<ImportDefinition> | I | ImportDefinition<I> | ImportMethod<Args, Results>
	name?: string
	description?: string
	aliases?: string[]

	[key: string]: any
}

/** @category Imports */
export type ImportMethod<Args = any, Results = any> = (...args: Args[]) => Promise<Results> | Results

/** @category Imports */
export type ImportRecords<I extends ImportMethod = ImportMethod> = Record<string, I | ImportDefinition<I>>

/** @category Imports */
export type RecordOfImportRecords<I extends ImportMethod = ImportMethod> = Record<string, ImportRecords<I>>

/** @category Imports */
export type RawImports<I extends ImportMethod = ImportMethod> = ImportRecords<I> | RecordOfImportRecords<I> | any

/** @category Imports */
export interface ParsedImport<I extends ImportMethod = ImportMethod> {
	name: string
	aliases: string[]
	description?: string
	handler: I
}

/** @category Imports */
export type ParsedImportRecords<I extends ImportMethod = ImportMethod> = Record<string, ParsedImport<I>>

/** @category Imports */
export interface UnparsedImport<I extends ImportMethod = ImportMethod> {
	name?: string
	aliases?: string[]
	alias?: string
	description?: string
	describe?: string
	handler?: I
	method?: I
	default?: I
	run?: I
}

/**
 * Checks whether a given data is of "import" type.
 * @category Imports
 *
 * @param {any} data - The data to be checked.
 * @returns {boolean} - Returns true if provided data is an import type.
 */
export const isImport = (data: any): boolean => typeof data === 'function' || data?.constructor.name === 'AsyncFunction' || Array.isArray(data)

/**
 * Checks whether a given data is of "import definition" type.
 * @category Imports
 *
 * @param {any} data - The data to be checked.
 * @returns {boolean} - Returns true if provided data is an import definition type.
 */
export const isImportDefinition = (data: any): boolean => data && data['run'] || data['handler'] || data['method']

/**
 * Parse provided imports and prepares a record of it.
 * @category Imports
 *
 * @param {RawImports} imports - The raw imports to be parsed.
 * @param {string} [parent] - The parent name.
 * @returns {ParsedImportRecords<I>}
 */
export function parseImports<I extends ImportMethod = ImportMethod>(imports: RawImports, parent?: string): ParsedImportRecords<I> {
	const importRecords = {}
	for (const [import_item, data] of Object.entries(imports)) {
		let parent_name = parent ?? ''
		let import_name: string

		if (import_item === 'default') {
			import_name = parent_name
			parent_name = ''
		} else {
			import_name = import_item
		}

		if (isImport(data) || isImportDefinition(data)) {
			const unparsed = data as UnparsedImport

			const parsed = {} as ParsedImport
			let sub_import_name = isImportDefinition(data) && unparsed.name ? unparsed.name : import_name

			if (!sub_import_name || parent_name && sub_import_name === `${parent_name}_default`) {
				sub_import_name = parent_name
				parent_name = ''
			}

			parsed.name = parent_name ? `${parent_name}:${sub_import_name}` : sub_import_name
			parsed.aliases = arrayUnique([unparsed?.alias, ...unparsed.aliases || []].flat()).filter(Boolean) as string[]
			parsed.description = unparsed.description || unparsed.describe
			const handler = unparsed.handler || unparsed.method || unparsed.run || unparsed.default || unparsed
			parsed.handler = handler && isCallable(handler) ? handler as I : () => {
				console.warn(`No handler found for ${parsed.name}`)
			}
			importRecords[parsed.name] = parsed
		} else {
			const subtasks = parseImports(data, import_name)
			Object.assign(importRecords, subtasks)
		}
	}
	return importRecords
}

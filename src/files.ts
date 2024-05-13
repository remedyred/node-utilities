// noinspection JSUnusedGlobalSymbols

import {JSONParse, parseOptions} from '@snickbit/utilities'
import fs, {PathLike, PathOrFileDescriptor, WriteFileOptions} from 'fs'
import path from 'path'

export interface FindUpOptions {
	distance: number
	cwd: string

	/**
	 * Used for tracking current distance
	 * @internal
	 */
	d: number
}

/**
 * Check if a file or directory exists
 * @category Files
 * @param {PathLike} filepath - The filepath to check
 * @returns {boolean} - Return true if the file or directory exists, false otherwise
 */
export function fileExists(filepath: PathLike): boolean {
	return fs.existsSync(filepath)
}

/**
 * Search upward from a directory for a file
 * @category Files
 * @param {PathLike | string} name - The file to find
 * @param {Partial<FindUpOptions> | boolean | string} [options] - options to be used while finding file
 * @returns {any} - Return the path of the file, if found. Null if not found
 */
export function findUp(name: PathLike | string, options?: Partial<FindUpOptions> | boolean | string): any {
	options = parseOptions(options, {
		cwd: process.cwd(),
		distance: false
	}, 'cwd') as FindUpOptions
	options.d ||= 0

	const directory = path.resolve(options.cwd || '')
	const parsed = path.parse(directory)
	const resolved = path.join(directory, name as string)
	if (fileExists(resolved)) {
		return options.distance ? {
			path: resolved,
			distance: options.d
		} : resolved
	} else if (parsed.root === directory) {
		return null
	}
	options.d++
	options.cwd = path.dirname(directory)
	return findUp(name, options)
}

/**
 * Read a file and return its data as string
 * @category Files
 * @param {PathLike} filepath - The path of the file
 * @param {any} [fallback] - The fallback data if the file doesn't exist
 * @returns {string | any} - The data read from the file, or the fallback data if the file doesn't exist
 */
export function getFile(filepath: PathLike, fallback?: any): any | string {
	filepath = path.normalize(filepath as string)
	return fs.existsSync(filepath) ? fs.readFileSync(filepath, 'utf8') : fallback
}

/**
 * Reads a JSON file and return its data as Javascript object
 * @category Files
 * @param {PathLike} filepath - The path of the file
 * @param {any} [fallback] - The fallback data if the file doesn't exist
 * @returns {object | any} - The JSON parsed data, or the fallback data if the file doesn't exist
 */
export function getFileJSON(filepath: PathLike, fallback?: any): any | object {
	const content = getFile(filepath)
	return content ? JSONParse(content, fallback) : fallback
}

/**
 * Gets the contents of the package.json file located in the specified directory.
 * @category Files
 * @param {string} cwd - The current working directory.
 * @returns {any} - The contents of the package.json file as a JSON object.
 */
export function getPackageJSON(cwd: string): any {
	return getFileJSON(findUp('package.json', {cwd}), {})
}

/**
 * Check if a path is directory
 * @category Files
 * @param {PathLike} filepath - The path to check
 * @returns {boolean} - Return true if the path is a directory, false otherwise
 */
export function isDirectory(filepath: PathLike): boolean {
	return fileExists(filepath) && fs.lstatSync(filepath).isDirectory()
}

/**
 * Create a new directory
 * @category Files
 * @param {PathLike} dir_path - The path of the directory to create
 * @param {boolean} [recursive=true] - Whether to create directories recursively
 */
export function mkdir(dir_path: PathLike, recursive = true) {
	dir_path = path.normalize(dir_path as string)
	if (!fs.existsSync(dir_path)) {
		fs.mkdirSync(dir_path, {recursive})
	}
}

/**
 * Write data to a file
 * @category Files
 * @param {PathOrFileDescriptor} filepath - The path of the file
 * @param {ArrayBufferView | string} content - The content to write
 * @param {WriteFileOptions} [options='utf8'] - options to be used while writing file
 * @returns {void} - Return nothing
 */
export function saveFile(filepath: PathOrFileDescriptor, content: NodeJS.ArrayBufferView | string, options: WriteFileOptions = 'utf8'): void {
	if (!fs.existsSync(path.dirname(filepath as string))) {
		fs.mkdirSync(path.dirname(filepath as string), {recursive: true})
	}
	return fs.writeFileSync(filepath, content, options)
}

/**
 * Write a Javascript object to a JSON file
 * @category Files
 * @param {PathOrFileDescriptor} filepath - The path of the file
 * @param {any} content - The object to write
 * @param {WriteFileOptions} [options='utf8'] - options to be used while writing file
 * @returns {void} - Return nothing
 */
export function saveFileJSON(filepath: PathOrFileDescriptor, content: any, options: WriteFileOptions = 'utf8'): void {
	return saveFile(filepath, `${JSON.stringify(content, null, '\t')}\n`, options)
}

/**
 * Delete a file
 * @category Files
 * @param {PathLike} filepath - The path of the file
 */
export function unlink(filepath: PathLike) {
	filepath = path.normalize(filepath as string)
	if (fs.existsSync(filepath)) {
		fs.unlinkSync(filepath)
	}
}

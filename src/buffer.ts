import {isBase64} from '@snickbit/utilities'
import {Readable} from 'stream'
import {Buffer} from 'node:buffer'

/**
 * Creates a new Buffer object from the given content.
 *
 * @param {string} content - The content to be used for creating the Buffer.
 * @returns {Buffer} - The created Buffer object.
 */
export const makeBuffer = (content: string): Buffer => Buffer.from(content, isBase64(content) ? 'base64' : 'utf8')

/**
 * Buffers the data from a Readable stream and returns a Promise that resolves to a Buffer.
 *
 * @param {Readable} readable - The Readable stream to be buffered.
 * @return {Promise<Buffer>} A Promise that resolves to a Buffer containing all the data from the Readable stream.
 */
export function bufferStream(readable: Readable): Promise<Buffer> {
	return new Promise<Buffer>((resolve, reject) => {
		const chunks: Buffer[] = []
		readable.on('data', chunk => chunks.push(chunk))
		readable.once('end', () => resolve(Buffer.concat(chunks)))
		readable.once('error', reject)
	})
}

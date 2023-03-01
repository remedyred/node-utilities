import {Out} from '@snickbit/out'
import {isNumber, isString} from '@snickbit/utilities'
import Spinnies, {SpinnerStatus, SpinnerOptions} from '@trufflesuite/spinnies'
import throttle from 'lodash.throttle'

type SpinnerId = number | string

const spinnerUpdate = throttle((instance, id, options) => {
	instance.update(id, options)
}, 150)

/**
 * Spinner. Uses Spinnies to show spinners in the terminal.
 * @see https://www.npmjs.com/package/@trufflesuite/spinnies
 * @category Spinner
 */
export function spinner(options?: SpinnerOptions | string) {
	return new Spinner(options)
}

/**
 * Spinner. Uses Spinnies to show spinners in the terminal.
 * @see https://www.npmjs.com/package/@trufflesuite/spinnies
 * @category Spinner
 */
export class Spinner {
	spinner
	spinnies = new Spinnies()

	preload_message = ''

	out: Out

	constructor(options?: SpinnerOptions | string) {
		const parsed = this.#parseOptions(options)
		this.preload_message = parsed.text
		this.out = new Out('spinner')
	}

	/**
     * Set the spinner text
     */
	text(message: string): this

	text(id: SpinnerId, message: string): this

	text(messageOrId: SpinnerId, possibleMessage?: string): this {
		let message: string
		let id = '0'
		if (isNumber(messageOrId)) {
			id = String(messageOrId)
			message = possibleMessage
		} else {
			message = messageOrId as string
		}

		spinnerUpdate(this.spinnies, id, {text: this.#getMessage(message)})
		return this
	}

	/**
     * Update the spinner
     */
	update(options: SpinnerOptions): this
	update(id: SpinnerId, options?: SpinnerOptions): this
	update(optionsOrId: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		const {id, options} = this.#parseParams(optionsOrId, possibleOptions)
		spinnerUpdate(this.spinnies, id, options)
		return this
	}

	/**
     * Update the status of the spinner
     */
	status(status: SpinnerStatus): this
	status(id: SpinnerId, status: SpinnerStatus): this
	status(statusOrId: SpinnerId | SpinnerStatus, possibleStatus?: SpinnerStatus): this {
		const status = isNumber(statusOrId) ? possibleStatus : statusOrId as SpinnerStatus
		const id = String(possibleStatus ? statusOrId : 0)
		if (this.spinnies.pick(id)) {
			this.spinnies.update(id, {status})
		} else {
			this.out.info(`${this.preload_message}: ${status}`)
		}
		return this
	}

	/**
     * Start the spinner
     */
	start(message: string): this
	start(options: SpinnerOptions): this
	start(id: SpinnerId, options?: SpinnerOptions): this
	start(optionsOrIdOrMessage: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		const {id, options} = this.#parseParams(optionsOrIdOrMessage, possibleOptions)

		this.preload_message ||= options.text
		if (this.spinnies.pick(id)) {
			this.status(id, 'spinning')
		} else {
			this.spinnies.add(id, options)
		}
		return this
	}

	/**
     * Add a spinner
     */
	add(id: SpinnerId, options?: SpinnerOptions): this {
		options = this.#parseOptions(options)
		this.preload_message ||= options.text
		this.spinnies.add(String(id), options)
		return this
	}

	/**
     * Remove a spinner
     */
	remove(id: SpinnerId): this {
		this.spinnies.remove(String(id))
		return this
	}

	/**
     * Get a spinner
     */
	get(id: SpinnerId): any {
		return this.spinnies.pick(String(id))
	}

	/**
     * Stop all spinners
     */
	stopAll(): this {
		this.spinnies.stopAll()
		return this
	}

	isActive(id?: SpinnerId): boolean {
		if (id) {
			return this.spinnies.pick(String(id))?.status === 'spinning'
		}
		return this.spinnies.hasActiveSpinners()
	}

	/**
     * Fail and stop the spinner
     */
	fail(message: string): this
	fail(options: SpinnerOptions): this
	fail(id: SpinnerId, options?: SpinnerOptions): this
	fail(optionsOrIdOrMessage: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		const {id, options} = this.#parseParams(optionsOrIdOrMessage, possibleOptions)

		if (this.spinnies) {
			this.spinnies.fail(id, options.text)
		} else if (options.text) {
			this.out.error(options.text)
		}
		return this
	}

	/**
     * Error and stop the spinner
     */
	error(message: string): this
	error(options: SpinnerOptions): this
	error(id: SpinnerId, options?: SpinnerOptions): this
	error(optionsOrIdOrMessage: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		return this.fail(optionsOrIdOrMessage as any, possibleOptions)
	}

	/**
     * Stop the spinner
     */
	stop(message: string): this
	stop(options: SpinnerOptions): this
	stop(id: SpinnerId, options?: SpinnerOptions): this
	stop(optionsOrIdOrMessage: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		const {id, options} = this.#parseParams(optionsOrIdOrMessage, possibleOptions)

		if (this.spinnies.pick(id)) {
			this.status(id, 'spinning')
		} else if (options.text) {
			this.out.warn(options.text)
		}
		return this
	}

	/**
     * Succeed and stop the spinner
     */
	finish(message: string): this
	finish(options: SpinnerOptions): this
	finish(id: SpinnerId, options?: SpinnerOptions): this
	finish(optionsOrIdOrMessage: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		const {id, options} = this.#parseParams(optionsOrIdOrMessage, possibleOptions)

		if (this.spinnies) {
			this.spinnies.succeed(id, options.text)
		} else if (options.text) {
			this.out.success(options.text)
		}
		return this
	}

	/**
     * Helper to parse the params
     * @param optionsOrIdOrMessage
     * @param possibleOptionsOrMessage
     * @private
     */
	#parseParams(optionsOrIdOrMessage: SpinnerId | SpinnerOptions, possibleOptionsOrMessage?: SpinnerOptions | string) {
		let options: SpinnerOptions
		let id = '0'
		if (isNumber(optionsOrIdOrMessage)) {
			options = isString(possibleOptionsOrMessage) ? {text: possibleOptionsOrMessage} as SpinnerOptions : possibleOptionsOrMessage
			id = String(optionsOrIdOrMessage)
		} else if (isString(optionsOrIdOrMessage)) {
			options = {text: optionsOrIdOrMessage} as SpinnerOptions
		} else {
			options = optionsOrIdOrMessage
		}

		options = this.#parseOptions(options)

		return {id, options}
	}

	/**
     * Parse the options
     */
	#parseOptions(options?: SpinnerOptions | string, fallback_text?: string): SpinnerOptions {
		options ||= {} as SpinnerOptions

		if (isString(options)) {
			options = {text: options as string} as SpinnerOptions
		}

		if (options?.text) {
			options.text = this.#getMessage(options.text, fallback_text)
		}

		return options
	}

	/**
     * Parse the message, using the fallback if necessary
     */
	#getMessage(message: string, fallback?: string): string {
		return message || this.preload_message || fallback || ''
	}
}

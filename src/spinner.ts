import {Out} from '@snickbit/out'
import {isNumber, isString} from '@snickbit/utilities'
import Spinnies, {SpinnerOptions as BaseSpinnerOptions, SpinnerStatus} from '@trufflesuite/spinnies'
import throttle from 'lodash.throttle'

type SpinnerId = number | string

const spinnerUpdate = throttle((instance, id, options) => {
	instance.update(id, options)
}, 150)

export interface SpinnerConfig extends BaseSpinnerOptions {
    auto_increment: number
}

export type SpinnerOptions = Partial<SpinnerConfig>

/**
 * Spinner. Uses Spinnies to show spinners in the terminal.
 * @see https://www.npmjs.com/package/@trufflesuite/spinnies
 * @category Spinner
 */
export function spinner(message?: string)
export function spinner(options: SpinnerOptions)
export function spinner(options?: SpinnerOptions | string) {
	return new Spinner(options as any)
}

/**
 * Spinner. Uses Spinnies to show spinners in the terminal.
 * @see https://www.npmjs.com/package/@trufflesuite/spinnies
 * @category Spinner
 */
export class Spinner {
	spinnies: Spinnies

	auto_increment = 0

	out: Out

	constructor(options?: SpinnerOptions)
	constructor(message: string)
	constructor(options?: SpinnerOptions | string) {
		const parsed = this.#parseOptions(options)
		this.auto_increment = parsed.auto_increment
		this.out = new Out('spinner')
		this.spinnies = new Spinnies(parsed)
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

		if (this.auto_increment !== options.auto_increment && isNumber(options.auto_increment)) {
			this.auto_increment = options.auto_increment
		}

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
			this.out.info(`status: ${status}`)
		}
		return this
	}

	autoIncrement(auto_increment: number): this {
		this.auto_increment = Number(auto_increment)
		return this
	}

	/**
     * Start the spinner
     */
	start(message?: string): SpinnerChild | this
	start(options: SpinnerOptions): SpinnerChild | this
	start(id: SpinnerId, message: string): SpinnerChild | this
	start(id: SpinnerId, options: SpinnerOptions): SpinnerChild | this
	start(optionsOrIdOrMessage?: SpinnerId | SpinnerOptions, possibleOptionsOrMessage?: SpinnerOptions | string): SpinnerChild | this {
		const {id, options} = this.#parseParams(optionsOrIdOrMessage, possibleOptionsOrMessage)

		if (this.spinnies.pick(id)) {
			this.update(id, {...options, status: 'spinning'})
			return this
		}
		return this.add(id, options)
	}

	/**
     * Add a spinner
     */
	add(message: string): SpinnerChild
	add(options: SpinnerOptions): SpinnerChild
	add(id: SpinnerId, message: string): SpinnerChild
	add(id: SpinnerId, options: SpinnerOptions): SpinnerChild
	add(optionsOrIdOrMessage: SpinnerId | SpinnerOptions, possibleOptionsOrMessage?: SpinnerOptions | string): SpinnerChild {
		const {id, options} = this.#parseParams(optionsOrIdOrMessage, possibleOptionsOrMessage)
		const addId = id === '0' ? String(this.auto_increment++) : id
		this.spinnies.add(addId, options)
		return new SpinnerChild(this, addId)
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
	fail(message?: string): this
	fail(options: SpinnerOptions): this
	fail(id: SpinnerId, options?: SpinnerOptions): this
	fail(optionsOrIdOrMessage?: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
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
	error(message?: string): this
	error(options: SpinnerOptions): this
	error(id: SpinnerId, options?: SpinnerOptions): this
	error(optionsOrIdOrMessage?: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		return this.fail(optionsOrIdOrMessage as any, possibleOptions)
	}

	/**
     * Stop the spinner
     */
	stop(message?: string): this
	stop(options: SpinnerOptions): this
	stop(id: SpinnerId, options?: SpinnerOptions): this
	stop(optionsOrIdOrMessage?: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
		const {id, options} = this.#parseParams(optionsOrIdOrMessage, possibleOptions)

		if (this.spinnies.pick(id)) {
			this.status(id, 'stopped')
		} else if (options.text) {
			this.out.warn(options.text)
		}
		return this
	}

	/**
     * Succeed and stop the spinner
     */
	finish(message?: string): this
	finish(options: SpinnerOptions): this
	finish(id: SpinnerId, options?: SpinnerOptions): this
	finish(optionsOrIdOrMessage?: SpinnerId | SpinnerOptions, possibleOptions?: SpinnerOptions): this {
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
	#parseParams(optionsOrIdOrMessage?: SpinnerId | SpinnerOptions, possibleOptionsOrMessage?: SpinnerOptions | string) {
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
	#parseOptions(options?: SpinnerOptions | string, fallback_text?: string): SpinnerConfig {
		options ||= {} as SpinnerConfig

		if (isString(options)) {
			options = {text: options as string} as SpinnerConfig
		}

		if (options?.text) {
			options.text = this.#getMessage(options.text, fallback_text)
		}

		return options as SpinnerConfig
	}

	/**
     * Parse the message, using the fallback if necessary
     */
	#getMessage(message: string, fallback?: string): string {
		return message || fallback || ''
	}
}

export class SpinnerChild {
	readonly spinner: Spinner

	readonly id: SpinnerId

	constructor(spinner: Spinner, id: SpinnerId) {
		this.spinner = spinner
		this.id = id
	}

	/**
     * Set the spinner text
     */
	text(message: string): this {
		this.spinner.text(this.id, message)
		return this
	}

	/**
     * Update the spinner
     */
	update(options: SpinnerOptions): this {
		this.spinner.update(this.id, options)
		return this
	}

	/**
     * Update the status of the spinner
     */
	status(status: SpinnerStatus): this {
		this.spinner.status(this.id, status)
		return this
	}

	/**
     * Start the spinner
     */
	start(message?: string): this
	start(options: SpinnerOptions): this
	start(optionsOrMessage?: SpinnerOptions | string): this {
		this.spinner.start(this.id, optionsOrMessage as any)
		return this
	}

	/**
     * Remove a spinner
     */
	remove(): void {
		this.spinner.remove(this.id)
	}

	isActive(): boolean {
		return this.spinner.isActive(this.id)
	}

	/**
     * Fail and stop the spinner
     */
	fail(message?: string): this
	fail(options: SpinnerOptions): this
	fail(optionsOrMessage?: SpinnerOptions | string): this {
		this.spinner.fail(this.id, optionsOrMessage as any)
		return this
	}

	/**
     * Error and stop the spinner
     */
	error(message?: string): this
	error(options: SpinnerOptions): this
	error(optionsOrMessage?: SpinnerOptions | string): this {
		this.fail(optionsOrMessage as any)
		return this
	}

	/**
     * Stop the spinner
     */
	stop(message?: string): this
	stop(options: SpinnerOptions): this
	stop(optionsOrMessage?: SpinnerOptions | string): this {
		this.spinner.stop(this.id, optionsOrMessage as any)
		return this
	}

	/**
     * Succeed and stop the spinner
     */
	finish(message?: string): this
	finish(options: SpinnerOptions): this
	finish(optionsOrMessage?: SpinnerOptions | string): this {
		this.spinner.finish(this.id, optionsOrMessage as any)
		return this
	}
}

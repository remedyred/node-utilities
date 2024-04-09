let _target: EventTarget

/** @internal */
function useTarget() {
	_target ||= new EventTarget()
	return _target
}

/**
 * Registers a callback function to be executed before the program exits.
 * @param {Function} callback - The callback function to be executed.
 * @return {void}
 * @category Before Exit
 */
export function beforeExit(callback: () => void): void {
	const target = useTarget()

	process.stdin.resume()

	callback ||= (() => void 0)
	target.addEventListener('cleanup', callback)

	process.on('exit', () => target.dispatchEvent(new Event('cleanup')))

	process.on('SIGINT', () => process.exit(2))

	process.on('uncaughtException', () => process.exit(99))
}

import {interpolate} from '@snickbit/utilities'
import fs from 'fs'
import isWsl from 'is-wsl'
import os from 'os'

/** @category Environment */
export const platform: string = os.platform()

/** @category Environment */
export const is_wsl: boolean = isWsl

/** @category Environment */
export const home_dir: string = os.homedir()

/** @category Environment */
export const temp_dir: string = is_wsl ? `${home_dir}/.tmp` : os.tmpdir()
if (!fs.existsSync(temp_dir)) {
	fs.mkdirSync(temp_dir, {recursive: true})
}

/** @category Environment */
export const app_data_dir: string = process.env.APPDATA || (platform === 'darwin' ? `${process.env.HOME}/Library/Preferences` : `${process.env.HOME}/.local/share`)

/** @category Environment */
export const user_config_dir = `${os.homedir()}/.config`

/** @category Environment */
export const user_data_dir: string = app_data_dir

/** @category Environment */
export const verbose: number = Number.parseInt(process.env.VERBOSE || '0') || 0

/** @category Environment */
export const bashrc_path = `${home_dir}/.bashrc`

/**
 * Determine if the current process is an Electron app.
 * @return {boolean} True if the current process is an Electron app, false otherwise.
 * @category Environment
 */
export const isElectronApp = (): boolean => !!process.versions.electron

/**
 * Determine if the current process is a bundled Electron app.
 * @return {boolean} True if the current process is a bundled Electron app, false otherwise.
 * @category Environment
 */
export const isBundledElectronApp = (): boolean => isElectronApp() && !process?.defaultApp

/**
 * Interpolate environment variables in the provided string.
 * @param {string} str The string in which to interpolate environment variables.
 * @param {Record<string, string>} defaultValues An object representing the default values for variables.
 * @return {string} The interpolated string.
 * @category Environment
 */
export function interpolateEnv(str: string, defaultValues: Record<string, string> = {}): string {
	return interpolate(str, {...defaultValues, ...process.env})
}

import {defineConfig} from 'tsup'
import {indexerPlugin} from '@snickbit/indexer'

export default defineConfig({
	entry: ['src/index.ts'],
	clean: true,
	dts: true,
	format: ['esm', 'cjs'],
	esbuildPlugins: [indexerPlugin()]
})

const { build } = require('esbuild')

build({
	entryPoints: ['./client/main.ts'],
	outfile: './dist/client.js',
	target: "es2020",
	minify: false,
	bundle: true,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('Client Build Failed:', error)
			else console.log("Client build succeeded")
		},
	}
}).catch(() => process.exit(1))

build({
	entryPoints: ['./server/main.ts'],
	outfile: './dist/server.js',
	platform: "node",
	target: "es2020",
	minify: false,
	bundle: true,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('Server Build Failed:', error)
			else console.log('Server Build Succeeded')
		},
	}
}).catch(() => process.exit(1))
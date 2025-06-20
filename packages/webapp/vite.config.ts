// Generated by An Kun
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
		minify: 'esbuild',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom']
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	server: {
		port: 3000,
		host: true
	}
})
		assetsDir: 'static',
		sourcemap: false,
		minify: 'terser',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					apollo: ['@apollo/client'],
					ui: ['@headlessui/react', '@tabler/icons-react']
				}
			}
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	define: {
		'import.meta.env.PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version),
		'process.env': {
			// @heyform-inc/answer-utils
			VALIDATE_CLIENT_SIDE: true
		},
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
	},
	envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/base";`
			}
		}
	},
	server: {
		port: 3000,
		host: true,
		proxy: {
			'/graphql': PROXY_CONFIG,
			'/upload': PROXY_CONFIG,
			'/image': PROXY_CONFIG
		}
	},
})

import { defineConfig, loadEnv } from 'vite'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
// import { createVuePlugin } from 'vite-plugin-vue2'
import cesium from 'vite-plugin-cesium'
import { createHtmlPlugin } from 'vite-plugin-html'
import defaultSettings from './src/settings'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from '@vitejs/plugin-vue2'
import vitePluginVue2Jsx from '@vitejs/plugin-vue2-jsx'
import { viteExternalsPlugin } from 'vite-plugin-externals'

export default defineConfig(({ commond, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VUE_')

  const port = env.port || env.npm_config_port || 8008

  const proxyStr = `^${env.VUE_APP_BASE_API}`

  return {
    server: {
      host: '0.0.0.0',
      port,
      https: true,
      // open: true,
      proxy: {
        [env.VUE_APP_BASE_API]: {
          target: env.VUE_APP_APPLICATION_URL,
          changeOrigin: true,
          secure: false, // 如果是https接口，需要配置这个参数
          rewrite: path => path.replace(proxyStr, '')
        }
      },
      hmr: {
        overlay: {
          warnings: false,
          errors: false
        }
      }
    },
    css: {
      postcss: {
        plugins: [autoprefixer()]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
          includePaths: ['node_modules']
        }
      }
    },
    plugins: [
      vue(),
      vitePluginVue2Jsx(),
      cesium(),
      viteExternalsPlugin({
        cesium: 'Cesium'
      }),
      basicSsl(),
      createHtmlPlugin({
        minify: true,
        entry: 'src/main.js',
        // template: 'public/index.html',
        inject: {
          data: {
            title: defaultSettings.title
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.mjs', '.js', '.jsx', '.json', '.vue']
    },
    define: {
      'process.env': env
    },
    build: {
      assetsDir: 'static'
    }
  }
})

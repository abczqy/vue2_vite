import { AmapMercatorTilingScheme } from './TilingScheme.js'
//var Cesium = require('cesium/Cesium')
class AmapImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor (options = {}) {
    if (options.crs === 'WGS84') {
      options.tilingScheme = new AmapMercatorTilingScheme()
    }
    super(options)
  }
}

export { AmapImageryProvider }


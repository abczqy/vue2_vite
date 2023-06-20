//var Cesium = require('cesium/Cesium')
// var coordtransform = require('coordtransform')
var coordtransform = require('./coordtransform')
class AmapMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
  constructor (options) {
    super(options)
    const projection = new Cesium.WebMercatorProjection()
    this._projection.project = function (cartographic, result) {
      result = coordtransform.wgs84togcj02(
        Cesium.Math.toDegrees(cartographic.longitude),
        Cesium.Math.toDegrees(cartographic.latitude)
      )
      result = projection.project(
        new Cesium.Cartographic(
          Cesium.Math.toRadians(result[0]),
          Cesium.Math.toRadians(result[1])
        )
      )
      return new Cesium.Cartesian2(result.x, result.y)
    }
    this._projection.unproject = function (cartesian, result) {
      const cartographic = projection.unproject(cartesian)
      result = coordtransform.gcj02towgs84(
        Cesium.Math.toDegrees(cartographic.longitude),
        Cesium.Math.toDegrees(cartographic.latitude)
      )
      return new Cesium.Cartographic(
        Cesium.Math.toRadians(result[0]),
        Cesium.Math.toRadians(result[1])
      )
    }
  }
}

export { AmapMercatorTilingScheme }


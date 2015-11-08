var emitter = require('component-emitter')
var leafletMap = require('virtual-leaflet')

module.exports = function createDataMap (options) {
  options = options || {}
  var map = {}
  emitter(map)

  options.onclick = function (e) {
    map.emit('click', e)
  }

  map.render = function dataMap_render (state) {
    return this.html('div#map-container', [
      this.html('div#map', leafletMap(state.geojson, options))
    ])
  }
}

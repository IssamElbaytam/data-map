var BaseElement = require('base-element')
var inherits = require('inherits')
var L = require('leaflet')
require('mapbox.js')

module.exports = DataMap
inherits(DataMap, BaseElement)

function DataMap (options) {
  if (!(this instanceof DataMap)) return new DataMap(options)
  BaseElement.call(this, options.el)
  var self = this
  options.tiles = options.tiles || 'mapbox.streets'
  this.addEventListener('load', function (node) {
    var mapEl = node.childNodes[0]
    var tiles = options.tiles
    L.mapbox.accessToken = options.accessToken
    options.popupOptions = null
    self.map = L.mapbox.map(mapEl, tiles, options)
    self.geojson = L.mapbox.featureLayer().addTo(self.map)
    self.geojson.on('click', function (e) {
      self.send('click', e, e.layer.feature, e.target)
    })
  })
}

DataMap.prototype.setGeoJSON = function (geojson) {
  this.geojson.setGeoJSON(geojson)
}

DataMap.prototype.render = function (state) {
  if (this.geojson && state.geojson) this.setGeoJSON(state.geojson)
  var vtree = this.html('div#map-container', this, [
    this.html('div#map')
  ])
  return this.afterRender(vtree)
}

# data-map

Show a dataset on a map.

## Install

```
npm install --save data-map
```

## Usage

```
var h = require('virtual-dom/h')

var state = {
  properties: {},
  data: [
    {
      key: 'uuid',
      value: {
        pizza: true,
        awesome: 'this string is awesome',
        howManyPizzas: 27
      }
    }
  ]
} 

var map = require('data-editor/map')({
  zoom: 16,
  center: [47.621958, -122.33636],
  accessToken: 'your mapbox access token'
})

var mapView = map.render(state)
var container = h('div.map-container', [mapView])
```

## See also

- [data-editor](https://github.com/editdata/data-editor) – base editor that works with data-grid
- [data-ui](https://github.com/editdata/data-ui) – a collection of resources & modules for building interfaces for managing data
- [data-grid](https://github.com/editdata/data-grid) - simple & performant grid editor/viewer for data
- [view-list](https://github.com/shama/view-list) – this project is a thin wrapper around the view-list module
- [virtual-dom](https://github.com/Matt-Esch/virtual-dom) – data-grid & view-list are created using the virtual-dom module

## License

[MIT](LICENSE.md)
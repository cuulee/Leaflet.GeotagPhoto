'use strict'

import L from 'Leaflet'
import GeotagPhotoCrosshair from './src/Leaflet.GeotagPhoto.Crosshair'
import GeotagPhotoCamera from './src/Leaflet.GeotagPhoto.Camera'

L.GeotagPhoto = {
  Crosshair: GeotagPhotoCrosshair,
  crosshair: function (options) {
    return new GeotagPhotoCrosshair(options)
  },
  Camera: GeotagPhotoCamera,
  camera: function (geometry, options) {
    return new GeotagPhotoCamera(geometry, options)
  }
}

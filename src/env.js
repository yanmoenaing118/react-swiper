export const GMAP = "AIzaSyCpnTL53RhQhBH-2-EL21oHWll85fJZHPU";
export const MAPBOX_KEY =
  "pk.eyJ1IjoieWFubW9lbmFpbmcxMTgiLCJhIjoiY2wxaHo0cHlqMDlvYzNpcWx0ejlya2s0YiJ9.7NtOIgcLgjHhQC_3Qm8Rfw";


  export const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.414, 37.776]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }
    ]
  };
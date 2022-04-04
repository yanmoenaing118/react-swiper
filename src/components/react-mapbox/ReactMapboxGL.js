import React, { useMemo } from "react";
import Map, { Marker } from "react-map-gl";
import { MAPBOX_KEY } from "../../env";
import MarkerLogo from "../../assets/google-location.svg";
// 16.847495949490927, 96.15801109467033

// Enter latitude first, followed by longitude.
// Latitude should always be between -90 and 90.
// Longitude should always be between -180 and 180.

// 16.880516078832247, 96.23869194171375
//16.88544396134876, 96.15663779927398
// 16.89299979804638, 96.11784232688942

const points = [
  {
    latitude: 16.880516078832247,
    longitude: 96.23869194171375,
  },
  {
    latitude: 16.88544396134876,
    longitude: 96.15663779927398,
  },
  {
    latitude: 16.89299979804638,
    longitude: 96.11784232688942,
  },
];

function App() {
  return (
    <Map
      initialViewState={{
        longitude: 96.23,
        latitude: 16.86,
        zoom: 10,
      }}
      style={{ width: "100%", height: 600 }}
      mapStyle="mapbox://styles/yanmoenaing118/cl1ksjzel000314s6pmvsqff6"
      mapboxAccessToken={MAPBOX_KEY}
    >
      {points.map((location, idx) => (
        <Marker
          key={`marker-${idx}`}
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="bottom"
        >
          <img
            src={MarkerLogo}
            alt="Location Marker"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Marker>
      ))}
    </Map>
  );
}

export default App;

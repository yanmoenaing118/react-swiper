import React, { useEffect } from "react";
import { MAPBOX_KEY, geojson } from "../../env";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = MAPBOX_KEY;

export default function MapBoxMap() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mymap", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [96.16178992868085,-21.380686585977006 ], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    
    for (const feature of geojson.features) {
      console.log(feature);
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        )
        .addTo(map);
    }
  });

  return (
    <div
      id="mymap"
      style={{
        height: "100vh",
        position: "absolute",
        width: "100%",
        top: "0",
        left: "0",
      }}
    ></div>
  );
}

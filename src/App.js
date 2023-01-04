import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import ReactLeafletKml from 'react-leaflet-kml';

function App() {
  const [kml, setKml] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "/public/Cilacap-Rewulu-Boyolali.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
        console.log(kmlText)
      });
  }, []);
  const position = [
    [-7.701171, 109.025053, "TB 05", "SKUN MUR BAUT"],
    [-7.697426, 109.028242, "TB 06", "SKUN MUR BAUT"],
    [-7.693687, 109.031447, "TB 07", "HILANG SISA KABEL ANODA"],
    [-7.690144, 109.034882, "TB 08", "SKUN MUR BAUT"],
    [-7.681937, 109.047028, "TB 11", "SKUN MUR BAUT"],
    [-7.679263, 109.051135, "TB 12", "SKUN MUR BAUT"],
    [-7.67691, 109.055467, "TB 13", "SKUN MUR BAUT"],
    [-7.674609, 109.059804, "TB 14", "SKUN MUR BAUT"],
    [-7.672282, 109.064193, "TB 15", "SKUN MUR BAUT"],
    [-7.669998, 109.068449, "TB 16", "SKUN MUR BAUT"],
  ];

  // const kmlText = "/public/Cilacap-Rewulu-Boyolali.kmz.kml";
  // const parser = new DOMParser();
  // const kml = parser.parseFromString(kmlText, "text/xml");
  return (
    <MapContainer
      center={[-7.701171, 109.025053]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      {/* {position.map((pos, index) => (
        <Marker key={index} position={[pos[0], pos[1]]}>
          <Popup>
            <h4>
              Nama Test Box: <span>{pos[2]}</span>
            </h4>
            <h4>
              Keterangan: <span>{pos[3]}</span>
            </h4>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${pos[0]},${pos[1]}`}
              target="_blank"
            >
              Navigasi
            </a>
          </Popup>
        </Marker>
      ))} */}
      {kml && <ReactLeafletKml kml={kml} />}
    </MapContainer>
  );
}

export default App;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css"
import L from "leaflet";

// Set the icon for the marker
const DefaultIcon = L.icon({
  iconUrl: "/assets/map/marker-icon.png", // You need to provide your own marker icon
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapScreen = () => {
  const position = [0, 0]; // Default position, will be updated with the actual address

  // Replace the coordinates with the actual ones for the address
  const addressCoordinates = [ 47.604849, -122.330314]; // Replace with actual latitude and longitude

  return (
    <MapContainer
      className="z-10"
      center={addressCoordinates}
      zoom={18}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={addressCoordinates}>
        <Popup>42 Quantum Way, Tech City, QX 12345</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapScreen;

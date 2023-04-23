import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import type { FC } from "react";
import "leaflet/dist/leaflet.css";

export type GeoMapProps = {
  lng: number;
  lat: number;
  title: string;
  url: string;
};

export const GeoMap: FC<GeoMapProps> = ({ lng, lat, title, url }) => (
  <MapContainer
    dragging={false}
    zoomControl={false}
    attributionControl={false}
    className="h-[200px]"
    center={{ lat, lng }}
    zoom={13}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={{ lat, lng }}>
      <Tooltip permanent interactive>
        <a href={url}>{title}</a>
      </Tooltip>
    </Marker>
  </MapContainer>
);

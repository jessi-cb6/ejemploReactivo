import { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

function MapaRuta({ destinoLat, destinoLng }) {
  const [ubicacion, setUbicacion] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
  });

  // Obtener ubicación actual
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );
  }, []);

  if (!isLoaded || !ubicacion) return <div>Cargando mapa...</div>;

  const destino = {
    lat: destinoLat,
    lng: destinoLng
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={ubicacion}
      zoom={14}
    >
      {/* Marcador origen */}
      <Marker position={ubicacion} />

      {/* Marcador destino */}
      <Marker position={destino} />

      {/* Servicio para calcular ruta */}
      {!directions && (
        <DirectionsService
          options={{
            origin: ubicacion,
            destination: destino,
            travelMode: "DRIVING" // DRIVING, WALKING, BICYCLING, TRANSIT
          }}
          callback={(response) => {
            if (response !== null && response.status === "OK") {
              setDirections(response);
            }
          }}
        />
      )}

      {/* Renderizar la ruta */}
      {directions && (
        <DirectionsRenderer
          options={{
            directions: directions
          }}
        />
      )}
    </GoogleMap>
  );
}

export default MapaRuta;

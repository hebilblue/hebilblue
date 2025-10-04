'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '15px 0px 0px 15px',
};

const MapComponent = () => {
    // Default center coordinates (you can adjust these to your location)
    const center = {
        lat: 37.150484254009, // Latitude for your location
        lng: 27.374880572619265  // Longitude for your location
    };

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
};

export { MapComponent };

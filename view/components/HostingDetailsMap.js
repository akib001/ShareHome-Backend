import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';



function HostingDetailsMap({ location }) {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: location.latitude,
    longitude: location.longitude,
    zoom: 11,
  });


  return ( 
    <Map
      mapStyle={'mapbox://styles/akib007/cl07d3df3000l14mgzmokqmhm'}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
      className='z-50'
    >
        <div>
          <Marker
            longitude={location.longitude}
            latitude={location.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => {
              }}
              role="img"
              aria-label="push-pin"
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>        
        </div>
    </Map>
  );
}

export default HostingDetailsMap;
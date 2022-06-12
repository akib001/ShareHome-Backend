import React, { useEffect, useState } from 'react';
import MapLocation from './MapLocation';
import getCenter from 'geolib/es/getCenter';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/form-slice';

function Address() {
  const dispatch = useDispatch();
  const stateLocation = useSelector((state) => state.form.data.location);

  // const [location, setLocation] = useState({ latitude: '', longitude: '' });

  useEffect(() => {
    if (!stateLocation.latitude) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          // setLocation({
          //   latitude: position.coords.latitude,
          //   longitude: position.coords.longitude,
          // });

          dispatch(
            formActions.updateData({
              type: 'location',
              newData: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
            })
          );
          // console.log("Latitude is :", position.coords.latitude);
          // console.log("Longitude is :", position.coords.longitude);
        });
      } else {
        console.log('location not available');
        console.log(stateLocation.latitude);
      }
    }
  }, [stateLocation, dispatch]);

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[30vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
        Drag the marker to point your location
        </h1>
      </div>

      {/* Option Container */}

      {/* bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto */}
      <div className="absolute w-[100%] h-[70%] pb-20 bottom-0 md:w-[50%] md:h-[100%] md:right-0 md:top-0">
        {stateLocation.latitude && <MapLocation location={stateLocation} />}
      </div>
    </section>
  );
}

export default Address;

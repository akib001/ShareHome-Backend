import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/form-slice';
import { amenitiesData, safetyItemsData, guestFavoritesData } from './CheckboxItems';

function Step9() {
  const dispatch = useDispatch();
  const stateAmenitiesArray = useSelector(
    (state) => state.form.data.amenitiesArray
  );

  const stateGuestFavoritesArray = useSelector(
    (state) => state.form.data.guestFavoritesArray
  );

  const stateSafetyItemsArray = useSelector(
    (state) => state.form.data.safetyItemsArray
  );

  const handleAmenitiesOnChange = (e, position) => {
    const aminitiesValue = e.target.value;
    const updatedAmenitiesArray = stateAmenitiesArray.map((item, index) => {
        return (index === position ? ((item === '') ? aminitiesValue : '') : item)
    }
    );
    dispatch(formActions.addAmenitiesArray(updatedAmenitiesArray));
  };

  const handleGuestFavoritesOnChange = (e, position) => {
    const guestFavoritesValue = e.target.value;
    const updatedGuestFavoritesArray = stateGuestFavoritesArray.map((item, index) => {
        return (index === position ? ((item === '') ? guestFavoritesValue : '') : item)
    }
    );
    dispatch(formActions.addGuestFavoritesArray(updatedGuestFavoritesArray));
  };

  const handleSafetyItemsOnChange = (e, position) => {
    const safetyItemsValue = e.target.value;
    const updatedSafetyItemsArray = stateSafetyItemsArray.map((item, index) => {
        return (index === position ? ((item === '') ? safetyItemsValue : '') : item)
    }
    );
    dispatch(formActions.addSafetyItemsArray(updatedSafetyItemsArray));
  };

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[40vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-9 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Let guests know what your place has to offer
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className="mx-auto  w-full my-12 md:my-24 px-8 md:px-12">
          {/* Aminities */}
          <p className='text-xl font-semibold md:text-2xl'>Do you have any standout amenities?</p>
          <div className="flex flex-wrap my-4 md:my-6">
            {amenitiesData.map((name, index) => {
              return (
                <div key={index} className="flex items-center mr-4 mb-4">
                  <input
                    id={name}
                    name={name}
                    type="checkbox"
                    value={name}
                    checked={stateAmenitiesArray[index]}
                    onChange={(e) => handleAmenitiesOnChange(e, index)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={name}
                    className="ml-2 text-lg md:text-xl"
                  >
                    {name}
                  </label>
                </div>
              );
            })}
          </div>

          {/* Guest Favorites */}
          <p className='text-xl font-semibold md:text-2xl'>What about these guest favorites?</p>
          <div className="flex flex-wrap my-4 md:my-6">
            {guestFavoritesData.map((name, index) => {
              return (
                <div key={index} className="flex items-center mr-4 mb-4">
                  <input
                    id={name}
                    name={name}
                    type="checkbox"
                    value={name}
                    checked={stateGuestFavoritesArray[index]}
                    onChange={(e) => handleGuestFavoritesOnChange(e, index)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={name}
                    className="ml-2 text-lg md:text-xl"
                  >
                    {name}
                  </label>
                </div>
              );
            })}
          </div>


          {/* Safety Items */}
          <p className='text-xl font-semibold md:text-2xl'>What about these guest favorites?</p>
          <div className="flex flex-wrap my-4 md:my-6">
            {safetyItemsData.map((name, index) => {
              return (
                <div key={index} className="flex items-center mr-4 mb-4">
                  <input
                    id={name}
                    name={name}
                    type="checkbox"
                    value={name}
                    checked={stateSafetyItemsArray[index]}
                    onChange={(e) => handleSafetyItemsOnChange(e, index)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={name}
                    className="ml-2 text-lg md:text-xl"
                  >
                    {name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Step9;
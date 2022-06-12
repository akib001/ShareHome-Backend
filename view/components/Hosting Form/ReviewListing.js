/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/form-slice';

function ReviewListing() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.form.data);

  

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[30vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Please review your listing one more time
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className="max-w-sm md:max-w-md mx-auto mt-10 md:mt-0 bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={stateData.imageInfo[0].url}
              alt={stateData.title}
            />
          </a>
          <div className="p-5">
              <h5 className="mb-2 pb-4 text-2xl border-b font-bold tracking-tight text-gray-900 ">
                {stateData.title}
              </h5>
              <p className="mb-2 pb-4 pt-2 text-xl border-b font-semibold tracking-tight text-gray-900 ">
               {`${stateData.place} in ${stateData.address.city}`}
              </p>
              <p className="mb-2 pb-4 pt-2 text-md border-b tracking-tight text-gray-900 ">
               {`${stateData.guests} guests : ${stateData.beds} beds : ${stateData.bathrooms} bathrooms`}
              </p>
              <p className="mb-2 pb-4 pt-2 text-sm border-b tracking-tight text-gray-900 ">
               {stateData.description}
              </p>
              <div className='mb-2 pb-4 pt-2 text-sm border-b tracking-tight text-gray-900'>
                <p className='text-lg font-semibold'>Aminities</p>
                <p className="text-sm pt-2">
                  {stateData.amenitiesArray.map((item) => {
                    return ` ${item}`
                  })}
                </p>
              </div>

              <div className='mb-2 pb-4 pt-2 text-sm tracking-tight text-gray-900'>
                <p className='text-lg font-semibold'>Location</p>
                <p className="text-sm pt-2">
                  {stateData.address.street + ', ' + stateData.address.city + ', ' + stateData.address.country }
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewListing;

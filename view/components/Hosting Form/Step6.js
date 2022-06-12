import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function Step6() {
  const dispatch = useDispatch();

  const stateGuests = useSelector((state) => state.form.data.guests);
  const stateBeds = useSelector((state) => state.form.data.beds);
  const stateBathrooms = useSelector((state) => state.form.data.bathrooms);

  const guestIncreseHandler = () => {
     dispatch(formActions.increaseFn('guests'));
  }

  const guestDecreseHandler = () => {
     dispatch(formActions.decreaseFn('guests'));
  }

  const bedIncreseHandler = () => {
    dispatch(formActions.increaseFn('beds'));
 }

 const bedDecreseHandler = () => {
    dispatch(formActions.decreaseFn('beds'));
 }

 const bathroomIncreseHandler = () => {
    dispatch(formActions.increaseFn('bathrooms'));
 }

 const bathroomDecreseHandler = () => {
    dispatch(formActions.decreaseFn('bathrooms'));
 }

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          How many guests would you like to welcome?
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className='mx-auto max-w-md md:max-w-lg w-full my-12 px-8 space-y-4 md:space-y-8'>
            {/* Guests */}
          <div className='flex justify-between'>
            <p className='text-lg md:text-2xl md:font-semibold'>Guests</p>
            <div className='flex items-center'>
                {/* Add Button */}
              <button className='mr-3' onClick={guestIncreseHandler}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
              <p className='text-lg md:text-xl'>{stateGuests}</p>

              {/* Minus Button */}
              <button className='ml-3' onClick={guestDecreseHandler}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

            {/* Beds */}
          <div className='flex justify-between'>
            <p className='text-lg md:text-2xl md:font-semibold'>Beds</p>
            <div className='flex items-center'>
                {/* Add Button */}
              <button className='mr-3' onClick={bedIncreseHandler}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
              <p className='text-lg md:text-xl'>{stateBeds}</p>

              {/* Minus Button */}
              <button className='ml-3' onClick={bedDecreseHandler}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

            {/* Bathrooms */}
          <div className='flex justify-between'>
            <p className='text-lg md:text-2xl md:font-semibold'>Guests</p>
            <div className='flex items-center'>
                {/* Add Button */}
              <button className='mr-3' onClick={bathroomIncreseHandler}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
              <p className='text-lg md:text-xl'>{stateBathrooms}</p>

              {/* Minus Button */}
              <button className='ml-3' onClick={bathroomDecreseHandler}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Step6;
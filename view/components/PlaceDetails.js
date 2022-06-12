/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HostingDetailsMap from './HostingDetailsMap';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import ModalHostingDetails from './ModalHostingDetails';
import MenuModal from './MenuModal';
import LoginModal from './LoginModal';
import EditModal from './EditModal';

function PlaceDetails({selectedPlace}) {
  const dispatch = useDispatch();
  
  const showModalHostingHandler = () => {
    dispatch(uiActions.setshowModalHostingDetails());
    console.log('Button Clicked');
  }

  const stateSearchDetails = useSelector(
    (state) => state.search.searchDetails
  );

  const stateUserEmail = useSelector((state) => state.ui.userEmail);

  const editHandler = () => {
    dispatch(uiActions.setShowEditModal());
  }

  let content;
  
  if (stateSearchDetails.title) {
    content = <div className="text-white">
    <button
      onClick={showModalHostingHandler}
      className="bg-gradient-to-r from-rose-600 via-pink-700 to-pink-600 w-full md:w-auto py-2 md:py-3 px-6 rounded-lg font-semibold"
    >
      Reserve
    </button>
  </div>
  }

  if (selectedPlace.hostedBy === stateUserEmail) {
    content = <div className="text-white">
    <button
      onClick={editHandler}
      className="bg-gradient-to-r from-rose-600 via-pink-700 to-pink-600 w-full md:w-auto py-2 md:py-3 px-6 rounded-lg font-semibold"
    >
      Edit
    </button>
  </div>
  }

  return (
    <div className="">
        {/* Modals */}
          <ModalHostingDetails/>
          <MenuModal/> 
          <LoginModal />
          <EditModal/>
      <Header />
      {/* Wrapper */}
      <div className="max-w-full md:max-w-3xl lg:max-w-5xl mx-auto mt-10">
        <img
          className="md:rounded-xl object-cover"
          src={selectedPlace.imageInfo[0].url}
          alt={selectedPlace.title}
        />
        <div className="p-5">
          {/* Title and Button div */}
          <div className="mb-2 pb-4 border-b flex justify-between">
            {/* Title & Address */}
            <div className="text-3xl md:text-4xl">
              <p className="font-medium tracking-tight text-gray-900 mb-px md:mb-2">
                {selectedPlace.title}
              </p>
              <p className="text-sm md:text-[16px] pt-2 underline text-[#717171]">
                {selectedPlace.address.street +
                  ', ' +
                  selectedPlace.address.city +
                  ', ' +
                  selectedPlace.address.country}
              </p>
            </div>

            {/* Price & Button */}
            <div>
              <p className='text-xl md:text-2xl font-semibold md:mb-px'>{selectedPlace.price}<span className='text-[13px] md:text-[15px] text-gray-900 font-normal'> TK/Night</span></p>
              {content}
            </div>
          </div>

          {/* Type & Rooms, Bedroom */}
          <div className="mb-2 pb-4 text-xl md:text-2xl border-b">
            <p className="font-semibold tracking-tight text-gray-900 ">
              {`${selectedPlace.place} in ${selectedPlace.address.city}`}
            </p>
            <p className="text-[16px] md:text-[18px] pt-2">
              {`${selectedPlace.guests} guests · ${selectedPlace.beds} beds · ${selectedPlace.bathrooms} bathrooms`}
            </p>
          </div>

          {/* Description */}
          <p className="mb-2 pb-4 pt-2 text-[16px] border-b tracking-tight text-gray-900 ">
            {selectedPlace.description}
          </p>

          {/* Aminities */}
          <div className="mb-2 pb-4 pt-2 text-sm border-b tracking-tight text-gray-900">
            <p className="text-xl md:text-2xl font-semibold mb-2">Aminities</p>

            {/* Each Part */}
            {selectedPlace.guestFavoritesArray.map((item, index) => {
              return item === '' ? (
                item
              ) : (
                <div
                  key={index}
                  className="text-sm pt-2 flex text-[16px] font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  <p className="ml-2">{item}</p>
                </div>
              );
            })}
          </div>
          <div className="mb-2 pb-4 pt-2 text-sm tracking-tight text-gray-900">
            <p className="text-xl md:text-2xl font-semibold">Location</p>
          </div>
          {/* Add Absoulute, width and height otherwise map won't show up */}
          <div className="absolute w-full md:w-[70%] lg:w-[80%] xl:w-[50%] 2xl:w-[40%] h-[50%] lg:h-[70%]">
            <HostingDetailsMap location={selectedPlace.location} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;

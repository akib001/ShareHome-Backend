/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HostingDetailsMap from '../components/HostingDetailsMap';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import ModalHostingDetails from '../components/ModalHostingDetails';
import LoginModal from '../components/LoginModal';

function HostingDetails() {
  const dispatch = useDispatch();

  const data = {
    place: 'Secondary Unit',
    propertyType: 'Serviced apartment',
    listingType: 'A private room',
    location: { latitude: '23.78433474056456', longitude: '90.36918142592657' },
    address: {
      street: '159/A, Road: 10, Adabor',
      aptSuite: '',
      city: 'Dhaka',
      state: '',
      zipCode: '1207',
      country: 'Bangladesh',
    },
    guests: 3,
    beds: 2,
    bathrooms: 1,
    imageUrls: [
      'https://firebasestorage.googleapis.com/v0/b/rent-space-f74e9.appspot.com/o/images%2F2.jpg8db7f3e1-c2f0-46ef-aa55-bdc7f62cec43?alt=media&token=c9df9426-730e-4939-9d04-2cc42063b09e',
    ],
    title: 'A Sweet Place',
    amenitiesArray: ['', 'Hot tub', '', '', 'Fire pit', '', '', '', ''],
    guestFavoritesArray: [
      '',
      '',
      '',
      '',
      'Free parking on premises',
      '',
      '',
      '',
      '',
    ],
    safetyItemsArray: ['', '', 'Carbon monoxide', '', ''],
    description:
      'Hi I am Kalyan singh  , I belong to Cheog , we are Apple farmers by profession and i also run a School in Cheog where we promote sports . i have represented state in Volleyball Championships , My daughter has represented in various national wreslting championships.',
    price: 1200,
  };

  const showModalHostingHandler = () => {
    dispatch(uiActions.setshowModalHostingDetails());
    console.log('Button Clicked');
  }

  return (
    <div className="">
        {/* Modals */}
          <ModalHostingDetails/>
          <LoginModal />
      <Header />
      {/* Wrapper */}
      <div className="max-w-full md:max-w-3xl lg:max-w-5xl mx-auto mt-10">
        <img
          className="md:rounded-xl object-cover"
          src={data.imageUrls[0]}
          alt={data.title}
        />
        <div className="p-5">
          {/* Title and Button div */}
          <div className="mb-2 pb-4 border-b flex justify-between">
            {/* Title & Address */}
            <div className="text-3xl md:text-4xl">
              <p className="font-medium tracking-tight text-gray-900 mb-px md:mb-2">
                {data.title}
              </p>
              <p className="text-sm md:text-[16px] pt-2 underline text-[#717171]">
                {data.address.street +
                  ', ' +
                  data.address.city +
                  ', ' +
                  data.address.country}
              </p>
            </div>

            {/* Price & Button */}
            <div>
              <p className='text-xl md:text-2xl font-semibold md:mb-px'>{data.price}<span className='text-[13px] md:text-[15px] text-gray-900 font-normal'> TK/Night</span></p>
              <div className="text-white">
                <button
                  onClick={showModalHostingHandler}
                  className="bg-gradient-to-r from-rose-600 via-pink-700 to-pink-600 w-full md:w-auto py-2 md:py-3 px-6 rounded-lg font-semibold"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Type & Rooms, Bedroom */}
          <div className="mb-2 pb-4 text-xl md:text-2xl border-b">
            <p className="font-semibold tracking-tight text-gray-900 ">
              {`${data.place} in ${data.address.city}`}
            </p>
            <p className="text-[16px] md:text-[18px] pt-2">
              {`${data.guests} guests · ${data.beds} beds · ${data.bathrooms} bathrooms`}
            </p>
          </div>

          {/* Description */}
          <p className="mb-2 pb-4 pt-2 text-[16px] border-b tracking-tight text-gray-900 ">
            {data.description}
          </p>

          {/* Aminities */}
          <div className="mb-2 pb-4 pt-2 text-sm border-b tracking-tight text-gray-900">
            <p className="text-xl md:text-2xl font-semibold mb-2">Aminities</p>

            {/* Each Part */}
            {data.amenitiesArray.map((item, index) => {
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
            <HostingDetailsMap location={data.location} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostingDetails;

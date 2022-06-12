import React, { useState } from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

function Header({placeholder, onShowMenu}) {
  const [searchInput, setSearchInput] = useState('');
  // Default is set to todays Date for selection future date range
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const stateLogginIn = useSelector((state) => state.ui.userToken);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const dateSelectionHandler = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInputHandler = () => {
    setSearchInput('');
  };

  // if user is already logged in I don't show login popup
  const BecomeAHostHandler = () => {
    if(!stateLogginIn) {
      dispatch(uiActions.setShowModal());
    } else {
      router.push('/become-a-host/intro')
    }
  }

  const menuModalHandler = () => {
    dispatch(uiActions.setShowMenuModal());
  }

  const searchHandler = () => {
      router.push({
          pathname: "/search",
          query: {
              location: searchInput,
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              noOfGuests
          }
      })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          onClick={() => router.push('/')}
          src="https://raw.githubusercontent.com/techopoly/dashboard/main/images/60.1648916355341.MpvUHqlbov1jETUKdeVW5IPLnb2a7l2I-bNKdSmodHk%3D.webp.png"
          layout="fill"
          alt="logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle - search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div onClick={menuModalHandler} className="flex items-center space-x-2 border-2 p-2 cursor-pointer rounded-full hover:bg-gray-100 hover:shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            //   this receives selection ranges
            ranges={[selectionRange]}
            //   cause we need to book in the future.
            minDate={new Date()}
            rangeColors={['#FD5861']}
            onChange={dateSelectionHandler}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            {/* flex-grow is set because I want to take all available space for both button */}
            <button
              onClick={resetInputHandler}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button onClick={searchHandler} className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header> 

  );
}

export default Header;


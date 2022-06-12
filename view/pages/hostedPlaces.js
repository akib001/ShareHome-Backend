import React, { useEffect, useState } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuModal from '../components/MenuModal';
import LoginModal from '../components/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import InfoCard from '../components/InfoCard';


function HostedPlaces() {
  const dispatch = useDispatch();
  const stateLoggedIn = useSelector((state) => state.ui.token);
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    let retrivedToken = localStorage.getItem('token');
    let retrivedEmail = localStorage.getItem('userEmail');

    dispatch(uiActions.retriveUserData({
      token: retrivedToken,
      userEmail: retrivedEmail
    }))

    const fetchBookedPlacesFn = async () => {
      const res = await fetch(
        'https://online-lodging-marketplace.herokuapp.com/fetchHostedPlaceList',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + stateLoggedIn
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
  
      const data = await res.json()
      setSearchResults(data.data);
    }
    fetchBookedPlacesFn();
   
  }, [stateLoggedIn, dispatch, setSearchResults])


  return (
    <div className="">
      {/* Modals */}
      <MenuModal/>
      <LoginModal/>

      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          {/* <p className="text-xs">
            300+ Stays - {range}  for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1> */}

          <div className="hidden  lg:inline-flex mb-5 space-x-3  text-gray-800 whitespace-nowrap">
            {/* button is a custom component of tailwind css */}
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className='flex  flex-col'>
            {searchResults.map((item) => {
              return (<InfoCard
              key={item._id}
              location={item.address}
              title={item.title}
              place={item.place}
              img={item.imageInfo[0].url}
              description={item.description}
              star='4.5'
              price={item.price}
              total={item.price}
              id={item._id}
              />)
            })}
          </div>
        </section>
        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          {/* <MapArea searchResults={searchResults} /> */}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default HostedPlaces;


import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

function ModalHostingDetails() {
  const modalRef = useRef();
  
  const dispatch = useDispatch();

  const stateShowModalHosting = useSelector(
    (state) => state.ui.showModalHostingDetails
  );

  const stateSearchDetails = useSelector(
    (state) => state.search.searchDetails
  );

  const stateLoggedIn = useSelector((state) => state.ui.token);

  const closeModal = (e) => {
    // To identify click only occurs at backdrop
    if (modalRef.current === e.target) {
      dispatch(uiActions.setshowModalHostingDetails());
    }
  };

  const confirmReserveHandler = async () => {
    const res = await fetch(
      'https://online-lodging-marketplace.herokuapp.com/bookPlace',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + stateLoggedIn
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          id: stateSearchDetails.id,
          checkIn: stateSearchDetails.startDate,
          checkOut: stateSearchDetails.endDate
        }),
      }
    );

    const data = await res.json()
    console.log(data)
    alert('Reserved Successfully');
    dispatch(uiActions.setshowModalHostingDetails());

  }

  return (
    // Background / Backdrop
    stateShowModalHosting && (
      <section
        onClick={closeModal}
        ref={modalRef}
        className="w-full h-screen fixed z-[60] text-gray-800 bg-black bg-opacity-30 flex justify-center items-center"
      >
        {/* card */}
        <div className="bg-white shadow-md rounded-xl w-full sm:max-w-md md:max-w-md">
          <div className="flex border-b-[1px] py-3 pl-4 pr-8">
            <button
              // closeModal
              onClick={() => dispatch(uiActions.setshowModalHostingDetails())}
              className="hover:bg-gray-100 rounded-full px-3 py-1 font-semibold"
            >
              X
            </button>
            <h1 className="font-semibold text-2xl mx-auto">Confirm Booking</h1>
          </div>

          {/* Info Container */}

          <div className="pl-5 pt-5 pr-5">
              <h5 className="mb-2 pb-4 text-xl border-b font-bold tracking-tight text-gray-900 ">
              {stateSearchDetails.title}
              </h5>
            
              <p className="mb-2 pb-4 pt-2 border-b text-lg md:text-xl tracking-tight text-gray-900 ">
               <span className='font-medium'>Check In:</span> {stateSearchDetails.startDate}
              </p>

              <p className="mb-2 pb-4 pt-2 border-b text-lg md:text-xl tracking-tight text-gray-900 ">
               <span className='font-medium'>Check Out:</span> {stateSearchDetails.endDate}
              </p>

              <p className="mb-2 pb-4 pt-2 border-b text-lg md:text-xl tracking-tight text-gray-900 ">
               <span className='font-medium'>No of guests:</span> {stateSearchDetails.noOfGuests}
              </p>

              <p className="mb-2 pb-4 pt-2 border-b text-lg md:text-xl tracking-tight text-gray-900 ">
               <span className='font-medium'>Price:</span> {`${stateSearchDetails.price} BDT/Night`}
              </p>
          </div>

          {stateLoggedIn && <div className="my-5 mx-6">
            <button onClick={confirmReserveHandler} className="border text-lg font-semibold w-full border-black rounded-md hover:bg-gray-100">
              Confirm
            </button>
          </div>}
        </div>
      </section>
    )
  );
}

export default ModalHostingDetails;

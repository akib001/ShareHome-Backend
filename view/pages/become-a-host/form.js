import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Step1 from '../../components/Hosting Form/Step1';
import Step2 from '../../components/Hosting Form/Step2';
import Step3 from '../../components/Hosting Form/Step3';
import Step6 from '../../components/Hosting Form/Step6';
import Address from '../../components/Hosting Form/Address';
import ManualAddress from '../../components/Hosting Form/ManualAddress';
import PhotoUpload from '../../components/Hosting Form/PhotoUpload';
import Step8 from '../../components/Hosting Form/Step8';
import Step9 from '../../components/Hosting Form/Step9';
import Step10 from '../../components/Hosting Form/Step10';
import Step11 from '../../components/Hosting Form/Step11';
import ReviewListing from '../../components/Hosting Form/ReviewListing';
import { useRouter } from 'next/router';


function Form() {
  const [page, setPage] = useState(1);
  const [showNextBtn, setShowNextBtn] = useState(null);
  const stateData = useSelector((state) => state.form.data);
  const stateUserEmail = useSelector((state) => state.ui.userEmail);

  const router = useRouter();

  const formSubmitHandler = async () => {
    await fetch(
      'https://online-lodging-marketplace.herokuapp.com/addPlace',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-Form-urlencoded',
        },
        body: JSON.stringify({
          place: stateData.place,
          propertyType: stateData.propertyType,
          listingType: stateData.listingType,
          location: stateData.location,
          address: stateData.address,
          guests: stateData.guests,
          beds: stateData.beds,
          bathrooms: stateData.bathrooms,
          imageInfo: stateData.imageInfo,
          title:stateData.title,
          amenitiesArray: stateData.title,
          guestFavoritesArray: stateData.guestFavoritesArray,
          safetyItemsArray: stateData.safetyItemsArray,
          description:stateData.description,
          price: stateData.price,
          hostedBy: stateUserEmail,
          bookedBy: ''
        }),
      }
    );

    console.log('Place Added');
    
  };

  const goNextPage = () => {
    // Form Submit to Api
    if (page === 12) {
      formSubmitHandler();
      router.push('/');
    };

    if (page > 12) return;

    setPage((page) => page + 1);
  };

  const goPreviousPage = () => {
    if (page === 1) {
      return;
    }
    setPage((page) => page - 1);
  };

  const updateData = (type, newData) => {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  };

  const progressBar = `${(page / 11) * 100}%`;



  // Next Button Checker
  useEffect(() => {
    if (page === 1) {
      setShowNextBtn(stateData.place);
    }
    if (page === 2) {
      setShowNextBtn(stateData.propertyType);
    }
    if (page === 3) {
      setShowNextBtn(stateData.listingType);
    }
    if (page === 5) {
      setShowNextBtn(stateData.address.street);
    }
    if (page === 6) {
      setShowNextBtn(stateData.guests);
    }
    if (page === 7) {
      setShowNextBtn(stateData.imageInfo.length !== 0);
    }
    if (page === 8) {
      setShowNextBtn(stateData.title);
    }
    if (page === 10) {
      setShowNextBtn(stateData.description);
    }
    if (page === 11) {
      setShowNextBtn(stateData.price > 0);
    }
  }, [stateData, setShowNextBtn, page]);

  return (
    <div>
      {/* Header Button */}
      <div className="hidden fixed right-0 md:visible md:flex py-8 mx-12 md:justify-end">
        <button className="rounded-3xl px-4 py-2 text-black bg-neutral-200 text-xs font-semibold hover:bg-neutral-400">
          Exit
        </button>
      </div>
      {/* Question Component */}
      {/* steps are question and options component */}
      {page === 1 && <Step1 />}
      {page === 2 && <Step2 />}
      {page === 3 && <Step3 />}
      {page === 4 && <Address />}
      {page === 5 && <ManualAddress />}
      {page === 6 && <Step6 />}
      {page === 7 && <PhotoUpload />}
      {page === 8 && <Step8 />}
      {page === 9 && <Step9 />}
      {page === 10 && <Step10 />}
      {page === 11 && <Step11 />}
      {page === 12 && <ReviewListing />}
      {/* {page === 12 && <ReviewListing />} */}
      {/* Progress Bar and Buttons*/}
      <div className="w-full bg-white md:w-[50%] fixed bottom-0 md:right-0">
        <div className="w-full h-[2px] bg-[#EBEBEB]">
          {/* width is specified in style props cause tailwind doesn't create dynamic classname from variable */}
          <div
            style={{ width: `${progressBar > 11 ? '100%' : progressBar}` }}
            className="h-[2px] bg-black"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between pl-4 pr-6 py-4">
          <button
            onClick={goPreviousPage}
            className="font-semibold underline px-3 py-2 rounded-lg hover:bg-neutral-200"
          >
            Back
          </button>
          <button
            disabled={!showNextBtn}
            onClick={goNextPage}
            className="bg-[#222] disabled:bg-gray-200 hover:bg-black text-white font-semibold px-6 py-3 rounded-lg"
          >
            {page === 11
              ? 'Review your listing'
              : page === 12
              ? 'Publish your listing'
              : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

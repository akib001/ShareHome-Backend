import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function Step11() {
    const dispatch = useDispatch();
    const statePrice = useSelector((state) => state.form.data.price);

    const priceChangeHandler = (e) => {
        e.preventDefault();
        dispatch(formActions.updateData({type: 'price', newData: e.target.value}))
    }

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
         Now for the fun part—set your price
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white  text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className='mx-auto max-w-xs md:max-w-sm 2xl:max-w-md w-full my-12 px-8 md:px-12'>
            <label
              htmlFor="price"
              className="block text-center mb-4 md:mb-6 text-2xl md:text-3xl font-medium text-gray-900"
            >
              Price Per Night
            </label>
            <input
              id="price"
              type='number'  
              value={statePrice}
              onChange={priceChangeHandler}
              className="block p-4 w-full text-xl md:text-2xl text-center font-semibold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
            ></input>
        </div>
      </div>
    </section>
  );
}

export default Step11;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function Step8() {
    const dispatch = useDispatch();
    const stateTitle = useSelector((state) => state.form.data.title);

    const titleChangeHandler = (e) => {
        e.preventDefault();
        dispatch(formActions.updateData({type: 'title', newData: e.target.value}))
    }

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Give your place a name
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white  text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className='mx-auto max-w-lg md:max-w-lg 2xl:max-w-xl w-full my-12 px-8 md:px-12'>
            <label
              htmlFor="message"
              className="hidden md:visible md:block mb-4 md:mb-6 text-xl md:text-2xl font-medium text-gray-900"
            >
              Create your title
            </label>
            <textarea
              id="message"
              rows="4"
              value={stateTitle}
              onChange={titleChangeHandler}
              className="block p-4 w-full text-3xl font-semibold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Adorable Place with pool"
            ></textarea>
        </div>
      </div>
    </section>
  );
}

export default Step8;

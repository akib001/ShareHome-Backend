import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/form-slice';

function ManualAddress() {
  const dispatch = useDispatch();

  const stateAddress = useSelector((state) => state.form.data.address)

  const formHandler = (event) => {
    event.preventDefault();

    dispatch(
      formActions.updateData({
        type: 'address',
        newData: {
          street: event.target.floating_street.value,
          aptSuite: event.target.floating_apt.value,
          city: event.target.floating_city.value,
          state: event.target.floating_state.value,
          zipCode: event.target.floating_zip_code.value,
          country: event.target.floating_country.value,
        },
      })
    );
  };

  const resetHandler = () => {
    dispatch(
      formActions.updateData({
        type: 'address',
        newData: {
          street: '',
          aptSuite: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
        },
      })
    );
  };

  // NOTE: value prop shouldn't be null

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Type your Address
        </h1>
      </div>

      {/* Form */}
      <div className="bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <form className="mx-12 my-8" onSubmit={formHandler}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_street"
              value={stateAddress.street ? stateAddress.street : null}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#222] dark:border-gray-600 dark:focus:border-black  focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_street"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Street
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_apt"
              value={stateAddress.aptSuite ? stateAddress.aptSuite : null}
              id="floating_apt"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#222] dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_apt"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apt, suite, etc. (Optional)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="city"
              value={stateAddress.city ? stateAddress.city : null}
              id="floating_city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#222] dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="state"
              value={stateAddress.state ? stateAddress.state : null}
              id="floating_state"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#222] dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_state"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              State (Optional)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="zip_code"
              value={stateAddress.zipCode ? stateAddress.zipCode : null}
              id="floating_zip_code"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#222] dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_zip_code"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Zip code (Optional)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="country"
              value={stateAddress.country ? stateAddress.country : null}
              id="floating_country"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#222] dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_country"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Country
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          {stateAddress.street && 

          <button
            onClick={resetHandler}
            type="reset"
            className="text-white ml-6 bg-black-[#111] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#222] dark:hover:bg-black-[#111] dark:focus:ring-[#111]"
          >
            Edit
          </button>
          }
        </form>
      </div>
    </section>
  );
}

export default ManualAddress;

import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

function EditModal() {
    const modalRef = useRef();
  const enteredTitle = useRef();
  const enteredDescription = useRef();
  const enteredPrice = useRef();
 

  const dispatch = useDispatch();

  const stateShowEditModal = useSelector((state) => state.ui.showEditModal);

  const stateSearchDetails = useSelector((state) => state.search.searchDetails);

  const stateLoggedIn = useSelector((state) => state.ui.token);

  const closeModal = (e) => {
    // To identify click only occurs at backdrop
    if (modalRef.current === e.target) {
      dispatch(uiActions.setShowEditModal());
    } else {
      return
    }
  };

  const submitHandler = (event) => {
     event.preventDefault();
     const title = enteredTitle.current.value;
     const description = enteredDescription.current.value;
     const price = enteredPrice.current.value;
    
     const editPlaceFn = async () => {
        const res = await fetch(
          'https://online-lodging-marketplace.herokuapp.com/editPlace',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + stateLoggedIn
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify( {
               id: stateSearchDetails.id,
               title,
               price,
               description 
            })
          }
        );
    
        const data = await res.json()
        console.log(data);    
      }

      editPlaceFn();
      dispatch(uiActions.setShowEditModal());
      alert('Edit Updated');
  }  


  return (
    stateShowEditModal && <section
    onClick={closeModal}
    ref={modalRef}
    className="w-full h-screen fixed z-[60] text-gray-800 bg-black bg-opacity-30 flex justify-center items-center"
  >
    {/* card */}
    <div className="bg-white shadow-md rounded-xl w-full sm:max-w-lg">
      <div className="flex border-b-[1px] py-3 pl-4 pr-8">
        <button
          // closeModal
          onClick={() => dispatch(uiActions.setShowEditModal())}
          className="hover:bg-gray-100 rounded-full px-3 py-1 font-semibold"
        >
          X
        </button>
        <h1 className="font-bold text-lg mx-auto">Edit</h1>
      </div>

      {/* Edit Form */}
      <form className="p-6 pb-4" onSubmit={submitHandler}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            New Title
          </label>
          <input
            type="text"
            id="title"
            ref={enteredTitle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="A Sweet Place"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            New Description
          </label>
          <input
            type="text"
            id="description"
            ref={enteredDescription}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            New Price
          </label>
          <input
            type="number"
            id="price"
            ref={enteredPrice}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        
                 
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Confirm Edit
        </button>
      </form>
    </div>
  </section>
  )
}

export default EditModal

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { storage } from '../../Firebase/firebase';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function PhotoUpload() {
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState(null);
  const stateImageInfo = useSelector((state) => state.form.data.imageInfo);


  const uploadFile = () => {
    if (imageUpload == null) return;
    const dynamicImageName = `images/${imageUpload.name + v4()}`;
    const imageRef = ref(storage, dynamicImageName);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        dispatch(formActions.addImageInfoFn({url: url, fileName: dynamicImageName}));
      });
    });
  };

  const imageDeleteHandler = ( fileName, index) => {
      const deleteImageRef = ref(storage, fileName);
      
      deleteObject(deleteImageRef).then(() => {
        console.log('File deleted successfully')
      }).catch((error) => {
        console.log(error)
      });

      dispatch(formActions.removeImageInfoFn(index));
  }

  // TODO: Drag & drop image, Image grid, Delete Functionality add

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Next, let's add some photos of your place
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white px-8 pt-10 md:pt-28 text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button className='text-white my-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={uploadFile}>Confirm Upload</button>
      {stateImageInfo.map((item, index) => {
        return (<div key={item.url} className='relative'>
          <button onClick={() => imageDeleteHandler(item.fileName, index)} className="bg-black bg-opacity-30 hover:bg-opacity-70 z-10 cursor-pointer top-4 left-6 text-white rounded-full px-3 py-1 font-semibold absolute md:hidden">
          X
          </button>
          <img className='mb-4' src={item.url} />
          </div>)
      })}
      </div>
    </section>
  );
}

export default PhotoUpload;
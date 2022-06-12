import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function Step1Option({id, name, optionImg}) {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.form.data.place)

  const radioInputHandler = (e) => {
    dispatch(formActions.updateData({type: 'place', newData: e.target.value}))
  }

  return (
    <div className='mx-auto max-w-md md:max-w-lg w-full'>
              <input checked={stateData === name} onChange={radioInputHandler} type="radio" name="radio" value={name} id={id} className='hidden peer'/>
              <label htmlFor={id} className="border-[1px] peer-checked:border-black peer-checked:border-2 peer-checked:m-[-1px] hover:border-black hover:border-2 hover:m-[-1px] transition-all rounded-xl pl-6 pr-3 py-3 md:py-4 flex justify-between items-center">
                <div className="text-md md:text-lg font-semibold">{name}</div>
                <div className="inline-block w-[48px] h-[48px] md:w-[56px] md:h-[56px] min-h-[1px] rounded-md overflow-hidden">
                  <Image
                    objectFit="contain"
                    src={optionImg}
                    alt="apartment_image"
                    height={'56px'}
                    width={'56px'}
                  />
                </div>
              </label>
    </div>
  )
}

export default Step1Option;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function Step2Option({id, name, description}) {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.form.data.propertyType)

  const radioInputHandler = (e) => {
    dispatch(formActions.updateData({type: 'propertyType', newData: e.target.value}))
  }

  return (
    <div className='mx-auto max-w-md md:max-w-lg w-full'>
              <input checked={stateData === name} onChange={radioInputHandler} type="radio" name="radio" value={name} id={id} className='hidden peer' />
              <label htmlFor={id} className="border-[1px] peer-checked:border-black peer-checked:border-2 peer-checked:m-[-1px] hover:border-black hover:border-2 hover:m-[-1px] transition-all rounded-xl pl-4 pr-3 py-6 md:space-y-2 md:pr-7 flex flex-col justify-between items-start">
                <div className="text-md md:text-lg font-semibold">{name}</div>
                <div className="inline-block text-sm text-[#717171]">
                  {description}
                </div>
              </label>
    </div>
  )}

export default Step2Option;
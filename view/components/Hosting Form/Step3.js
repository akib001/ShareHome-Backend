import React from 'react';
import Step3Option from './Step3Option';

function Step3() {
  const propertyTypeOptions = [
    {
      id: 'an-entire-place',
      name: 'An entire place',
    },
    {
      id: 'a-private-room',
      name: 'A private room',
    },
    {
      id: 'a-shared-room',
      name: 'A shared room',
    },    
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
         What kind of space will guests have?
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className="flex flex-col h-full pt-8 px-8 space-y-3 md:space-y-4">
          {/* Option Radio Checkboxes */}
          {propertyTypeOptions.map((option) => (
            <Step3Option
              key={option.id}
              id={option.id}
              name={option.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Step3;



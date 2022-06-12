import React from 'react';
import Step1Option from './Step1Option';

function Step1() {
  const propertyTypeOptions = [
    {
      id: 'apartment',
      name: 'Apartment',
      optionImg:
        'https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240',
    },
    {
      id: 'house',
      name: 'House',
      optionImg:
        'https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240',
    },
    {
      id: 'secondary-unit',
      name: 'Secondary Unit',
      optionImg:
        'https://a0.muscache.com/im/pictures/32897901-1870-4895-8e23-f08dc0e61750.jpg?im_w=240',
    },
    {
      id: 'unique-space',
      name: 'Unique Space',
      optionImg:
        'https://a0.muscache.com/im/pictures/7ad56bb1-ed9f-4dcb-a14c-2523da331b44.jpg?im_w=240',
    },
    {
      id: 'bed-and-breakfast',
      name: 'Bed and Breakfast',
      optionImg:
        'https://a0.muscache.com/im/pictures/d52fb4e7-39a4-46df-9bf9-67e56d35eeca.jpg?im_w=240',
    },
    {
      id: 'boutique-hotel',
      name: 'Boutique-hotel',
      optionImg:
        'https://a0.muscache.com/im/pictures/a2c9ad21-b159-4fd2-b417-d810fb23c6a9.jpg?im_w=240',
    },
  ];

  return (
    <section className="flex flex-col md:flex-row h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="h-[48vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          What kind of place will you host?
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white text-[#222] min-h-[52vh] max-h-[72vh] md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className="flex flex-col h-full py-8 px-8 space-y-3 md:space-y-4">
          {/* Option Radio Checkboxes */}
          {propertyTypeOptions.map((option) => (
            <Step1Option
              key={option.id}
              id={option.id}
              name={option.name}
              optionImg={option.optionImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Step1;

// flex shrink,

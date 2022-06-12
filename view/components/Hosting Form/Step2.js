import React from 'react';
import Step2Option from './Step2Option';

function Step2() {
  const propertyTypeOptions = [
    {
      id: 'rental-unit',
      name: 'Rental unit',
      description:
        'A rented place within a multi-unit residential building or complex.',
    },
    {
      id: 'condo',
      name: 'Condo',
      description:
        'A place within a multi-unit building or complex owned by the residents.',
    },
    {
      id: 'loft',
      name: 'Loft',
      description:
        'An open layout apartment or condo, which may have short interior walls.',
    },
    {
      id: 'serviced-apartment',
      name: 'Serviced apartment',
      description:
        'An apartment with hotel-like amenities serviced by a professional management company.',
    },
    {
      id: 'casa-particular',
      name: 'Casa particular',
      description:
        'A private room in a Cuban home that feels like a bed and breakfast.',
    },
    {
      id: 'vacation-home',
      name: 'Vacation home',
      description:
        'A furnished rental property that includes a kitchen and bathroom and may offer some guest services, like a reception desk.',
    },
    
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[28vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Which of these best describes your place?
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className="flex flex-col h-full pt-8 px-8 space-y-3 md:space-y-4">
          {/* Option Radio Checkboxes */}
          {propertyTypeOptions.map((option) => (
            <Step2Option
              key={option.id}
              id={option.id}
              name={option.name}
              description={option.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Step2;

// flex shrink,

import React from 'react';
import { useRouter } from 'next/router';


function intro() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const letsGoHandler= () => {
    router.push('/become-a-host/Form');
  }


  return (
    <section className="flex min-h-screen relative ">
      {/* video */}
      <div className="h-[52vh] md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <button className="bg-black bg-opacity-30 hover:bg-opacity-70 z-10 cursor-pointer top-4 left-6 text-white rounded-full px-3 py-1 font-semibold absolute md:hidden">
          X
        </button>
        <video
          className="object-cover w-full h-full overflow-hidden"
          controls
          autoPlay
          crossOrigin="anonymous"
          playsInline
          preload="auto"
        >
          <source
            src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4?imformat=h265"
            type="video/mp4: codecs=hevc"
          />
          <source
            src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Other container and button */}
      <div className="bg-black text-white h-[50vh] md:h-screen w-full md:w-[50%] rounded-t-2xl md:rounded-none absolute md:relative top-[50%] md:right-0 md:top-0 flex flex-col justify-between">
        {/* Exit Button */}
        <div className="hidden md:visible md:flex py-8 mx-12 md:justify-end">
          <button className="rounded-3xl px-4 py-2 text-white bg-neutral-800 text-xs font-semibold hover:text-black">
            Exit
          </button>
        </div>
        <div className="m-8 md:px-10 flex flex-col h-full md:justify-center space-y-4 md:space-y-8 md:text-center md:mx-auto md:max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Become a Host in 10 easy steps
          </h1>
          <p className="text-lg md:text-xl">
            Join us. We&apos;ll help you every step of the way.
          </p>
        </div>
        <div className="py-4 px-6 md:px-12 border-t-2 border-[#222222] flex md:justify-end">
          <button onClick={letsGoHandler} className="bg-gradient-to-r from-rose-600 via-pink-700 to-pink-600 w-full md:w-auto py-3 px-6 rounded-lg font-semibold">
            Let&apos;s go!
          </button>
        </div>
      </div>
    </section>
  );
}

export default intro;

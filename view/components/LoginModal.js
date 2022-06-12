import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { signInWithGoogle } from '../Firebase/firebase';
import { useRouter } from 'next/router';

function LoginModal() {
  const modalRef = useRef();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();

  const dispatch = useDispatch();
  const router = useRouter();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const stateShowModal = useSelector((state) => state.ui.showModal);

  const closeModal = (e) => {
    // To identify click only occurs at backdrop
    if (modalRef.current === e.target) {
      dispatch(uiActions.setShowModal());
    } else {
      return
    }
  };

  const loginModeSwitchHandler = () => {
    setIsLoginMode(!isLoginMode);
  }

  const submitHandler = (event) => {
     event.preventDefault();
     const email = enteredEmailRef.current.value;
     const password = enteredPasswordRef.current.value;
     let url;

    //  Note: Error Show Bug

    if (isLoginMode) {
      url = 'https://online-lodging-marketplace.herokuapp.com/login'
    } else {
      url = 'https://online-lodging-marketplace.herokuapp.com/createUser'
    }
     
     fetch(url, {
       method: 'POST',
       body: JSON.stringify({
         email,
         password,
       }),
       headers: {
        'Content-Type': 'application/json',
      }
     }).then((response) => {
       return response.json().then((data) => {
         if (data.message) {
          alert('Authentication Failed');
         }
         if (!isLoginMode) {
            alert('User Created, Now you can login');
            setIsLoginMode(true);
         }
         if (isLoginMode) {
           dispatch(uiActions.setShowModal());
           dispatch(uiActions.userLogin({token: data.token, userEmail: email}))
         }
       })
     })

     console.log({email, password});

  }  



  // const signInWithGoogleHandler = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       dispatch(uiActions.userLogin(result._tokenResponse.idToken));
  //       dispatch(
  //         uiActions.setUserProfile({
  //           name: result._tokenResponse.firstName,
  //           email: result._tokenResponse.email,
  //         })
  //       );
  //       router.push('/become-a-host/intro');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    // Background / Backdrop
    stateShowModal && (
      <section
        onClick={closeModal}
        ref={modalRef}
        className="w-full h-screen fixed z-[60] text-gray-800 bg-black bg-opacity-30 flex justify-center items-center"
      >
        {/* card */}
        <div className="bg-white shadow-md rounded-xl w-full sm:max-w-lg">
          <div className="flex border-b-[1px] py-3 pl-4 pr-8">
            <button
              // closeModal
              onClick={() => dispatch(uiActions.setShowModal())}
              className="hover:bg-gray-100 rounded-full px-3 py-1 font-semibold"
            >
              X
            </button>
            <h1 className="font-bold text-lg mx-auto">Log in or sign up</h1>
          </div>

          {/* Login Form */}
          <form className="p-6 pb-4" onSubmit={submitHandler}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                ref={enteredEmailRef}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                ref={enteredPasswordRef}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                 
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
              >
                Remember me
              </label>          
            </div>            
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {isLoginMode ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {/* Create New Account Button */}
          <div className="my-2 mx-6 mb-5">
            <button
              className="border w-full py-2 border-black rounded-md hover:bg-gray-100"
              type="button"
              onClick={loginModeSwitchHandler}
            >
              {isLoginMode ? 'Create new Account' : 'Switch to Login'}
            </button>
          </div>

          {/* continue with google
          <div className="my-5 mx-6">
            <button
              onClick={signInWithGoogleHandler}
              className="border w-full border-black rounded-md hover:bg-gray-100"
            >
              <div className="flex mx-5 py-2">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
                  alt="Google Icon"
                  objectFit="contain"
                  height="12px"
                  width="20px"
                />
                <div className="mx-auto text-md">Continue With Google</div>
              </div>
            </button>
          </div> */}
        </div>
      </section>
    )
  );
}

export default LoginModal;

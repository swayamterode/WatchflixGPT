import Header from "./Header";
import useLogin from "../hooks/useLogin";
import { BG_URL } from "../utils/constants";
/**
 * Login component for Netflix GPT.
 * @returns {JSX.Element} Login component.
 */
const Login = () => {
  const {
    name, email, password, isSignedIn, errorMessage,
    suceesMessage, isLoading, toogleSignInForm, handleButtonClick, } = useLogin();
  return (
    <>
      <div className="absolute">
        <Header />
        <img
          className="object-cover fixed w-screen h-screen"
          src={BG_URL}
          alt="bgimage"
        />
      </div>

      <div>
        <form onSubmit={(e) => e.preventDefault()}
          className="w-[90%] md:w-1/3 absolute p-6 md:p-14 mx-auto right-0 left-0 bg-black bg-opacity-80 mt-48 flex-col space-y-5 rounded-2xl">
          {/* Heading */}
          <h1 className="text-white text-xl md:text-3xl mb-6 md:mb-2">
            {isSignedIn ? "Sign in" : "Sign up"}
          </h1>
          {/* FullName */}
          {!isSignedIn && (
            < input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="py-4 w-full rounded-md pl-7 text-lg bg-[#333] text-[#737373]"
            />
          )}
          {/* Email ✅ */}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="py-4 w-full rounded-md pl-7 text-lg bg-[#333] text-[#737373]"
          />
          {/* Password ✅ */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-4 w-full rounded-md pl-7 text-lg bg-[#333] text-[#737373]"
          />

          {/* Erorr Messages ✅ */}
          <p className="text-[#e50914] font-bold flex justify-center items-center">
            {errorMessage}
          </p>
          {/* Success Messages ✅ */}
          <p className="text-green-500 font-bold flex justify-center items-center">
            {suceesMessage}
          </p>



          {/* Button for Sign up and Sign in. */}
          <button
            className={`bg-[#e50914] mt-28 text-white py-4 w-full text-xl font-semibold rounded-md relative flex items-center justify-center`}
            onClick={handleButtonClick}
          >
            {isLoading ? (
              <div className="w-8 h-8 mr-2 animate-spin dark:text-gray-600 fill-white relative">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 animate-spin text-gray-600 fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : null}
            {isLoading ? '' : isSignedIn ? 'Sign in' : 'Sign up'}
          </button>

          <div className="flex justify-between">
            <input type="checkbox" className="text-[#333] w-6 h-6 rounded-xl" />{" "}
            <span className="text-[#737373] -ml-20 md:-ml-48">Remember me</span>
            <p className="text-[#737373]">Need help?</p>
          </div>

          <p className="text-[#737373] text-xl font-light pt-20">
            {isSignedIn ? "New to Netflix?" : "Already Registered?"}
            <span
              className="text-white text-xl ml-2 transform scale-100 hover:scale-105 hover:text-red-500 hover:cursor-pointer"
              onClick={toogleSignInForm}
            >
              {isSignedIn ? "Sign up now." : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

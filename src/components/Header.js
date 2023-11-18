import useHeader from '../hooks/useHeader';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { FaPowerOff } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SiFastapi } from "react-icons/si";
/**
 * Header component for Netflix GPT application.
 * @returns {JSX.Element} Header component.
 */
const Header = () => {
  const { user, showGptSearch, handleGptSearchClick, handleLanguageChange, handleSignOut } = useHeader();

  return (
    <div className=' fixed z-10 flex-col md:flex-row  px-5 py-3 bg-black/20 backdrop-blur-2xl w-screen flex justify-between'>
      <div className='flex flex-row justify-between'>
        {user && (
          <select
            className="h-5 md:hidden my-auto bg-inherit text-white text-sm "
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <img className='w-36 md:w-64 z-10 mx-auto md:mx-0' src={LOGO} alt='WatchFlix Logo' />


        <div className="flex md:hidden items-center">
          {user && (
            <div className='flex justify-center items-center'>
              {showGptSearch ? (
                <AiFillHome className='text-white text-2xl md:hidden' onClick={handleGptSearchClick} />
              ) : (
                <SiFastapi className="text-green-300 text-2xl cursor-pointer" onClick={handleGptSearchClick} />
              )}

              <div className="flex md:hidden items-center ml-4">
                <FaPowerOff className="text-red-600 text-2xl cursor-pointer" onClick={handleSignOut} />
              </div>
            </div>
          )}
        </div>
      </div>

      {user && (
        <div className='flex justify-between items-center'>
          {/* Some error occcured here! */}
          <select
            className="p-2 m-2 bg-inherit text-white hidden sm:inline-block md:visible"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          <div className="hidden md:flex items-center">
            <button
              className="text-white  bg-gradient-to-br ml-4 from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 z-10 mr-6 my-2"
              onClick={handleGptSearchClick}>
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <img className="w-6 h-6 md:w-12 md:h-12" src={user?.photoURL} alt="logo" />
            <p className="text-white font-bold md:pl-4 hover:text-red-500 z-50 text-sm md:text-lg cursor-pointer" onClick={handleSignOut}>
              Sign Out
            </p>
          </div>

          {/* Render icon on sm devices */}

        </div>
      )}
    </div>
  )
}

export default Header
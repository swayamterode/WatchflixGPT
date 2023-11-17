import useHeader from '../hooks/useHeader';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';

/**
 * Header component for Netflix GPT application.
 * @returns {JSX.Element} Header component.
 */
const Header = () => {
  const { user, showGptSearch, handleGptSearchClick, handleLanguageChange, handleSignOut } = useHeader();
 
  return (
    <div className='absolute top-0 left-0 py-2 px-8 bg-gradient-to-b from-black w-screen flex justify-between'>
      <img className='w-64 z-10' src={LOGO} alt='Netflix Logo' />
      {user && (
        <div className='flex justify-between items-center'>
          {/* Some error occcured here! */}
          {showGptSearch && (
            <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 z-10 mr-6 my-2"
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className='w-12 h-12' src={user?.photoURL} alt="logo" />
          <p className='text-white font-bold pl-4 hover:text-red-500 z-50' onClick={handleSignOut}>
            Sign Out
          </p>
        </div>
      )}
    </div>
  )
}

export default Header
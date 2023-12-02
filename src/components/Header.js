import useHeader from '../hooks/useHeader';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { FaPowerOff } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SiFastapi } from "react-icons/si";
import { opneaiLogo } from "../assets/openai.svg"
/**
 * Header component for Netflix GPT application.
 * @returns {JSX.Element} Header component.
 */
const Header = () => {
  const { user, showGptSearch, handleGptSearchClick, handleLanguageChange, handleSignOut } = useHeader();

  return (
    <div className=' fixed z-10 flex-col md:flex-row  px-5 py-4 md:py-0 bg-black/20 backdrop-blur-2xl w-screen flex justify-between'>
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
        <img className='w-36 md:w-64 z-10 mx-auto md:mx-0 mt-0 md:mt-2 pl-0 md:pl-4' src={LOGO} alt='WatchFlix Logo' />

        <div className="flex md:hidden items-center">
          {user && (
            <div className='flex justify-center items-center'>
              {showGptSearch ? (
                <AiFillHome className='text-white text-2xl md:hidden' onClick={handleGptSearchClick} />
              ) : (<svg xmlns="http://www.w3.org/2000/svg" onClick={handleGptSearchClick} width="25" height="24" fill="none" viewBox="0 0 25 24" id="openai"><g clipPath="url(#clip0_11_3174)"><path fill="url(#paint0_linear_11_3174)" fillRule="evenodd" d="M5.43469 5.61268C5.84321 3.27606 7.88286 1.5 10.3363 1.5C11.6029 1.5 12.7587 1.97281 13.6375 2.7526C13.5531 2.79614 13.4694 2.84187 13.3864 2.88981L7.69539 6.17552C7.54 6.26523 7.4446 6.43133 7.4454 6.61076L7.47815 13.9678L5.36012 12.7575V6.47619C5.36012 6.1813 5.38571 5.8928 5.43469 5.61268ZM20.684 5.57724C21.3173 6.67419 21.4857 7.91158 21.2498 9.06251C21.1699 9.01122 21.0884 8.96157 21.0054 8.91362L15.3144 5.62791C15.159 5.53819 14.9674 5.53862 14.8125 5.62903L8.45754 9.33589L8.44668 6.89647L13.8864 3.75583C14.1418 3.60836 14.4045 3.48626 14.6716 3.38861C16.8994 2.57417 19.4573 3.45253 20.684 5.57724ZM8.48071 14.5407L8.46268 10.4906L11.9611 8.44992L15.4776 10.4593L15.4956 14.5095L11.9972 16.5501L8.48071 14.5407ZM19.3462 11.5183L12.9585 7.86813L15.0657 6.63901L20.5054 9.77965C20.7608 9.92712 20.9979 10.0936 21.2161 10.2761C23.0353 11.7982 23.5535 14.4525 22.3268 16.5773C21.6935 17.6742 20.7061 18.4388 19.5914 18.8099C19.5959 18.7151 19.5982 18.6197 19.5982 18.5238V11.9524C19.5982 11.773 19.502 11.6073 19.3462 11.5183ZM16.5129 18.3892L16.4801 11.0322L18.5982 12.2425V18.5238C18.5982 18.8187 18.5726 19.1073 18.5236 19.3875C18.115 21.724 16.0754 23.5 13.622 23.5C12.3553 23.5 11.1995 23.0272 10.3208 22.2474C10.4052 22.2039 10.4888 22.1581 10.5719 22.1102L16.2629 18.8245C16.4183 18.7348 16.5137 18.5687 16.5129 18.3892ZM9.14551 19.3712L15.5008 15.6641L15.5116 18.1035L10.0719 21.2442C9.8165 21.3916 9.5538 21.5137 9.28667 21.6114C7.05887 22.4258 4.50102 21.5475 3.27432 19.4228C2.64106 18.3259 2.47258 17.0887 2.7084 15.9379C2.78822 15.9891 2.86961 16.0387 2.95256 16.0866L8.64358 19.3723C8.79897 19.462 8.99052 19.4616 9.14551 19.3712ZM4.61205 13.4817L10.9998 17.1319L8.8923 18.3612L3.45256 15.2206C3.1972 15.0731 2.96017 14.9067 2.74207 14.7243C0.922721 13.2022 0.404412 10.5477 1.63115 8.42297C2.26452 7.32593 3.25203 6.56132 4.36685 6.19021C4.36238 6.285 4.36012 6.38035 4.36012 6.47619V13.0476C4.36012 13.227 4.45626 13.3927 4.61205 13.4817Z" clipRule="evenodd"></path></g><defs><linearGradient id="paint0_linear_11_3174" x1=".964" x2="22.994" y1="12.5" y2="12.5" gradientUnits="userSpaceOnUse"><stop stopColor="#ED6D6B"></stop><stop offset="1" stopColor="#F0B076"></stop></linearGradient><clipPath id="clip0_11_3174"><rect width="24" height="24" fill="#fff" transform="translate(.464)"></rect></clipPath></defs></svg>)}

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
            <p className="text-white font-bold md:pl-4 hover:text-red-500 z-50 text-sm md:text-md cursor-pointer" onClick={handleSignOut}>
              Sign Out
            </p>
          </div>

          
        </div>
      )}
    </div>
  )
}

export default Header
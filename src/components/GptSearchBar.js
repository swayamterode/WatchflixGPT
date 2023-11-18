import lang from "../utils/languageConstants"
import useGptSearch from "../hooks/useGptSearchBar";
/**
 * A search bar component that allows users to search for movies, TV shows and more.
 * @returns {JSX.Element} The GptSearchBar component
 */
/**
 * GptSearchBar component.
 * 
 * @returns {JSX.Element} The GptSearchBar component.
 */
/**
 * GptSearchBar component.
 * 
 * @returns {JSX.Element} The GptSearchBar component.
 */
const GptSearchBar = () => {
  const { searchText, handleGptSearchClick, langKey } = useGptSearch(); // Custom hook to handle GPT search bar functionality.
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 mt-[20%] md:mt-[10%] text-xlmd:text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            {/* Search for your favorite movies, TV shows and more. */}
            {lang[langKey].gptSearchHeading}
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="mb-2 text-sm font-medium sr-only text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input ref={searchText} type="search" className="block w-full p-4 ps-10 text-sm  border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder={lang[langKey].gptSearchPlaceholder} required />
              <button className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-red-600 hover:bg-red-700 focus:ring-red-800"
                onClick={handleGptSearchClick}>
                {lang[langKey].search}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GptSearchBar
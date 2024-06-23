/* eslint-disable prettier/prettier */
import { IoMdSearch } from 'react-icons/io'


const SearchBar: React.FC = () => {
  return (
    <div className="w-full h-7 rounded-full flex justify-around items-center bg-[#222222] opacity-50 gap-2 px-3">
      <input
        type="text"
        className="outline-none w-full h-full bg-transparent text-white font-semibold text-sm px-2"
        placeholder="Search or start a new chat..."
      />
      <span className="w-6 h-6 text-lg flex justify-center items-center text-white">
        <IoMdSearch />
      </span>
    </div>
  )
}

export default SearchBar

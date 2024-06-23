/* eslint-disable prettier/prettier */
import ChatMenu from './Middle/ChatMenu'
import Messages from './Middle/Messages'
import PinnedChat from './Middle/PinnedChat'
import SearchBar from './Middle/SearchBar'
const Middle: React.FC = () => {
  return (
    <div className="w-[50vh] h-[95vh] bg-[#404040] rounded-xl flex flex-col justify-start px-5 py-6">
      {/* //Search component  */}
      <SearchBar />
      {/* // ChatMenu component */}
      <ChatMenu />

      <PinnedChat/>

      <Messages/>


    </div>
  )
}

export default Middle

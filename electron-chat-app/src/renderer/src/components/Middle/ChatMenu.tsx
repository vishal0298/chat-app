/* eslint-disable prettier/prettier */
import { useState } from 'react'

const ChatMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('allChats')

  const handleItemClick = (item: string): void => {
    setSelectedItem(item === selectedItem ? selectedItem : item)
    console.log(typeof item)
  }

  const getBgColor = (item: string): string =>
    item === selectedItem ? 'bg-[#222222] font-bold' : 'bg-transparent font-normal'

  return (
    <div className="w-[250px] mx-auto h-[30px] rounded-full text-center flex justify-evenly text-white gap-3 items-center bg-[#000000] opacity-100 mt-5 px-1">
      <div
        onClick={(): void => handleItemClick('allChats')}
        className={`text-xs cursor-pointer w-20 h-6 rounded-full flex justify-center items-center bg-[#222222] bg-opacity-80 ${getBgColor(
          'allChats'
        )}`}
      >
        All Chats
      </div>
      <div
        onClick={(): void => handleItemClick('groups')}
        className={`text-xs cursor-pointer w-20 h-6 rounded-full flex justify-center items-center bg-[#222222] bg-opacity-80 ${getBgColor(
          'groups'
        )}`}
      >
        Groups
      </div>
      <div
        onClick={(): void => handleItemClick('contacts')}
        className={`text-xs cursor-pointer w-20 h-6 rounded-full flex justify-center items-center bg-[#222222] bg-opacity-80 ${getBgColor(
          'contacts'
        )}`}
      >
        Contacts
      </div>
    </div>
  )
}

export default ChatMenu

/* eslint-disable prettier/prettier */
import { useState } from 'react'
import {
    IoHome,
  IoHomeOutline,
  IoChatbubbleEllipsesSharp,
  IoChatbubbleEllipsesOutline,
  IoNotifications,
  IoNotificationsOutline,
  IoSettings,
  IoSettingsOutline,
  IoLogOutOutline
} from 'react-icons/io5'

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('chat')

  const handleItemClick = (item: string): void => {
    setSelectedItem(item === selectedItem ? selectedItem : item)
    console.log(typeof item)
  }

  const getBgColor = (item: string): string =>
    item === selectedItem ? 'bg-[#222222]' : 'bg-transparent'
  return (
    <div className="w-[70px] h-[95vh] bg-[#404040] rounded-xl flex flex-col justify-start items-center p-3">
      <div className="w-11 h-11 rounded-full bg-[#222222] opacity-80 mt-1"></div>
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-evenly items-center mt-12 gap-8 p-2">
          <span
            onClick={(): void => handleItemClick('home')}
            className={`w-10 h-10 rounded-xl opacity-80 text-lg drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center text-white ${getBgColor(
              'home'
            )}`}
          >
            {
                selectedItem === 'home' ? <IoHome />:<IoHomeOutline />
            }
            
          </span>
          <span
            onClick={(): void => handleItemClick('chat')}
            className={`w-10 h-10 rounded-xl opacity-80 text-lg drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center text-white ${getBgColor(
              'chat'
            )}`}
          >
            {
            selectedItem === 'chat'?
            <IoChatbubbleEllipsesSharp />
            :<IoChatbubbleEllipsesOutline />
          }
          </span>

          <span
            onClick={(): void => handleItemClick('notifications')}
            className={`w-10 h-10 rounded-xl opacity-80 text-lg drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center text-white ${getBgColor(
              'notifications'
            )}`}
          >{ selectedItem === 'notifications'
            ?<IoNotifications />
            :<IoNotificationsOutline />}
          </span>

          <span
            onClick={(): void => handleItemClick('settings')}
            className={`w-10 h-10 rounded-xl opacity-80 text-lg drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center text-white ${getBgColor(
              'settings'
            )}`}
          >
            {
                selectedItem === 'settings'
                ?<IoSettings />
                :<IoSettingsOutline />
            }
          </span>
        </div>
        <span className="w-6 h-6 text-lg flex flex-col justify-end items-center my-5 text-white">
          <IoLogOutOutline />
        </span>
      </div>
    </div>
  )
}

export default Sidebar

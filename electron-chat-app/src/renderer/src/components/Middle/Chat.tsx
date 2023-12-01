/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

const Chat: React.FC = () => {
  const [isGroup, setIsGroup] = useState<boolean>(true)

  return (
    <div className="w-full h-16 text-white mb-3 flex justify-start items-center gap-2 rounded-lg bg-[#222222] bg-opacity-80 p-3">
      {isGroup ? (
        <div className="w-16 h-10 rounded-full bg-[#222222]"></div>
      ) : (
        <div className="w-16 h-16 relative px-3">
          <div className="w-6 h-6 rounded-full z-10 bg-[#000000] bg-opacity-80 border-2 border-[#222222] border-opacity-60 absolute top-3"></div>
          <div className="w-6 h-6 rounded-full z-30 bg-[#000000] bg-opacity-80 border-2 border-[#222222] border-opacity-60 absolute top-6 left-5"></div>
          <div className="w-6 h-6 rounded-full z-20 bg-[#000000] bg-opacity-80 border-2 border-[#222222] border-opacity-60 absolute top-6 left-1"></div>
        </div>
      )}

      <div className='w-full flex flex-col justify-start p-2'>
        <div className='text-sm w-full font-normal'>Prescott MacCaffery</div>
        <div className='text-xs w-full font-light truncate'>These exciting concepts seem...</div>
      </div>

      <div className='w-20 h-16 flex flex-col justify-center gap-1 mx-auto '>
        <div className='text-xs w-full font-light truncate'>5h ago</div>
        <div className='w-5 h-5 text-xs rounded-full bg-[#000000] opacity-70 flex justify-center items-center'> 5 </div>
      </div>

    </div>
  )
}
export default Chat

import MainChats from './Main/MainChats'
import Arrow from './Main/SVG/Arrow'
import Calling from './Main/SVG/Calling'
import Like from './Main/SVG/Like'
import Search from './Main/SVG/Search'
import Video from './Main/SVG/Video'

const Main: React.FC = () => {
  return (
    <div className="w-[100%] h-[95vh] bg-[#404040] rounded-xl flex flex-col justify-start px-5 py-6">
      <div className="w-full flex justify-between items-center p-2">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-lg bg-[#222222] opa"></div>

          <div className="text-lg text-white font-medium">
            <div className=" flex justify-start items-center gap-2">
              Jane Cooper <Like />
            </div>
            <div className="text-xs flex justify-start items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#128C7E]"></span> <label>Online</label>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <Calling />
          <Search />
          <Video />
          <Arrow />
        </div>
      </div>

      <MainChats />
    </div>
  )
}

export default Main

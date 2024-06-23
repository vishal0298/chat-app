import Sidebar from './components/Sidebar'
import Middle from './components/Middle'
import Main from './components/MainSection'

function App(): JSX.Element {
  return (
    <div className="w-[100%] min-h-[100vh] flex gap-5  bg-[#222222] p-5">
      <Sidebar />
      <Middle />
      <Main />
    </div>
  )
}

export default App

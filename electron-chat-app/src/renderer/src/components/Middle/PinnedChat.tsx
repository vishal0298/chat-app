import Chat from './Chat'

const PinnedChat: React.FC = () => {
  return (
    <>
      <h3 className="text-sm text-white font-semibold my-5">PINNED</h3>
      <Chat />
      <Chat />
      <Chat />
    </>
  )
}
export default PinnedChat

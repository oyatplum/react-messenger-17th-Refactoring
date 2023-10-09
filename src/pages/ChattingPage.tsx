import Header from '../component/chatting/header';
import ChattingContent from '../component/chatting/chattingContent';
import InputChat from '../component/chatting/inputChat';
import { useLocation } from 'react-router-dom';

const ChattingPage = () => {
  console.log('ChattingPage');
  const { state } = useLocation();

  return (
    <>
      <Header chattingRoomId={state} />
      <ChattingContent chattingRoomId={state} />
      <InputChat chattingRoomId={state} />
    </>
  );
};

export default ChattingPage;

import Header from '../chatting/header';
import ChattingContent from '../chatting/chattingContent';
import InputChat from '../chatting/InputChat';
import messageList from './../json/message.json';

const ChattingRoomPage = () => {
  return (
    <>
      <Header />
      <ChattingContent
        addText={messageList[0].message[0].addText} //여기도 이렇게 하면 안 되겠지
        userNum={messageList[0].message[0].userNum}
        date={messageList[0].message[0].date}
      />
      <InputChat />
    </>
  );
};

export default ChattingRoomPage;

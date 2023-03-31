import React from 'react';
import Header from '../chatting/header';
import ChattingContent from '../chatting/chattingContent';
import InputChat from '../chatting/InputChat';
import messageList from './../json/message.json';

const ChattingRoomPage = () => {
  return (
    <>
      <Header />
      <ChattingContent
        addText={messageList[0].message[0].addText}
        userNum={messageList[0].message[0].userNum}
      />
      <InputChat />
    </>
  );
};

export default ChattingRoomPage;

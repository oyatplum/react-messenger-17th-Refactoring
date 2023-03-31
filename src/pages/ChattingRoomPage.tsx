import React from 'react';
import Header from '../chatting/header';
import ChattingContent from '../chatting/chattingContent';
import InputChat from '../chatting/InputChat';

const ChattingRoomPage = () => {
  return (
    <>
      <Header />
      <ChattingContent />
      <InputChat />
    </>
  );
};

export default ChattingRoomPage;

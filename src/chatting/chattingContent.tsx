import React from 'react';
import styled from 'styled-components';
import messageInfo from './../json/message.json';
import Talk from './../component/Talk/talk';
import { ChatInfo } from './../interface/interface';
import { useRecoilState } from 'recoil';
import { chatList } from './../atom/atom';

const ChattingContent = ({ addText, userNum }: ChatInfo) => {
  const [chattingList, setChattingList] = useRecoilState(chatList);
  return (
    <Chatting>
      {chattingList.map((chat, index) => (
        <Talk
          key={index}
          messageId={index}
          addText={chat.addText}
          userNum={chat.userNum}
        />
      ))}
    </Chatting>
  );
};

const Chatting = styled.div`
  background-color: rgb(205, 222, 241);
  height: 520px;
`;
export default ChattingContent;

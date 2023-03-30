import React from 'react';
import styled from 'styled-components';
import messageInfo from './../json/message.json';
import Talk from './../Talk/talk';
import { extendedMessageList } from '../atom/atom';

function chattingContent() {
  return (
    <Chatting>
      {extendedMessageList.message.map((chat, index) => (
        <Talk
          key={index}
          messageId={index} //와이라노
          addText={chat.addText}
          userNum={chat.userNum}
        />
      ))}
    </Chatting>
  );
}

const Chatting = styled.div`
  background-color: rgb(205, 222, 241);
  height: 520px;
`;
export default chattingContent;

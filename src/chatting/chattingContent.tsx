import React from 'react';
import styled from 'styled-components';
import messageInfo from './../json/message.json';
import Talk from './../Talk/talk';

function chattingContent() {
  return (
    <Chatting>
      {messageInfo[0].message.map((chat, index) => (
        <Talk
          key={index}
          messageId={index}
          isUser={chat.isUser}
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

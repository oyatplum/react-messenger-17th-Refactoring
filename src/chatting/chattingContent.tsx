import styled from 'styled-components';
import Talk from './../component/Talk/talk';
import { ChatInfo, UserInfo } from './../interface/interface';
import { useRecoilState } from 'recoil';
import { chatList } from './../atom/atom';
import { useRef, useEffect } from 'react';

const ChattingContent = ({ addText, userNum }: ChatInfo) => {
  //이게 아닌데...
  const [chattingList, setChattingList] = useRecoilState(chatList);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollBottom();
  }, [chattingList]);

  return (
    <Chatting ref={scrollRef}>
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
  overflow: auto;

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #bcbcbc;
  }
`;
export default ChattingContent;

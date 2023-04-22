import styled from 'styled-components';
import Talk from './talk';
import { ChatInfo, ChattingRoom } from './../../interface/interface';
import { useRecoilState } from 'recoil';
import { chatList } from './../../atom/atom';
import { useRef, useEffect } from 'react';

const ChattingContent = ({ chattingRoomId }: ChattingRoom) => {
  //이게 아닌데...
  const [chattingList, setChattingList] = useRecoilState(chatList); //얘가 문제다 문제

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollBottom();
  }, [chattingList[chattingRoomId]]);

  return (
    <Chatting ref={scrollRef}>
      {chattingList[chattingRoomId].message.map((chat, index) => (
        <Talk key={index} messageId={index} chattingRoomId={chattingRoomId} />
      ))}
    </Chatting>
  );
};

const Chatting = styled.div`
  background-color: rgb(191 214 232);
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
    background-color: hsla(360, 13%, 13%, 0.69);
  }
`;
export default ChattingContent;

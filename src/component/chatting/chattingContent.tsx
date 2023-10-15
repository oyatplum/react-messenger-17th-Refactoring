import styled from 'styled-components';
import Talk from './talk';
import { ChattingRoom } from '../../assets/interface/interface';
import { useRecoilValue } from 'recoil';
import { chatList } from '../../assets/atom/atom';
import { useRef, useEffect } from 'react';

const ChattingContent = ({ chattingRoomId }: ChattingRoom) => {
  console.log('ChattingContent');
  const chattingList = useRecoilValue(chatList);

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
      <Talk chattingRoomId={chattingRoomId} />
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

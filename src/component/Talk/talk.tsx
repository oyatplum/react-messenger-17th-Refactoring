import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import messageInfo from './../../json/message.json';
import styled from 'styled-components';
import { MessageInfo } from '../../interface/interface';
import { selectedUser, chatList } from '../../atom/atom';

const Talk = ({ messageId }: MessageInfo) => {
  const selected = useRecoilValue(selectedUser);
  const [chattingList, setChattingList] = useRecoilState(chatList);
  return (
    <>
      {selected === chattingList[messageId].userNum ? (
        //messageinfo로 접근이 아니지!!chatList로 해야할 것 같은데
        //와 이게 되네?
        <Chat>
          <NowUser>{chattingList[messageId].addText} </NowUser>
        </Chat>
      ) : (
        <Chat>
          <CounterPart>{chattingList[messageId].addText}</CounterPart>
        </Chat>
      )}
    </>
  );
};

const Chat = styled.div`
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  word-break: break-all;
  border-radius: 7px;
  display: flex;
  font-size: 22px;
`;
const NowUser = styled.div`
  max-width: 10rem;
  width: auto;
  margin-left: auto;
  margin-right: 0.5rem;
  background-color: white;
  border-radius: 7px;
`;

const CounterPart = styled.div`
  max-width: 10rem;
  margin-left: 0.5rem;
  width: auto;
  background-color: white;
  border-radius: 7px;
`;

export default Talk;

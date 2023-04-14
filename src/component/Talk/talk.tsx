import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import messageInfo from './../../json/message.json';
import styled from 'styled-components';
import { MessageInfo, UserInfo } from '../../interface/interface';
import { selectedUser, chatList, userNameInfo } from '../../atom/atom';
import userList from '../../json/users.json';

const Talk = ({ messageId, userNum }: MessageInfo) => {
  const selected = useRecoilValue(selectedUser);
  const [chattingList, setChattingList] = useRecoilState(chatList);
  const [usersName, setUsersName] = useRecoilState(userNameInfo);

  // const chatTime = () => {
  //   let now = new Date();
  //   let hours = now.getHours();
  //   let minutes = now.getMinutes();

  //   return hours + ':' + minutes;
  // };

  return (
    <>
      {selected === chattingList[messageId].userNum ? (
        //messageinfo로 접근이 아니지!!chatList로 해야할 것 같은데
        //와 이게 되네?
        <Chat>
          <NowUser>{chattingList[messageId].addText} </NowUser>
          {/* <Time>{chatTime()}</Time> */}
        </Chat>
      ) : (
        <Chat>
          <PartnerImage src={`/images/${userNum}.jpg`} />
          <Content>
            <PartnerName>
              {
                usersName[userNum].userName
                //usersName말고 그냥 userList해도 되는데.....머징?merge?푸하하쿠림ㅃ
              }
            </PartnerName>
            <CounterPart>{chattingList[messageId].addText}</CounterPart>
          </Content>
        </Chat>
      )}
    </>
  );
};

// const Time = styled.div``;
const PartnerImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.2rem;
  border-radius: 0.8rem;
`;
const PartnerName = styled.div`
  font-size: 0.7rem;
  padding: 0.2rem 0 0.3rem 0.5rem;
`;
const Content = styled.div`
  display: block;
`;
const Chat = styled.div`
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  word-break: break-all;
  border-radius: 7px;
  display: flex;
`;
const NowUser = styled.div`
  max-width: 10rem;
  width: auto;
  margin-left: auto;
  margin-right: 0.5rem;
  background-color: white;
  border-radius: 7px;
  font-size: 16px;
  padding: 6px;
  padding-top: 8px;
`;

const CounterPart = styled.div`
  max-width: 10rem;
  margin-left: 0.5rem;
  width: auto;
  background-color: white;
  border-radius: 7px;
  font-size: 16px;
  padding: 6px;
  padding-top: 8px;
`;

export default Talk;

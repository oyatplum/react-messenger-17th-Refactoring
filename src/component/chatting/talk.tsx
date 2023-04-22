import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import messageInfo from './../../json/message.json';
import styled from 'styled-components';
import {
  MessageInfo,
  UserInfo,
  ChattingRoom,
  ChatInfo,
} from '../../interface/interface';
import { selectedUser, chatList, userNameInfo } from '../../atom/atom';
import userList from '../../json/users.json';

const Talk = ({ chattingRoomId, messageId }: ChattingRoom) =>
  // { messageId }: MessageInfo,
  {
    //date 생성하기...
    const selected = useRecoilValue(selectedUser);
    const [chattingList, setChattingList] = useRecoilState(chatList);
    const [usersName, setUsersName] = useRecoilState(userNameInfo);

    const chatTime = (time: string) => {
      let now = new Date(time);
      //console.log(now);
      let hours = now.getHours();
      let minutes = now.getMinutes(); //여기서 작업을 더 해준 다음에

      let hoursSetting = hours < 12 ? `오전 ${hours}` : `오후 ${hours - 12}`;
      const minutesSetting: string = String(minutes).padStart(2, '0');

      return hoursSetting + ':' + minutesSetting;
    };

    return (
      <>
        {selected ===
        chattingList[chattingRoomId].message[messageId].userNum ? (
          //messageinfo로 접근이 아니지!!chatList로 해야할 것 같은데
          //와 이게 되네?
          <Chat>
            {
              <Time>
                {chatTime(chattingList[chattingRoomId].message[messageId].date)}
              </Time> //여기서 date를 넣어주면 되겠는데?
            }
            <NowUser>
              {chattingList[chattingRoomId].message[messageId].addText}{' '}
            </NowUser>
          </Chat>
        ) : (
          <Chat>
            <PartnerImage
              src={`/images/${chattingList[chattingRoomId].message[messageId].userNum}.jpg`}
            />
            <Contents>
              <PartnerName>
                {
                  userList[
                    chattingList[chattingRoomId].message[messageId].userNum
                  ].userName
                  //usersName말고 그냥 userList해도 되는데.....머징?merge?푸하하쿠림ㅃ
                }
              </PartnerName>
              <Content>
                <CounterPart>
                  {chattingList[chattingRoomId].message[messageId].addText}
                </CounterPart>
                {
                  <Time>
                    {chatTime(
                      chattingList[chattingRoomId].message[messageId].date
                    )}
                  </Time> //여기서 date를 넣어주면 되겠는데?
                }
              </Content>
            </Contents>
          </Chat>
        )}
      </>
    );
  };

const Time = styled.div`
  font-size: 0.5rem;
  margin-top: 1.2rem;
  padding: 0.2rem;
  margin-left: auto;
`;
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
  display: flex;
`;
const Contents = styled.div`
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
  margin-right: 0.2rem;
  background-color: rgb(252, 243, 52);
  border-radius: 7px;
  font-size: 15px;
  padding: 6px;
  padding-top: 11px;
`;

const CounterPart = styled.div`
  max-width: 10rem;
  margin-left: 0.5rem;
  width: auto;
  background-color: white;
  border-radius: 7px;
  font-size: 15px;
  padding: 6px;
  padding-top: 11px;
`;

export default Talk;

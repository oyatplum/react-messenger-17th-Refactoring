import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ChattingRoom } from '../../interface/interface';
import { selectedUser, chatList } from '../../atom/atom';
import userList from '../../json/users.json';

const Talk = ({ chattingRoomId, messageId }: ChattingRoom) => {
  const selected = useRecoilValue(selectedUser);
  const chattingList = useRecoilValue(chatList);

  const chatTime = (time: string) => {
    let now = new Date(time);

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let hoursSetting = hours < 12 ? `오전 ${hours}` : `오후 ${hours - 12}`;
    const minutesSetting: string = String(minutes).padStart(2, '0');

    return hoursSetting + ':' + minutesSetting;
  };

  return (
    <>
      {selected === chattingList[chattingRoomId].message[messageId].userNum ? (
        <Chat>
          {
            <Time>
              {chatTime(chattingList[chattingRoomId].message[messageId].date)}
            </Time>
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
                </Time>
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
  margin-top: auto;
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
  font-size: 14px;
  padding: 6px;
  padding-top: 9px;
`;

const CounterPart = styled.div`
  max-width: 10rem;
  margin-left: 0.5rem;
  width: auto;
  background-color: white;
  border-radius: 7px;
  font-size: 14px;
  padding: 6px;
  padding-top: 9px;
`;

export default Talk;

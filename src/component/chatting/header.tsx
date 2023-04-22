import styled from 'styled-components';
import ToggleUser from './toggleUser';
import userList from './../../json/users.json';
import { ChatInfo, ChattingRoom } from './../../interface/interface';
import { useNavigate } from 'react-router-dom';

const Header = ({ chattingRoomId }: ChattingRoom) => {
  const navigate = useNavigate();
  return (
    <Head>
      <ToggleUser
        userId={userList[0].userId}
        userName={userList[0].userName}
        //userNum? 넣을까
      />
      {
        <ToggleUser
          userId={userList[chattingRoomId].userId}
          userName={userList[chattingRoomId].userName} //여기는 채팅방 사람에 따라 바껴야 함
        />
      }
      <Button onClick={() => navigate('/chattingRoom')}>X</Button>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  background-color: rgb(191 214 232);
  padding-bottom: 3px;
`;
const Button = styled.button`
  border: none;
  background: none;
  font-size: 0.9rem;
  margin: 0 0 2.5rem 3.8rem;
  color: #9a9a9a;
  :hover {
    color: rgb(69 68 68);
    font-size: 1rem;
  }
`;

export default Header;

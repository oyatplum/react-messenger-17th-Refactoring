import styled from 'styled-components';
import ToggleUser from './../component/user/ToggleUser';
import userList from './../json/users.json';

const Header = () => {
  return (
    <Head>
      <Button>back</Button>
      <ToggleUser
        userId={userList[0].userId}
        userName={userList[0].userName}
        //userNum? 넣을까
      />
      {
        <ToggleUser
          userId={userList[1].userId}
          userName={userList[1].userName} //여기는 채팅방 사람에 따라 바껴야 함
        />
      }
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  background: rgb(205, 222, 241);
  border-radius: 20px;
  font-size: 15px;
  height: 1.5rem;
  margin-left: 10px;
`;

export default Header;

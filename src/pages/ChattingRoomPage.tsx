import styled from 'styled-components';
import userList from '../json/users.json';
import { useNavigate } from 'react-router-dom';
import { selectedUser } from '../atom/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const ChattingRoomPage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useRecoilState(selectedUser);
  setSelected(0);

  return (
    <Container>
      <Chatting>채팅</Chatting>
      {userList.map((user, index) => (
        <>
          {index == 0 ? (
            <></>
          ) : (
            <User onClick={() => navigate('/chatting', { state: user.userId })}>
              <PartImage src={`/images/${index}.jpg`} />
              <div className="text">
                <PartName>{user.userName}</PartName>
                <Message>{user.userMessage}</Message>
              </div>
            </User>
          )}
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 270px;
`;
const Chatting = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0 1rem 1rem;
`;
const User = styled.div`
  display: flex;
  align-items: center;

  :hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  .text {
    display: block;
    margin: 1.1rem 0 0 0.5rem;
    height: 3rem;
  }
`;
const Message = styled.div`
  font-size: 0.75rem;
  padding: 0.2rem 0 0 0.1rem;
  color: #4d4d4d;
`;
const PartImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 1rem;
`;
const PartName = styled.div`
  font-size: 0.85rem;
`;

export default ChattingRoomPage;

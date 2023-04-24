import styled from 'styled-components';
import userList from '../../json/users.json';
import { useNavigate } from 'react-router-dom';

const NotSearch = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {userList.map((user, index) => (
        <>
          {index == 0 ? (
            <>
              <User>
                <MyImage src={`/images/${user.userId}.jpg`} />
                <div className="text">
                  <MyName>{user.userName}</MyName>
                  <Message>{user.userMessage}</Message>
                </div>
              </User>
              <Line>
                <div>{'친구(6)'}</div>
              </Line>
            </>
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

  div {
    display: flex;
  }
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
const MyImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 1.2rem;
`;
const MyName = styled.div`
  font-size: 1rem;
`;
const Message = styled.div`
  font-size: 0.75rem;
  padding: 0.2rem 0 0 0.1rem;
  color: #4d4d4d;
`;
const Line = styled.div`
  border-top: 1px solid #cccccc;
  margin: 0.2rem 1rem 0 1rem;

  div {
    font-size: 0.7rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
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
export default NotSearch;

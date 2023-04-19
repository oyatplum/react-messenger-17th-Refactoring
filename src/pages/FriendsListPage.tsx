import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import userList from '../json/users.json';

const FriendsListPage = () => {
  return (
    <Container>
      <Friends>친구</Friends>
      {userList.map((user, index) => (
        <>
          {index == 0 ? (
            <>
              <User>
                <MyImage src={`/images/${user.userId}.jpg`} />
                <MyName>{user.userName}</MyName>
              </User>
              <Line>
                <div>{'친구(6)'}</div>
              </Line>
            </>
          ) : (
            <User>
              <PartImage src={`/images/${index}.jpg`} />
              <PartName>{user.userName}</PartName>
            </User>
          )}
        </>
      ))}
    </Container>
  );
};

const Friends = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0 1rem 1rem;
`;
const Container = styled.div`
  width: 270px;
`;

const User = styled.div`
  display: flex;
  :hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;
const MyImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 3rem;
  width: 3rem;
  border-radius: 1.2rem;
`;
const MyName = styled.div`
  line-height: 4rem;
  text-align: center;
  margin-left: 0.5rem;
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
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 1rem;
`;
const PartName = styled.div`
  line-height: 3.5rem;
  text-align: center;
  margin-left: 0.5rem;
`;
export default FriendsListPage;

import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import userList from '../json/users.json';
import FriendsList from '../component/friends/friendsList';
import MyProfile from '../component/friends/myProfile';

const FriendsListPage = () => {
  return (
    <H>
      <Friends>친구</Friends>
      {userList.map((user, index) => (
        <>
          {index == 0 ? (
            <MyProfile key={index} userName={user.userName} userId={index} />
          ) : (
            <FriendsList key={index} userName={user.userName} userId={index} />
          )}
        </>
      ))}
    </H>
  );
};

const Friends = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0 1rem 1rem;
`;
const H = styled.div`
  width: 270px;
`;
export default FriendsListPage;

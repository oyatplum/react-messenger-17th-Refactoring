import React from 'react';
import TargetUser from './targetUser';
import { UserInfo } from './../../interface/interface';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FriendsList = ({ userName, userId }: UserInfo) => {
  return (
    <H>
      {/* <Link
        to={`/chattingRoom/${userId}`} //그니까.. 이게 여기서가 아니라 채팅룸 페이지에서 해야하는.. 거잖아?
      > */}
      {/* <TargetUser userId={userId} userName={userName} /> */}
      <Image src={`/images/${userId}.jpg`} />
      <Name>{userName}</Name>
      {/* </Link> */}
    </H>
  );
};
const H = styled.div`
  display: flex;
  :hover {
    background-color: #e6e6e6;
  }
`;
const Image = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 1rem;
`;
const Name = styled.div`
  line-height: 3.5rem;
  text-align: center;
  margin-left: 0.5rem;
`;

export default FriendsList;

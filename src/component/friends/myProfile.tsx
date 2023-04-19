import React from 'react';
import TargetUser from './targetUser';
import { UserInfo } from './../../interface/interface';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyProfile = ({ userName, userId }: UserInfo) => {
  return (
    <>
      <H>
        <Image src={`/images/${userId}.jpg`} />
        <Name>{userName}</Name>
      </H>
      <Line>
        <div>{'친구(6)'}</div>
      </Line>
    </>
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
  height: 3rem;
  width: 3rem;
  border-radius: 1.2rem;
`;
const Name = styled.div`
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

export default MyProfile;

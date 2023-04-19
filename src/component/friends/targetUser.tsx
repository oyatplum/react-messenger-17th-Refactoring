import React from 'react';
import styled from 'styled-components';
import { UserInfo } from './../../interface/interface';

const TargetUser = ({ userName, userId }: UserInfo) => {
  return (
    <H>
      <Image src={`/images/${userId}.jpg`} />
      <Name>{userName}</Name>
    </H>
  );
};
const H = styled.div``;
const Image = styled.img``;
const Name = styled.div``;
const Message = styled.div``;
export default TargetUser;

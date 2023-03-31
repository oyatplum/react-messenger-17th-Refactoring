import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { UserInfo } from '../../interface/interface';
import { selectedUser } from '../../atom/atom';

function ToggleUser({ userId, userName }: UserInfo) {
  const [selectedId, setSelectedId] = useRecoilState(selectedUser);

  // const changeUser = () => {
  //   if (isUser) {
  //     setName('애옹');
  //   } else {
  //     setName('채형원');
  //   }
  // };

  return (
    <>
      {selectedId == userId ? (
        <>
          <NowUser>{userName}</NowUser>
        </>
      ) : (
        <CounterPart onClick={() => setSelectedId(userId)}>
          {userName}
        </CounterPart>
      )}
    </>
  );
}

const NowUser = styled.div`
  font-size: 30px;
  margin-left: 15%;
`;
const CounterPart = styled.div`
  font-size: 20px;
  margin-left: 15%;
  opacity: 0.5;
`;

export default ToggleUser;

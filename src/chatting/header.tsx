import React from 'react';
import styled from 'styled-components';
import ToggleUser from './../component/user/ToggleUser';
import userList from './../json/users.json';

function header() {
  return (
    <Head>
      <Button>back</Button>
      <ToggleUser userId={userList[0].userId} userName={userList[0].userName} />
      <ToggleUser userId={userList[1].userId} userName={userList[1].userName} />
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  height: 60px;
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

export default header;

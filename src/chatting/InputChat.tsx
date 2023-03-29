import React from 'react';
import styled from 'styled-components';

function InputChat() {
  return (
    <Enter>
      <InputText />
      <EnterButton>전송</EnterButton>
    </Enter>
  );
}
const Enter = styled.form`
  backgorund-color: blue;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputText = styled.input`
  border: none;
  background-color: rgb(205, 222, 241);
  border-radius: 20px;
  height: 35px;
  font-size: 15px;
  width: 80%;
`;
const EnterButton = styled.button`
  border: none;
  background: rgb(205, 222, 241);
  border-radius: 20px;
  margin-left: 10px;
  font-size: 15px;
`;

export default InputChat;

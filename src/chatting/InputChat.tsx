import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import messageInfo from './../json/message.json';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userNumber } from '../atom/atom';
import { messageList } from '../atom/atom';
import { chatList } from '../atom/atom';
import { selectedUser } from '../atom/atom';
import { Message } from '../interface/interface2';

function InputChat() {
  const [text, setText] = useState<string>('');
  const [addUserNum, setAddUserNum] = useRecoilState(userNumber); // 비교하려는 usernum
  const [newChatList, setNewChatList] = useRecoilState(chatList);
  const [newMessageList, setNewMessageList] = useRecoilState(messageList); //최종 set할 거
  const [selectedId, setSelectedId] = useRecoilState(selectedUser); //비교하려는 selectedId >> userID랑 비교

  if (selectedId !== addUserNum) {
    setSelectedId(1);
  }

  const submitText = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text.trim()) {
      let newChat: Message = {
        userNum: selectedId,
        addText: text,
      };
      setText('');
      setNewChatList([...newChatList, newChat]);
      //setNewMessageList([...newMessageList, newChat]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Enter>
      <InputText onSubmit={() => submitText} />
      <EnterButton onChange={() => handleChange} value={text}>
        전송
      </EnterButton>
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

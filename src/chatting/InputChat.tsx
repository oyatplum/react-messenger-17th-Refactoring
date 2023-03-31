import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userNumber, chatList, selectedUser } from '../atom/atom';
import { ChatInfo } from '../interface/interface';

const InputChat = () => {
  const [text, setText] = useState<string>('');
  const [addUserNum, setAddUserNum] = useRecoilState(userNumber); // 비교하려는 usernum
  const [newChatList, setNewChatList] = useRecoilState(chatList);
  const [selectedId, setSelectedId] = useRecoilState(selectedUser); //비교하려는 selectedId >> userID랑 비교

  if (selectedId !== addUserNum) {
    setSelectedId(1);
  }

  const submitText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit?');
    if (text.trim()) {
      let newChat: ChatInfo = {
        userNum: selectedId,
        addText: text,
      };
      setText('');
      setNewChatList([...newChatList, newChat]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    setText(e.target.value);
  };

  return (
    <InputText onSubmit={() => submitText}>
      <InputForm onChange={handleChange} value={text} />
      <EnterButton>전송</EnterButton>
    </InputText>
  );
};

const InputForm = styled.input`
  border: none;
  background-color: rgb(205, 222, 241);
  border-radius: 20px;
  height: 35px;
  font-size: 15px;
  width: 70%;
`;
const EnterButton = styled.button`
  border: none;
  background: rgb(205, 222, 241);
  border-radius: 20px;
  margin-left: 15px;
  font-size: 15px;
`;
const InputText = styled.form`
  backgorund-color: blue;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default InputChat;

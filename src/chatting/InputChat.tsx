import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userNumber, chatList, selectedUser } from '../atom/atom';
import { ChatInfo } from '../interface/interface';

const InputChat = () => {
  const [text, setText] = useState<string>('');
  const [newChatList, setNewChatList] = useRecoilState(chatList);
  const [selectedId, setSelectedId] = useRecoilState(selectedUser); //비교하려는 selectedId >> userID랑 비교

  const submitText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      let newChat: ChatInfo = {
        userNum: selectedId,
        addText: text,
        date: String(new Date()), //몽미
      };
      setNewChatList([...newChatList, newChat]); //여기서 에러같은데.....
      setText('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <InputText onSubmit={submitText}>
      <InputForm onChange={handleChange} value={text} />
      <EnterButton>전송</EnterButton>
    </InputText>
  );
};

const InputForm = styled.input`
  border: none;
  background-color: hsla(360, 13%, 13%, 0.31);
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

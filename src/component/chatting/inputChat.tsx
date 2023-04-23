import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userNumber, chatList, selectedUser } from '../../atom/atom';
import { ChatInfo, ChattingRoom, ha } from '../../interface/interface';

const InputChat = ({ chattingRoomId }: ChattingRoom) => {
  const [text, setText] = useState<string>('');
  const [newChatList, setNewChatList] = useRecoilState(chatList);
  const [realChat, setRealChat] = useState(newChatList[chattingRoomId].message);
  const [selectedId, setSelectedId] = useRecoilState(selectedUser);

  let hahaha;

  const submitText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      let newChat: ChatInfo = {
        userNum: selectedId,
        addText: text,
        date: String(new Date()), //몽미
      };

      hahaha = realChat.concat(newChat);
      setRealChat(hahaha); //여기서 에러같음

      const oh = {
        ...newChatList[chattingRoomId],
        message: hahaha,
      };
      setNewChatList([
        ...newChatList.slice(0, chattingRoomId),
        oh,
        ...newChatList.slice(chattingRoomId + 1),
      ]);

      setText('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <InputText onSubmit={submitText}>
      <textarea onChange={handleChange} value={text} />
      <EnterButton>전송</EnterButton>
    </InputText>
  );
};

const EnterButton = styled.button`
  border: none;
  background-color: rgb(252 243 52);
  margin-left: 15px;
  font-size: 15px;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
  :hover {
    background-color: rgb(255 231 68);
  }
`;
const InputText = styled.form`
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  textarea {
    border: none;
    height: 95px;
    font-size: 15px;
    width: 75%;

    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: hsla(360, 13%, 13%, 0.69);
    }
  }
`;

export default InputChat;

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userNumber, chatList, selectedUser } from '../../atom/atom';
import { ChatInfo, ChattingRoom, ha } from '../../interface/interface';

const InputChat = ({ chattingRoomId }: ChattingRoom) => {
  const [text, setText] = useState<string>('');
  const [newChatList, setNewChatList] = useRecoilState(chatList);
  const [realChat, setRealChat] = useState(newChatList[chattingRoomId].message);
  const [selectedId, setSelectedId] = useRecoilState(selectedUser); //비교하려는 selectedId >> userID랑 비교

  let newChatInfo = [
    { chattingRoomId: 0, message: [] },
    { chattingRoomId: 1, message: [] },
    { chattingRoomId: 2, message: [] },
    { chattingRoomId: 3, message: [] },
    { chattingRoomId: 4, message: [] },
    { chattingRoomId: 5, message: [] },
    { chattingRoomId: 6, message: [] },
  ] as ha[];

  const submitText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      let newChat: ChatInfo = {
        userNum: selectedId,
        addText: text,
        date: String(new Date()), //몽미
      };
      console.log(realChat);
      setRealChat(realChat.concat(newChat)); //여기서 에러같음
      console.log(realChat); //왜냠 여기서 안 바뀜
      newChatInfo[chattingRoomId].message = realChat;
      setNewChatList(newChatInfo);
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

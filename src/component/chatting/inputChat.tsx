import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatList, selectedUser } from '../../assets/atom/atom';
import { ChatInfo, ChattingRoom } from '../../assets/interface/interface';

const InputChat = ({ chattingRoomId }: ChattingRoom) => {
  console.log('InputChat');
  const [text, setText] = useState<string>('');
  const [newChatList, setNewChatList] = useRecoilState(chatList);
  const [realChat, setRealChat] = useState(newChatList[chattingRoomId].message);
  const selectedId = useRecoilValue(selectedUser);

  let updateChat;

  const submitText = () => {
    if (text.trim()) {
      let newChat: ChatInfo = {
        userNum: selectedId,
        addText: text,
        date: String(new Date()),
      };

      updateChat = realChat.concat(newChat);
      setRealChat(updateChat);

      const finalChatList = {
        ...newChatList[chattingRoomId],
        message: updateChat,
      };

      setNewChatList([
        ...newChatList.slice(0, chattingRoomId),
        finalChatList,
        ...newChatList.slice(chattingRoomId + 1),
      ]);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    } else if (!e.shiftKey && e.key === 'Enter') {
      e?.preventDefault();
      submitText();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <InputText onSubmit={submitText}>
      <textarea
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={text}
      />
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
    cursor: pointer;
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
    resize: none;

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

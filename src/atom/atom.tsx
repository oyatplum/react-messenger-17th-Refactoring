import { atom } from 'recoil';
import messageInfo from './../json/message.json';
import userList from './../json/users.json';
import { ChatInfo, UserInfo } from '../interface/interface';
// import { ExtendedMessageInfo } from '../interface/interface';

export const selectedUser = atom<number>({
  key: 'selectedUser',
  default: 0,
});

// export const messageList = atom<ListInfo[]>({
//   key: 'messageInfo',
//   default: messageInfo[0].message, //엥... 이러면 chatinfo랑 다를게 뭐람
// });

// export const extendedMessageList = atom<ExtendedMessageInfo[]>({
//   key: 'extendedMessageList',
//   default: messageInfo.message[], //하,,,,
// });

export const userNumber = atom<number>({
  key: 'userNumber',
  default: 0,
});

export const chatList = atom<ChatInfo[]>({
  key: 'chatList',
  default: messageInfo[0].message, //여기도 채팅방에 따라 다르게 들어가야 함 chattingRoomId로 접근해야겠지?
});

export const userNameInfo = atom<UserInfo[]>({
  key: 'userNameInfo',
  default: userList,
});

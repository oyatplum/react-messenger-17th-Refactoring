import { atom } from 'recoil';
import messageInfo from './../json/message.json';
import { ChatInfo } from '../interface/interface';
// import { ExtendedMessageInfo } from '../interface/interface';

export const selectedUser = atom<number>({
  key: 'selectedUser',
  default: 0,
});

// export const messageList = atom<MessageInfo[]>({
//   key: 'messageInfo',
//   default: messageInfo, //엥...
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
  default: messageInfo[0].message,
});

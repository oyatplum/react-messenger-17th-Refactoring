import { atom } from 'recoil';
import messageInfo from './../json/message.json';
import { ListInfo } from '../interface/interface';
import { ChatInfo } from '../interface/interface';

export const selectedUser = atom<number>({
  key: 'selectedUser',
  default: 0,
});

export const messageList = atom<ListInfo[]>({
  key: 'messageInfo',
  default: messageInfo,
});

export const userNumber = atom<number>({
  key: 'userNumber',
  default: 0,
});

export const chatList = atom<ChatInfo[]>({
  key: 'chatList',
  default: messageInfo[0].message,
});

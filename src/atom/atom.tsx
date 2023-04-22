import { atom } from 'recoil';
import messageInfo from './../json/message.json';
import userList from './../json/users.json';
import { ha, UserInfo } from '../interface/interface';

export const selectedUser = atom<number>({
  key: 'selectedUser',
  default: 0,
});

export const userNumber = atom<number>({
  key: 'userNumber',
  default: 0,
});

export const chatList = atom<ha[]>({
  key: 'chatList',
  default: messageInfo, //여기도 채팅방에 따라 다르게 들어가야 함 chattingRoomId로 접근해야겠지? 어케하지
});

export const userNameInfo = atom<UserInfo[]>({
  //이건 왜 있냐
  key: 'userNameInfo',
  default: userList,
});

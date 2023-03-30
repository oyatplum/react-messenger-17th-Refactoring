import { Message } from './interface2';
export interface UserInfo {
  userId: number;
  userName: string;
}

export interface MessageInfo {
  chattingRoomId: number;
  message: Message[];
}
export interface ExtendedMessageInfo extends MessageInfo {
  messageId: number;
}
// export interface ListInfo {
//   chattingRoomId: number;
//   addText: string;
//   userNum: number;
//   message: Message[]; // message 가져오자
// }

export interface ChatInfo {
  addText: string;
  userNum: number;
}

export interface UserInfo {
  userId: number;
  userName: string;
}

export interface MessageInfo {
  addText: string;
  messageId: number;
  userNum: number;
  date: string;
}
// export interface ExtendedMessageInfo extends MessageInfo {
//   messageId: number;
// }
// export interface ListInfo {
//   //chattingRoomId: number;
//   addText: string;
//   userNum: number;
// }

export interface ChatInfo {
  addText: string;
  userNum: number;
  date: string;
}
// export interface Message {
//   //엥
//   addText: string;
//   userNum: number;
// }

export interface UserInfo {
  userId: number;
  userName: string;
}

export interface MessageInfo {
  addText: string;
  messageId: number;
}

export interface ChatInfo {
  addText: string;
  userNum: number;
  date: string;
}

export interface ChattingRoom {
  chattingRoomId: number;
  messageId: number;
}

export interface ha {
  chattingRoomId: number;
  message: ChatInfo[];
}

// export interface ChattingRoomInfo {
//  chattingRoomId: number;
// }

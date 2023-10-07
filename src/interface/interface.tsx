export interface UserInfo {
  readonly userId: number;
  readonly userName: string;
  userMessage: string;
}

export interface ChatInfo {
  addText: string;
  readonly userNum: number;
  date: string;
}

export interface ChattingRoom {
  chattingRoomId: number;
  messageId: number;
}

export interface Chat {
  readonly chattingRoomId: number;
  message: ChatInfo[];
}

export interface Last {
  getLastInfo: string[];
}

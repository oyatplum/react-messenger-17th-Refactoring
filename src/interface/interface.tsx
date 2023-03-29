export interface UserInfo {
  userId: number;
  userName: string;
  isUser: boolean;
}

export interface MessageInfo {
  isUser: boolean;
  addText: string;
  messageId: number;
  userNum: number;
}

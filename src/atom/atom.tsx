import { atom } from 'recoil';

export const selectedUser = atom<number>({
  key: 'selectedUser',
  default: 0,
});

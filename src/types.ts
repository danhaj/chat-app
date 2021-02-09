import { FirebaseTimestamp } from './services/firebase';

export type Message = {
  id: string;
  author: string;
  value: string;
  time: FirebaseTimestamp;
};

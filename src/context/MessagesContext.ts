import { createContext } from 'react';
import { Message } from '../types';

export const MessagesContext = createContext<Message[] | null>(null);

import { createContext } from 'react';
import { FirebaseUser } from '../services/firebase';

export const UserContext = createContext<FirebaseUser | null>(null);

import { createContext } from 'react';
import { firebaseUser } from '../services/firebase';

export const UserContext = createContext<firebaseUser | null>(null);

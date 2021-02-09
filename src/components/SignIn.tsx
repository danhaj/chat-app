import React, { ChangeEvent, FormEvent, useState } from 'react';
import { auth } from '../services/firebase';
import Input from './Input';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInSubmit = async (ev: FormEvent): Promise<void> => {
    ev.preventDefault();
    const res = await auth.signInWithEmailAndPassword(email, password);
  };

  const handleSignUpSubmit = (ev: FormEvent): void => {
    ev.preventDefault();
    auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <form className='grid grid-cols-1 md:w-1/3'>
      <Input
        type='email'
        label='E-mail'
        onChange={(ev: ChangeEvent<HTMLInputElement>): void =>
          setEmail(ev.target.value)
        }
      />
      <Input
        type='password'
        label='Password'
        onChange={(ev: ChangeEvent<HTMLInputElement>): void =>
          setPassword(ev.target.value)
        }
      />
      <Input type='submit' onClick={handleSignInSubmit} value='Sign in' />
      <Input type='submit' onClick={handleSignUpSubmit} value='Sign up' />
    </form>
  );
};

export default SignIn;

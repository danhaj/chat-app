import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/firebase';
import FormInput from './FormInput';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignInSubmit = async (ev: FormEvent): Promise<void> => {
    ev.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/chat');
    } catch (e) {
      alert(e.message);
    }
  };

  const handleSignUpSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <form className='grid grid-cols-1 md:w-1/3'>
      <FormInput
        type='email'
        label='E-mail'
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          setEmail(ev.target.value)
        }
      />
      <FormInput
        type='password'
        label='Password'
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          setPassword(ev.target.value)
        }
      />
      <FormInput type='submit' onClick={handleSignInSubmit} value='Sign in' />
      <FormInput type='submit' onClick={handleSignUpSubmit} value='Sign up' />
    </form>
  );
};

export default SignIn;

import React, { ChangeEventHandler, FormEventHandler } from 'react';

interface FormInputProps {
  type: string;
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClick?: FormEventHandler;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  label,
  value,
  onChange,
  onClick,
}) => {
  switch (type) {
    case 'email':
    case 'password':
      return (
        <label>
          <span className='text-gray-600'>{label}</span>
          <input
            type={type}
            className='block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-300 focus:ring-opacity-30'
            onChange={onChange}
          />
        </label>
      );
    case 'submit':
      return (
        <input
          type={type}
          value={value}
          className='block bg-blue-600 text-white rounded-md py-2 mt-3'
          onClick={onClick}
        />
      );
    default:
      return <input type={type} />;
  }
};

export default FormInput;

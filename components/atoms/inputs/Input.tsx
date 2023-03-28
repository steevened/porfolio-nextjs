import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: Props) => {
  return (
    <input
      {...props}
      className="w-full px-3 py-4 mt-1 mb-5 text-sm rounded-md bg-app-gray shadow-app-shadow focus:outline-none"
    />
  );
};

export default Input;

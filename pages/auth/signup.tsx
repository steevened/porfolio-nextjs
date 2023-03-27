import { ArrowLeftIcon, SecureBtn } from '@/components/svg/Svg';
import signUp from '@/lib/firebase/auth/signUp';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { EventHandler, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error, result } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push('/auth/login');
  };

  return (
    <div className="flex flex-col justify-center min-h-screen sm:py-12">
      <div className="p-10 mx-auto xs:p-0 md:w-full md:max-w-md">
        <h1 className="mb-5 text-2xl font-bold text-center">@Steevened</h1>
        <form
          onSubmit={handleSignup}
          className="w-full rounded-lg shadow-app-shadow bg-app-gray"
        >
          <div className="px-5 py-7">
            <label className="block pb-1 text-sm font-semibold ">Email</label>
            <input
              required
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-3 py-4 mt-1 mb-5 text-sm rounded-md bg-app-gray shadow-app-shadow focus:outline-none"
            />
            <label className="block pb-1 text-sm font-semibold ">
              Password
            </label>
            <input
              required
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-4 mt-1 mb-5 text-sm rounded-md bg-app-gray shadow-app-shadow focus:outline-none"
            />
            <Button
              fullWidth
              type="submit"
              variant="text"
              endIcon={<ArrowLeftIcon />}
              className="px-6 py-2 text-gray-400 border-0 rounded focus:outline-none hover:text-white hover:bg-black shadow-app-shadow"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="py-5 text-center">
          <Button
            onClick={() => router.back()}
            className="px-6 py-2 text-gray-400 border-0 rounded focus:outline-none hover:text-white hover:bg-black shadow-app-shadow"
          >
            Back to your app
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

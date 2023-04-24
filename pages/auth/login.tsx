import { ArrowLeftIcon, SecureBtn } from '@/components/svg/Svg';
// import { supabase } from '@/lib/supabase/supabase';
import { Button } from '@mui/material';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: User = {
      email,
      password,
    };

    // try {
    //   const response = await supabase.auth.signInWithPassword(data);
    //   if (response.error) throw response.error;
    //   const userID = response.data.user?.id;
    //   console.log(userID);
    //   setEmail('');
    //   setPassword('');
    //   router.push('/dashboard');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const user = useUser();

  // console.log(user);

  return (
    <div className="flex flex-col justify-center min-h-screen sm:py-12">
      <div className="p-10 mx-auto xs:p-0 md:w-full md:max-w-md">
        <h1 className="mb-5 text-2xl font-bold text-center">@Steevened</h1>
        <div className="w-full rounded-lg shadow-app-shadow bg-app-gray">
          <form onSubmit={handleLogin} className="px-5 pt-7">
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
              type="password"
              required
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-4 mt-1 mb-5 text-sm rounded-md bg-app-gray shadow-app-shadow focus:outline-none"
            />
            <Button
              fullWidth
              type="submit"
              variant="text"
              endIcon={<ArrowLeftIcon />}
              className="px-6 py-2 text-gray-400 border-0 rounded focus:outline-none hover:text-white hover:bg-black shadow-app-shadow"
            >
              Log-in
            </Button>
          </form>
          <div className="py-5">
            <div className="flex justify-center">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Button
                  className="px-6 py-2 mx-5 text-sm font-normal text-gray-400 rounded-md hover:text-white hover:bg-black"
                  startIcon={<SecureBtn />}
                >
                  Forgot Password
                </Button>
              </div>
            </div>
          </div>
        </div>
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

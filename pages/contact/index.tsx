import Head from 'next/head';
import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '@/components/layouts/Layout';

import { Button, TextField } from '@mui/material';
import { ContactIconOut, GithubLogo, LinkedinLogo } from '@/components/svg/Svg';

const inputLabelProps = {
  style: {
    color: 'white',
  },
};

const inputProps = {
  style: {
    // shadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
    color: 'white',
  },
};

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Steven Elias - Personal site</title>
        <meta
          name="description"
          content="Personal site of Steven Elias - Steevened"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Get in touch</h1>
        <div className="">
          <div className="bg-app-gray">
            <h3>Contact information</h3>
            <div>
              <div>
                <ContactIconOut />
                <span>
                  <a
                    href="mailto:
                  alvaradosteven315@gmail.com"
                  >
                    alvaradosteven315@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Contact;

{
  /* <main className="">
        <h1 className="mt-10 text-3xl font-bold text-center">Contact</h1>
        <div className="container flex mx-auto mt-10 border">
          <div className="flex-1 py-10 text-white bg-black shadow-app-shadow">
            <h2 className="text-3xl font-bold text-center">Get in touch</h2>
            <form>
              <TextField
                fullWidth
                color="secondary"
                size="small"
                label="Name"
                className="mt-5 rounded-[4px] bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow focus:shadow-none hover:shadow-none"
                autoComplete="email"
                inputProps={inputProps}
                InputLabelProps={inputLabelProps}
              />
              <TextField
                fullWidth
                color="secondary"
                size="small"
                label="Email"
                className="mt-5 rounded-[4px] bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow focus:shadow-none hover:shadow-none"
                autoComplete="email"
                inputProps={inputProps}
                InputLabelProps={inputLabelProps}
              />
              <TextField
                fullWidth
                color="secondary"
                size="small"
                label="Message"
                multiline
                rows={4}
                inputProps={inputProps}
                InputLabelProps={inputLabelProps}
                className="mt-5 rounded-[4px] bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow focus:shadow-none hover:shadow-none"
              />
              <Button className="inline-flex px-6 py-2 mt-5 text-white bg-app-gray shadow-app-shadow">
                Send
              </Button>
            </form>
          </div>
          <div className="flex-1">
            <div className="flex">
              <ContactIconOut />
              <p>alvaradosteven315@gmail.com</p>
            </div>
            <div className="">
              <a
                className="flex"
                target="_blank"
                href="https://github.com/steevened"
              >
                <GithubLogo />
                <p>@steevened</p>
              </a>
            </div>
            <div className="">
              <a
                className="flex"
                target="_blank"
                href="https://www.linkedin.com/in/steevened/"
              >
                <LinkedinLogo />
                <p>@steevened</p>
              </a>
            </div>
          </div>
        </div>
      </main> */
}

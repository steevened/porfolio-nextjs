import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactCard = () => {
  const form = useRef();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form as any}
      onSubmit={sendEmail}
      className="space-y-5 p-5 shadow-app-shadow-light dark:shadow-app-shadow bg-white dark:bg-app-gray w-full max-w-md mx-auto relative after:absolute after:inset-0 after:shadow-lg after:shadow-black/10 after:pointer-events-none rounded-md"
    >
      <Input
        type="text"
        variant="standard"
        label="Name"
        name="name"
        className="dark:text-blue-gray-300"
      />
      <Input
        type="email"
        label="Email"
        name="email"
        className="dark:text-blue-gray-300"
        variant="standard"
      />
      <Textarea
        label="Message"
        className="dark:text-blue-gray-300"
        variant="standard"
        name="message"
      />
      <Button
        fullWidth
        type="submit"
        variant="text"
        // color={theme === 'dark' ? 'blue-gray' : 'light-blue'}
        className="rounded-md  bg-gradient-to-r from-gradient-teal to-gradient-purple text-white"
      >
        Submit
      </Button>
    </form>
  );
};

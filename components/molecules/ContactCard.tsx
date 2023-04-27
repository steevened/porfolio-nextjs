import { Button, Input, Textarea } from '@material-tailwind/react';

export const ContactCard = () => {
  return (
    <form className="space-y-5 p-5 shadow-app-shadow-light dark:shadow-app-shadow bg-white dark:bg-app-gray w-full max-w-md mx-auto relative after:absolute after:inset-0 after:shadow-lg after:shadow-black/10 after:pointer-events-none rounded-md">
      <Input
        variant="standard"
        label="Name"
        className="dark:text-blue-gray-300"
      />
      <Input
        label="Email"
        className="dark:text-blue-gray-300"
        variant="standard"
      />
      <Textarea
        label="Message"
        className="dark:text-blue-gray-300"
        variant="standard"
      />
      <Button
        fullWidth
        variant="text"
        // color={theme === 'dark' ? 'blue-gray' : 'light-blue'}
        className="rounded-md  bg-gradient-to-r from-gradient-teal to-gradient-purple text-white"
      >
        Submit
      </Button>
    </form>
  );
};

import dynamic from "next/dynamic";

import LogIn from "@/components/auth/login";

export const metadata = {
  title: 'UniVerse | Login',
  description:
    'Superio - Job Borad React NextJS Template',

}



const index = () => {
  return (
    <>
      <LogIn />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });

import dynamic from "next/dynamic";

import Register from "@/components/auth/register";

export const metadata = {
  title: 'Register || Superio - Job Borad React NextJS Template',
  description:
    'Superio - Job Borad React NextJS Template',

}



const index = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

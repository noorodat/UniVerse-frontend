import dynamic from "next/dynamic";
import DashboardHome from "./components/DashboardHome";

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

const page = () => {
  return (
    <>
      <DashboardHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: true });

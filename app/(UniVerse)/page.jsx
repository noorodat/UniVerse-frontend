import Wrapper from "@/layout/Wrapper";
import Home from "@/app/(UniVerse)/components/home";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

export const metadata = {
  title: "UniVerse",
  description: "Jobs and internships for Jordan University of Science and Technology (JUST).",
};

export default function page() {
  return (
    <Wrapper>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <Home />
      </Suspense>
    </Wrapper>
  );
}

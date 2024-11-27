import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home";

export const metadata = {
  title: "UniVerse",
  description: "Jobs and internships for Jordan University of Science and Technology (JUST).",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

import Banner from "./Banner";
import Porto from "./Porto";
import OurStrengths from "./Our-Strengths";
import Wordpress from "./Wordpress";
import Footer from "@/components/footer/footer";

function Our_Works({ items, wpData, isLoading }) {
  return (
    <>
      <Banner />

      <OurStrengths />

      <Porto items={items} />

      <Wordpress wpData={wpData} isLoading={isLoading} />

      <Footer />
    </>
  );
}

export default Our_Works;

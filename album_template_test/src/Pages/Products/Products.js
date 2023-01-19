import { HeroSection } from "../../Components";

const mainText = `Something short and leading about the collection below—its
contents, the creator, etc. Make it short and sweet, but not too short
so folks don&apos;t simply skip over it entirely.`

export const Products = () => {
  return (
    <HeroSection
      mainHeading="Products"
      mainText={mainText}
      buttonOneText="MAIN CALL TO ACTION"
      buttonTwoText="SECONDARY ACTION"
      buttonColor="secondary"
    />
  );
};

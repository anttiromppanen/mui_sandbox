import { HeroSection } from "../../Components"

const mainText = `Something short and leading about the collection below—its contents,
the creator, etc. Make it short and sweet, but not too short so folks
don&apos;t simply skip over it entirely.`;
const buttonOneText = 'Main call to action';
const buttonTwoText = 'Secondary action';

export const HomeHeroSection = () => {
  return (
    <HeroSection
      mainHeading="Album layout"
      mainText={mainText}
      buttonOneText={buttonOneText}
      buttonTwoText={buttonTwoText}
    />
  );
};
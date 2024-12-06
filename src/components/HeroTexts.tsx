import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        闫 <br /> 泓瑾.
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;

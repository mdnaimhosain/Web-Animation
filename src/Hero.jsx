import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="h-screen items-center justify-center flex text-2xl">
      <TypeAnimation
        sequence={[
          "💻 Frontend Developer",
    2000,
    "🚀 Learning Backend Development",
    2000,
    "🌟 Aspiring Full Stack Developer",
    2000,
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={70}
        repeat={Infinity}
        className="text-green-500 font-semibold"
      />
       

    </div>
    
  );
};

export default Hero;

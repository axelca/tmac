import { Component } from "../Types/common";
import Typography from "./Typography";

interface Props extends Component {
  heading: string;
  subHeading?: string;
}

const Hero = ({ heading }: Props) => {
  return (
    <section className="relative bg-[url(/images/tmac_bg.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-zinc-900" />
      <div className="flex items-center relative container mx-auto px-4 py-4 pb-8 h-[30vh] sm:h-[60vh] lg:h-[80vh] xl:h-[90vh] lg:py-12">
        <div className="text-center w-full flex h-full">
          <Typography variant="logo">{heading}</Typography>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Cta from "./shared/ui/Cta";

const Hero = ({
  title,
  subtitle,
  content,
}: {
  title: string;
  subtitle: string;
  content: string;
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2 items-center lg:items-start md:max-w-lg lg:max-w-135">
        <div>
          <div className="subtitle text-center lg:text-left">{subtitle}</div>
          <div className="title text-center lg:text-left">{title}</div>
        </div>
        <div>
          <div className="para text-blue-300 text-center lg:text-left">
            {content}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-16 lg:pt-0">
        <Cta />
      </div>
    </div>
  );
};

export default Hero;

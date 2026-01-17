import error from "../../../assets/imgs/shared/gpt-error.png";
import TypoElement from "../TypoElement";

const ErrorState = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
      <div className="flex justify-center flex-col gap-2 order-2 md:order-1">
        <img
          src={error}
          className="aspect-video md:aspect-square object-cover md:max-h-180"
        />
        <h4 className="label-md text-center">Image created by Chat GPT</h4>
      </div>
      <div className="flex justify-center items-center md:items-start flex-col">
        <TypoElement
          title="oops"
          subtitle="server is still waking up"
          textContent="Apologies - I'm using a free tier of Render to deploy my API & the
          server goes to sleep after 15min of inactivity 💤😴🥱"
        />
        <div className="pt-10">
          <h3 className="subtitle opacity-60 pt-8 border-t border-white/25 pb-5 text-center lg:text-left">
            What can you do?
          </h3>
          <ul className="para space-y-3 list-disc list-inside">
            <li>Wait ~50 seconds or so.</li>
            <li>Refresh the page.</li>
            <li>
              Hire me, and then we can upgrade to the tier that never sleeps 😉
            </li>
            <li>In the meantime, I'm going to use a free tier - sorry 🤑</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;

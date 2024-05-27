import {
  CurrencyDollarIcon,
  ChartBarIcon,
  NewspaperIcon,
  LockClosedIcon,
  FingerPrintIcon,
  VariableIcon,
  CakeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitTwo = {
  title: "What can I do",
  desc: "These are the thing I'm confident at.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Back-end development",
      desc: "I am very fluent with JavaScript and NodeJS, I started with these language's after understanding #C because JavaScript is a very versatile language for back-end and front end. I believe that this is the best path to take in becomming a full-stack developer.",
      icon: <LockClosedIcon />,
    },
    {
      title: "Server development",
      desc: "Linux is the king on the server side, I have been working with Linux for over 10 years. I have experience with a lot of distro's but my main distro is Arch. I have been working with Linux for over 10 years. I have experience with a lot of distro's but my main distro is Arch is fully customizeable and good for developers. My konlage and experience with Arch can be used for any other distro.",
      icon: <FingerPrintIcon />,
    },
    {
      title: "Fast researching",
      desc: "For development I always need to research a lot, I am very good at finding the right information and using it to my advantage. The key is to learn new protocols fast and know how to Google the right information. The information space is rapidly developing and we programmers have to stay on top, so using other means like ChatGPT is in my opinion a good way to stay on top of the game.",
      icon: <VariableIcon />,
    },
  ],
};


export { benefitTwo };

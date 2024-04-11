import {
  WalletIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  LockClosedIcon,
  FingerPrintIcon,
  VariableIcon,
  FireIcon,
  CakeIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Token Distribution",
  desc: "I don't want to make it more complicated then it has to be, remember that it's memeonomics! The total supply will be 750.000.000",
  image: benefitOneImg,
  bullets: [
    {
      title: "Pre-Sale locked liquidity",
      desc: "375.000.000/50% - Locked for 5 Years.",
      icon: <WalletIcon />,
    },
    {
      title: "Community distribution",
      desc: "187.500.000/25% - Airdrops & Event's",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Marketing distribution",
      desc: "82.500,000/11% - Used for strategic partnerships with centralized exchanges",
      icon: <NewspaperIcon />,
    },
    {
      title: "Burning supply",
      desc: "105.000.000/14% - Burned over a 10 year period, monthly.",
      icon: <FireIcon />,
    },
  ],
};

const benefitTwo = {
  title: "The Roadmap",
  desc: "How tf are we going to get listed on Coinbase?",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Phase one ~ Decentralized",
      desc: "In this phase we will focus on growth, insetivize liquidity provisioning by airdropping tokens to the most engaged providers while stabally growing the amount of holders. We will empty the enitere allocated community ditribution in this phase. Make sure to drink a beer with me in the Discord and or Telegram group! We will also contact influencers in this phase in order to grow the community.",
      icon: <LockClosedIcon />,
    },
    {
      title: "Phase two ~ Centralization",
      desc: "So before entering this phase the community wallet has to be empty, and I would like to see between 20-50k holders before entering this phase. We will slowley start listing on boring boomer exchanges, remember that we aren't doing the traditional centralized route. The main plan is: 'list, adapt and repeat', with adapting I mean making sure the volatility some what stablizes after we've been listed on a large cex. Listing on a new place always brings volatility that can be good and or bad. That's why we'll move slowly in order to don't fck things up.",
      icon: <FingerPrintIcon />,
    },
    {
      title: "Phase three ~ Casino royale",
      desc: "The fun one's, the 10 baggers. Letting people go jacked to the tits with leverage, future's and options. Exchange's like Binance, Coinbase, MEXC, Bitget, etc. The main thing here is that we have to see what happens, tokens often die on these exchganges but the real one's don't. If the project goes as plan, we already have sufficient holders because of the boring boomer exchanges. The boomers hold the tokens and the gambler make the price go up because of speculative demand. This is because the supply of the token is relativly low, while the volatility is high and, the demand is big because of the cetnralized exchanges.",
      icon: <VariableIcon />,
    },
    {
      title: "Phase four ~ The achievement",
      desc: "Coinbase baby, the hall of fame. Or the hall of shame, I let you decide. This idea is so incredibly regarded, I love it. That's just me, I always have been the one with the stupid ideas lol. Lets just do it again shall we?",
      icon: <CakeIcon />
    }
  ],
};


export {benefitOne, benefitTwo};

import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Chart from "../components/chart"
import Spacer from '../components/spacer';
import Addresses from "../components/addresses";

const Home = () => {
  return (
    <>
      <Head>
        <title>Captain Bright</title>
        <meta
          name="description"
          content="Captain Bright is a meme token created by Niek, for the Solana ecosystem."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <div id="about" />
      <SectionTitle
        pretitle="Abou the project"
        title=" Why should you follow Niek?">
        <div className="space-y-6">
          <p className="text-base leading-7">If you should buy into this project is a decision you need to make for yourself. I'm here to provide as much transparency as possible. The reason you should consider it is that I seem to be the only one genuinely invested a project's success on this chain.</p>
        </div>
        <div className="space-y-6">
          <p className="text-base leading-7">I've experienced my share of pump-and-dump schemes and have also studied more successful tokens. I’ve witnessed big projects rise and plummet, and I believe I understand why. It often comes down to centralized exchanges. Wait, what? You might ask if I’m advocating for centralized exchanges. Yes, I am, but understand that there are two types of centralized exchanges. I categorize them as: 'boring boomer exchanges' and 'casinos.' Casino exchanges are the ones that allow activities like short-selling, options, futures, and leveraging.</p>
        </div>
        <div className="space-y-6">
          <p className="text-base leading-7">On the other hand, 'boomer exchanges' — which are common in Europe and include platforms like <a href="https://bitvavo.com/en" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> Bitvavo</a>, <a href="https://finst.com/" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> Finst</a>, and <a href="https://www.etoro.com/" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> eToro</a> — tend to be more traditional. They usually only support the buying and selling of assets, along with perhaps an ETF or two. Boomer exchanges attract long-term holders and speculative traders, while casinos foster volatility and competition.</p>
        </div>
        <div className="space-y-6">
          <p className="text-base leading-7">That surely is going to happen because the dude's trading over there are jacked to the tits and will short the f out of you. The main plan is to stay away from those exchanges until we're healthy enough.</p>
        </div>
        <Spacer height="70px" />
      </SectionTitle>
      <div id="roadmap" />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <div id="chart">
        <SectionTitle
          pretitle="Trading Chart"
          title="How are we doing in Real-Time?">
          {/* Optionally, any additional descriptive text can go here. */}
        </SectionTitle>
      </div>
      <div className="flex-container">
        <div id="dexscreener-embed">
          <Chart />
        </div>
      </div>

      <div id="addresses">
        <SectionTitle pretitle="Short Whitepaper" title="Transparency">
          So here are all the important addresses made upon token creation.
          You can of course use something like rugcheck but I always like to see the transactions of the token-accounts.
          This is the right and only way to do it, check what the owner of the account addresses is actually doing with it.
          This way you can check for example, if the community wallet indeed has dropped the promised airdrops. Or if there aren't any shady transactions made.
          But you're going to sniff it anyway, why am I even telling this, lol. I recommend: 
          <a href="https://solsniffer.com/" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> Solsniffer</a> or
          <a href="https://rugcheck.xyz/" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> Rugcheck.xyz</a> for DD. 
          <Addresses />
        </SectionTitle>
      </div>
      <div id="FAQ">
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Remember that you can also just join the <a href="https://t.me/+tFSs5utypOQzZjZk" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> Telegram</a> or <a href="https://discord.gg/6BHkYb24" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> Discord</a>
        </SectionTitle>
      </div>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
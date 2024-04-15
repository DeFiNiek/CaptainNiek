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
          <p className="text-base leading-7">On the other hand, 'boomer exchanges' — which are common in Europe and include platforms like Bitvavo, Finsit, and eToro — tend to be more traditional. They usually only support the buying and selling of assets, along with perhaps an ETF or two. Boomer exchanges attract long-term holders and speculative traders, while casinos foster volatility and competition.</p>
        </div>
        <div className="space-y-6">
          <p className="text-base leading-7">That surely is going to happen because the dude's trading over there are jacked to the tits and will short the f out of you. The main plan is to stay away from those exchanges until we're healthy enough.</p>
        </div>
        <Spacer height="70px"/>
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
      <SectionTitle
        pretitle="Addresses" title="Deployed Addresses">
          <Addresses />
      </SectionTitle>
      <Spacer height="40px" />
      <div id="FAQ">
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Remember that you can also just join the Telegram or Discord
      </SectionTitle>
      </div>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
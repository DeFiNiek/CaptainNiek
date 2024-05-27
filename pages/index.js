import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Faq from "../components/faq";
import Spacer from '../components/spacer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Niek Kamer</title>
        <meta
          name="description"
          content="This is a personal website of Niek Kamer, a fast learning developer with a passion for technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <div id="about" />
      <SectionTitle
        pretitle="What am I able to do?"
        title="About my skills.">
        <div className="space-y-6">
          <p className="text-base leading-7">Server development, I have more than 10 years of Linux experience and am able to work in any distro although my main distro is Arch.</p>
        </div>
        <div className="space-y-6">
          <p className="text-base leading-7">Back-end development, general understanding of the languages NodeJS, JavaScript, Python, and Rust</p>
        </div>
        <div className="space-y-6">
          <p className="text-base leading-7">Front-end development, although my experience is mainly at the back-end I can develop website's and applications with: NextJS, React, and Tailwindcss as stack.</p>
        </div>
        <Spacer height="70px" />
      </SectionTitle>
      <div id="roadmap" />
      <Benefits imgPos="right" data={benefitTwo} />
      <div id="FAQ">
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          You can also ask me directly via <a href="https://t.me/@niek01" className="text-custom hover:text-custom dark:hover:text-custom-100" target="_blank" rel="noopener noreferrer"> Telegram</a>
        </SectionTitle>
      </div>
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
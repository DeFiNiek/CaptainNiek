import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Where can I buy this token?",
    answer: "It's deployed on Raydium but i'd advice you to buy the token on Jupiter or, quick trading aggregators like Photon for fast transactions.",
  },
  {
    question: "How can I be appart in event's?",
    answer: "There will be airdrops for every holder but we will also organize events like: Competitions and provissioning challanges. You should join the Discord or Telegram group for the fun event's.",
  },
  {
    question: "Am I the owner of Captain Bright?",
    answer:
      "Although I created it and am in charge of the marketing wallet and community wallet, I do not own the token. I only developed it and minted the tokenomics, mint is revoken and LP is burned.",
  },
  {
    question: "Do I offer technical support?",
    answer:
      "Yes, feel free to DM me about everything. Although I am unable to recover losses I can and want to explain to you what has happend in order for us to learn from it.",
  },
];

export default Faq;
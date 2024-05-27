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
    question: "What is the stack used for this website?",
    answer: "Completly made from scratch with: NextJS, React, Tailwindcss, and Heroicons. The website is hosted with Vercel.",
  },
  {
    question: "How can I contact you?",
    answer: "You can contact me via Telegram, Github, or E-Mail. For general tech support, I prefer to use Telegram. For business inquiries, I prefer to use E-Mail.",
  },
  {
    question: "Where can I ceck you're certifications?",
    answer:
      "You can make a request for my certifications via E-Mail. I will provide you with a PDF file containing all the certifications I have obtained. You can confirm the over at CompTIA's website.",
  },
  {
    question: "Do I offer technical support?",
    answer:
      "Yes, feel free to DM me about everything.",
  },
  {
    question: "How much experience do you have?",
    answer: "I have developed a lot of things over the past years, I have experience with a lot of languages and frameworks. I have been working with Linux for over 10 years. I have been working with NodeJS, JavaScript, Python, and Rust for over 5 years. I have been working with NextJS, React, and Tailwindcss for over 2 years.",
  },
];

export default Faq;
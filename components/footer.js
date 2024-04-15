import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import { FaTwitter, FaReddit, FaTelegram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const navigation = [
    "About",
    "Roadmap",
    "Chart",
    "Contact",
  ];
  const legalLinks = [
    { label: "Legal Statement", href: "/legal" },
  ];

  // Social links can also be mapped from an array if they become numerous
  const socialLinks = [
    { icon: <FaXTwitter size={24} />, href: "https://twitter.com/CaptainNiek", label: "X" },
    { icon: <FaTelegram size={24} />, href: "https://t.me/+tFSs5utypOQzZjZk", label: "Telegram" },
    { icon: <FaDiscord size={24} />, href: "https://discord.gg/6BHkYb24", label: "Discord" },
    { icon: <FaReddit size={24} />, href: "https://www.reddit.com/r/CaptainNiek/", label: "Reddit" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Captain Bright</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Captain Bright as thicker NIEK on Solana.
              Made by a Solana enthousiast for Solana enthousiasts!
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                {legalLinks.map((item, index) => (
                  <Link key={index} href={item.href} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Social Icons Section */}
          <div className="">
            <div>Socials</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made by {" DeFiNiek "}, for the Solana ecosystem.
        </div>
      </Container>
    </div>
  );
}

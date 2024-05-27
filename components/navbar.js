import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "#about" },
    { name: "Experience", href: "#roadmap" },
    { name: "FAQ", href: "#FAQ" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-gray-700 dark:text-gray-100">
                    <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="64"
                        height="64"
                        className="w-8"
                    />
                    <span>Niek Kamer</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-gray-100 focus:text-gray-100 focus:bg-custom focus:outline-none dark:text-gray-300 dark:focus:bg-custom">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {/* SVG content for the button */}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-custom focus:text-custom focus:bg-custom dark:focus:bg-custom focus:outline-none">
                        {item.name}
                      </Link>
                    ))}
                    <a href="https://pump.fun/HfmBQPMBTFpXDa1f1LQTEsFuyFmJxi5rcMwMsUj26tG" className="w-full px-6 py-2 mt-3 text-center text-white bg-custom rounded-md lg:ml-5">
                      My other projects
                    </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-gray-100 focus:text-gray-100 focus:bg-custom focus:outline-none dark:focus:bg-custom">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <a href="https://pump.fun/HfmBQPMBTFpXDa1f1LQTEsFuyFmJxi5rcMwMsUj26tG" className="px-6 py-2 text-white bg-custom rounded-md md:ml-5">
            My other projects
          </a>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

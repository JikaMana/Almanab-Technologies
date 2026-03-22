import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer() {
  const formState = useForm();
  return (
    <footer className="bg-brand-secondary px-[5%] py-12 text-lg text-white md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div className="items-stadrt mb-12 block items-center justify-between md:mb-18 lg:mb-20 lg:flex">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-medium text-xl font-semibold">
              Join our community
            </h1>
            <p>Stay updated with the latest digital trends and insights</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <div className="mx-auto mt-6 w-full md:mt-8">
              <form
                onSubmit={formState.handleSubmit}
                className="mx-auto mb-4 grid w-full max-w-xl grid-cols-1 items-center gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
              >
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  placeholder="Enter email address"
                  className="h-full w-full border-4 text-lg text-white"
                />
                <Button
                  title="Subscribe"
                  size="xl"
                  className="bg-brand-main hover:bg-brand-main/90 w-full cursor-pointer rounded-full border-2 border-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:border-white sm:w-max"
                >
                  Subscribe
                </Button>
              </form>
              <p className="mx-auto text-xs text-white">
                By signing up, you agree to our privacy policy. By subscribing,
                you agree to our privacy policy
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid (Updated to include Locations) */}
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6 xl:grid-cols-7">
          {/* 1. Logo */}
          <a href="#">
            <img
              loading="lazy"
              src="/almanab.svg"
              className="h-12 sm:h-16 md:h-24"
              alt="Almanāb TechnologiesLogo image"
            />
          </a>

          {/* 2. Services */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Services</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Web development
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Mobile apps
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  UI/UX design
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Consulting
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Company</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  About us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Careers
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Blog
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Contact
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Skills Shop
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Case studies */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Case studies</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Guides
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Tutorials
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  FAQs
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Legal
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* 5. Locations (NEW COLUMN) */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Locations</h2>
            <ul>
              <li className="py-2 text-sm">
                <p className="mb-1 font-semibold">Port Harcourt</p>
                <p className="text-xs leading-relaxed opacity-75">
                  Beside Mife Constructions, Rivers State
                </p>
              </li>
              <li className="py-2 text-sm">
                <p className="mb-1 font-semibold">Abuja</p>
                <p className="text-xs leading-relaxed opacity-75">
                  I.V.W. Osisiogu Street, Utako, Federal Capital Territory
                </p>
              </li>
              <li className="py-2 text-sm">
                <p className="mb-1 font-semibold">Ado Ekiti</p>
                <p className="text-xs leading-relaxed opacity-75">
                  Inside Afe Babalola University, Ekiti State
                </p>
              </li>
            </ul>
          </div>

          {/* 6. Socials */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Socials</h2>
            <ul>
              <li className="py-2 text-sm">
                <a
                  href="https://www.instagram.com/almanab.tech"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  Instagram
                </a>
              </li>
              <li className="py-2 text-sm">
                <a
                  href="https://wa.link/6l8tgj"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  WhatsApp
                </a>
              </li>
              <li className="py-2 text-sm">
                <a
                  href="https://x.com/codefloxx_tech"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  Twitter
                </a>
              </li>
              {/* <li className="py-2 text-sm">
                <a
                  href="https://www.instagram.com/almanab.tech"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  Linkedin
                </a>
              </li> */}
              <h2 className="mt-2 font-semibold">Working Hours</h2>

              <li className="py-2 text-sm">
                <p href="#" className="flex items-center gap-3">
                  8:00 AM - 6 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator and Bottom Bar */}
        <div className="bg-scheme-border h-px w-full" />
        <div className="flex flex-col-reverse items-start pt-6 pb-4 text-sm md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © {new Date().getFullYear()} Almanāb Technologies. All rights
                reserved.
              </p>
              <a href="#" className="underline">
                Privacy policy
              </a>
              <a href="#" className="underline">
                Terms of service
              </a>
              <a href="#" className="underline">
                Cookies
              </a>
            </div>
          </div>
          <div className="flex-center mb-8 gap-3 lg:mb-0">
            <a href="https://www.instagram.com/almanab.tech">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="#">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="#">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="#">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="#">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

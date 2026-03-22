import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact() {
  const [privacyPolicyAgreed, setPrivacyPolicyAgreed] = useState(false);
  const roles = [
    { value: "startup", label: "Startup" },
    { value: "enterprise", label: "Enterprise" },
    { value: "small-business", label: "Small business" },
    { value: "individual", label: "Individual" },
    { value: "agency", label: "Agency" },
    { value: "other", label: "Other" },
  ];

  return (
    <section
      id="consult"
      className="flex-center bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
        {/* LEFT SIDE: Contact Information */}
        <div className="lg:sticky lg:top-20">
          <div className="mb-8 md:mb-12">
            <p className="text-brand-main mb-3 text-sm font-semibold tracking-widest uppercase">
              Connect with us
            </p>
            <h2 className="mb-5 text-4xl font-extrabold md:mb-6 md:text-5xl lg:text-6xl">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Share your project details and we will respond quickly to start
              your digital journey.
            </p>
          </div>

          {/* Contact Details List (Mini-Cards) */}
          <div className="grid grid-cols-1 gap-6 py-2">
            <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition">
              <BiEnvelope className="text-brand-main mt-0.5 size-6 flex-none" />
              <div>
                <p className="font-semibold text-gray-800">Email Address</p>
                <p className="text-gray-600">codefloxx.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition">
              <BiPhone className="text-brand-main mt-0.5 size-6 flex-none" />
              <div>
                <p className="font-semibold text-gray-800">
                  Phone(Calls & WhatsApp)
                </p>
                <p className="text-gray-600">+234 905 790 1776</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition">
              <BiMap className="text-brand-main mt-0.5 size-6 flex-none" />
              <div>
                <p className="font-semibold text-gray-800">Office Locations</p>
                <p className="text-gray-600">Port Harcourt, Nigeria</p>
                <p className="text-gray-600">Abuja, Nigeria</p>
                <p className="text-gray-600">Ado-Ekiti, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form (Card Style) */}
        <form className="grid grid-cols-1 gap-6 rounded-xl border border-gray-100 bg-white p-8 shadow-2xl md:p-10 lg:p-12">
          {/* Name fields */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="grid w-full items-center">
              <Label
                htmlFor="firstName"
                className="mb-2 font-medium text-gray-700 shadow-none"
              >
                First name
              </Label>
              <Input
                type="text"
                id="firstName"
                className="focus:border-brand-main h-12 rounded-lg border-gray-300"
              />
            </div>
            <div className="grid w-full items-center">
              <Label
                htmlFor="lastName"
                className="mb-2 font-medium text-gray-700 shadow-none"
              >
                Last name
              </Label>
              <Input
                type="text"
                id="lastName"
                className="focus:border-brand-main h-12 rounded-lg border-gray-300"
              />
            </div>
          </div>

          {/* Contact fields */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="grid w-full items-center">
              <Label
                htmlFor="email"
                className="mb-2 font-medium text-gray-700 shadow-none"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="focus:border-brand-main h-12 rounded-lg border-gray-300"
              />
            </div>
            <div className="grid w-full items-center">
              <Label
                htmlFor="phone"
                className="mb-2 font-medium text-gray-700 shadow-none"
              >
                Phone number
              </Label>
              <Input
                type="text"
                id="phone"
                className="focus:border-brand-main h-12 rounded-lg border-gray-300"
              />
            </div>
          </div>

          <div className="grid w-full items-center">
            <Label className="mb-2 font-medium text-gray-700 shadow-none">
              Choose project topic
            </Label>
            <Select>
              <SelectTrigger className="focus:border-brand-main h-12 rounded-lg border-gray-300">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-dev">Web Development</SelectItem>
                <SelectItem value="mobile-app">
                  Mobile App (iOS/Android)
                </SelectItem>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="website-redesign">
                  Website Redesign
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 font-medium text-gray-700">
              Who are you?
            </Label>
            <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              {roles.map((role, index) => (
                <div key={role.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={role.value} id={`role-${index}`} />
                  <Label
                    htmlFor={`role-${index}`}
                    className="cursor-pointer text-gray-600"
                  >
                    {role.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="grid w-full items-center">
            <Label
              htmlFor="message"
              className="mb-2 font-medium text-gray-700 shadow-none"
            >
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Describe your project needs in detail..."
              className="focus:border-brand-main min-h-[10rem] overflow-auto rounded-lg border-gray-300"
            />
          </div>

          <div className="flex items-start space-x-2 pt-2 text-sm">
            <Checkbox
              id="terms"
              className="mt-1"
              checked={privacyPolicyAgreed}
              onCheckedChange={setPrivacyPolicyAgreed}
            />
            <Label
              htmlFor="terms"
              className="cursor-pointer leading-normal text-gray-600"
            >
              I accept the terms and conditions and agree to receive
              communications from the company.
            </Label>
          </div>

          <div className="mt-4">
            <Button
              title="Send Message"
              disabled={!privacyPolicyAgreed}
              className="bg-brand-main hover:bg-brand-main/90 h-12 w-full rounded-xl text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed"
            >
              Send Message
            </Button>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1450.254326664762!2d7.126246243597395!3d4.8767722965067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sng!4v1759309064035!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: 2, width: "100%", borderRadius: 16 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </form>
      </div>
    </section>
  );
}

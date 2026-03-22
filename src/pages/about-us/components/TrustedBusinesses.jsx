import React from "react";

// Array of fictional client objects to map through
const mockClients = [
  {
    name: "Triple R Recycling",
    logoUrl: "/assets/tripleR.svg",
  },
  {
    name: "Bilma Scents",
    logoUrl: "/assets/bilma-scent-logo.png",
  },
  // {
  //   name: "AMB Apparels",
  //   logoUrl: "/assets/almanab-apparels.png",
  // },
  {
    name: "UniHelp",
    logoUrl: "/assets/UniHelp.webp",
  },
];

export function TrustedBusinesses() {
  return (
    <section className="bg-brand-secondary px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mx-auto mb-8 w-full max-w-xl text-center text-3xl font-bold text-gray-900 md:mb-10">
          Trusted by leading Companies
        </h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:gap-x-12">
          {mockClients.map((client, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-center rounded-lg bg-white p-4"
            >
              <img
                loading="lazy"
                src={client.logoUrl}
                className="max-h-12 w-auto md:max-h-14"
                alt={`${client.name} logo`}
                title={`Client: ${client.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

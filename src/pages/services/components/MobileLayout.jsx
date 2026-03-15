import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function MobileLayout() {
  // change these logos
  const logoData = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx28mg8aQ39CEGURVztotd5VC0bO7Ik-ZpBw&s",
      alt: "Figma",
    },
    {
      id: 2,
      src: "https://static.vecteezy.com/system/resources/thumbnails/020/489/291/small_2x/3d-logo-of-apple-iphone-free-png.png",
      alt: "IOS",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbd6sk7zjsfY8mwVucWTooKzm3j4yV6RkCw&s",
      alt: "React",
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",
      alt: "NodeJS",
    },

    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HOlYCk5n1XJ0KjnBrxAniNRbmyjxY6xogA&s",
      alt: "APK",
    },
    {
      id: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/2560px-Google_Play_2022_logo.svg.png",
      alt: "GoogleStore",
    },

    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMJFyiwVkl2KMEJ0PnO4gPy1WmTcHYTpXSg&s",
      alt: "Webflow",
    },

    {
      id: 8,
      src: "https://images.seeklogo.com/logo-png/45/2/expo-go-app-logo-png_seeklogo-457073.png",
      alt: "EXPO",
    },
    {
      id: 9,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/New_Firebase_logo.svg/1024px-New_Firebase_logo.svg.png",
      alt: "Firebase",
    },
  ];
  return (
    <section className="flex-center bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 max-h-[588px] w-full overflow-hidden rounded-xl shadow-lg md:order-1">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/deid1vy94/image/upload/v1759412163/codefloxx-native-app-development_atdemg.avif"
              className="h-full w-full object-cover"
              alt="Placeholder image"
            />
          </div>

          <div className="order-1 container max-w-xl text-center md:order-2 lg:text-left">
            <p className="mb-6 text-lg font-medium">Mobile</p>
            <h1 className="text-4xl leading-tight font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Native mobile apps for modern businesses
            </h1>
            <p className="mt-6 text-xl lg:text-2xl lg:tracking-wide">
              Powerful mobile solutions crafted for iOS and Android that deliver
              exceptional user experiences.
            </p>
            <div className="my-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
              {logoData.map((logo) => (
                <div
                  key={logo.id}
                  className="h-8 w-32 flex-shrink-0 bg-white md:h-10 lg:h-12"
                >
                  <img
                    loading="lazy"
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-full bg-white object-contain"
                  />
                </div>
              ))}
            </div>
            {/* <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button
                title="Discover"
                size="lg"
                className="hover:bg-brand-main h-auto w-max cursor-pointer rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
              >
                Discover
              </Button>

              <Button
                title="Learn"
                size="lg"
                variant="outline"
                className="hover:bg-brand-main flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:text-white"
              >
                <span>Learn</span>
                <RxChevronRight className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

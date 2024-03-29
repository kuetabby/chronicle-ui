"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";
import { Button } from "@chakra-ui/react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { RobotIcon } from "@/utils/Icon/robot";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
import { poppins, clashDisplay } from "@/utils/font";
import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

// import HeroApp from "@/assets/hero-app.png";
import LogoApp from "@/assets/logo-app.png";
import TwitterLogo from "@/assets/logo-x.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import GitBookLogo from "@/assets/logo-gitbook.png";
// import MediumLogo from "@/assets/logo-medium.png";
// import MapApp from "@/assets/map-app.png";
// import Dextools from "@/assets/dextools.png";
// import Dexscreener from "@/assets/dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Etherscan from "@/assets/etherscan.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";

interface Props {}

const Home: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTokensVisible, setIsTokensVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsWelcomeVisible(entry.isIntersecting);
      });

      observer.observe(welcomeRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsFeaturesVisible(entry.isIntersecting);
      });

      observer.observe(featuresRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsAboutVisible(entry.isIntersecting);
      });

      observer.observe(aboutRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsTokensVisible(entry.isIntersecting);
      });

      observer.observe(tokensRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      {/* <div id="welcome" className="h-4 xs:h-8 sm:h-16 relative z-30" /> */}
      <div
        id="welcome"
        className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
      />
      <div className="welcome-container">
        <div className="welcome-wrapper">
          <div
            ref={welcomeRef}
            className={`w-full h-full px-2 2xl:px-4 mt-10 sm:mt-0 ${poppins.className}`}
          >
            <div ref={welcomeRef} className={`w-full sm:px-8 lg:px-14`}>
              <div
                className={`w-full lg:w-4/5 text-center mx-auto text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-white py-2 ${clashDisplay.className}`}
              >
                {isWelcomeVisible && (
                  <ReactTyped
                    strings={["Transforming Digital Creativity and Trading"]}
                    typeSpeed={40}
                  />
                )}
              </div>

              <div
                className={`w-full lg:w-4/5 xl:w-2/3 text-center mx-auto text-md xs:text-lg lg:text-xl text-slate-400 py-2 lg:px-8 ${
                  isWelcomeVisible && "animate-fadeInLame"
                }`}
              >
                Shaping Tomorrow's Digital Experience. Seamlessly Blend
                Creativity and Intelligent Trading in{" "}
                <span className="text-secondary font-bold">Cryptnative AI</span>
              </div>
              <div
                className={`w-full lg:w-4/5 text-center mx-auto xl:text-4xl sm:text-6xl font-extrabold text-white py-2 ${
                  isWelcomeVisible && "animate-fadeInLame"
                }`}
              >
                <div className="w-full flex justify-center gap-3">
                  <Link
                    href={socialsLink.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={TelegramLogo}
                      alt="telegram"
                      className="socials-button"
                    />
                  </Link>

                  <Link
                    href={socialsLink.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={TwitterLogo}
                      alt="twitter"
                      className="socials-button"
                    />
                  </Link>

                  <Link
                    href={socialsLink.whitepaper}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={GitBookLogo}
                      alt="whitepaper"
                      className="socials-button rounded-full"
                    />
                  </Link>
                </div>

                <div className="h-4" />

                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="welcome-bot-button"
                    leftIcon={
                      <RobotIcon
                        className="welcome-bot-icon"
                        style={{
                          fontSize: "1.25em",
                        }}
                      />
                    }
                  >
                    Cryptnative AI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="h-20 sm:h-28 relative z-30" />
      <div className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4">
        <div
          className={`block lg:hidden text-primary !font-bold text-base my-2 ${
            poppins.className
          } ${isAboutVisible && "animate-slideInBottomBasic"}`}
        >
          ABOUT
        </div>
        <div className="about-wrapper z-30">
          <div className="w-full xs:w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-[30%] h-full flex lg:justify-center lg:items-center mb-4 md:mb-0 mx-auto">
            <Tilt>
              <Image
                src={LogoApp}
                alt="logo-app"
                className="w-full h-full m-auto object-center object-contain"
              />
            </Tilt>
          </div>

          <div
            ref={aboutRef}
            className={`w-full md:w-1/2 lg:w-3/5 h-full px-2 text-center sm:text-left`}
          >
            <div
              className={`hidden lg:block text-primary !font-bold text-base ${
                poppins.className
              } ${isAboutVisible && "animate-slideInBottomBasic"}`}
            >
              ABOUT
            </div>

            <div
              className={`w-full lg:w-4/5 text-2xl lg:text-3xl xl:xl:text-4xl mb-4 pt-2 xl:mt-4 text-left ${clashDisplay.className}`}
            >
              Cryptnative AI | Where Creative Expression Meets Seamless Trading
              Tools
            </div>

            <div className="w-full sm:mt-2 lg:w-3/4 text-base text-[#ccc] text-left">
              The primary mission of Cryptnative AI is to simplify user
              experiences. We stand as a gateway to digital transformation,
              providing innovative creative tools and smart trading solutions.
              Cryptnative AI invites you to explore a world where artistic
              expression meets cutting-edge technology, creating an unlimited
              digital experience. With Cryptnative AI, ease and excellence are
              the primary goals in every step of your digital journey
            </div>
            <Link
              href={socialsLink.whitepaper}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                className="whitepaper-button"
                rightIcon={<ArrowRightOutlined className="whitepaper-icon" />}
              >
                Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-12 md:h-20" />
      <div id="feature" className="h-24 sm:h-28 relative z-30" />
      <div
        ref={featuresRef}
        className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30"
      >
        <Button
          className={`id-pages ${poppins.className} ${
            isFeaturesVisible && "animate-slideInBottomBasic"
          }`}
        >
          FEATURES
        </Button>
        <div className={`text-5xl mt-7 mb-2 ${clashDisplay.className}`}>
          Cryptnative AI
        </div>
        <div className={`text-2xl text-slate-200 ${poppins.className}`}>
          All features that support your needs
        </div>

        <div className="w-full flex flex-wrap justify-evenly items-center gap-x-2 gap-y-4 sm:gap-y-8 lg:gap-y-12 mx-auto mt-8 relative z-30">
          {ecosystemList.map((item, index) => (
            <div
              className="w-full sm:w-[48%] h-full px-2 py-6 text-center"
              key={index + 1}
            >
              <div className="w-24 h-24 mx-auto mb-2">
                <Tilt>
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-full object-contain"
                  />
                </Tilt>
              </div>

              <div
                className={`text-xl text-primary py-4 ${clashDisplay.className}`}
              >
                {item.title}
              </div>

              <div
                className={`w-full lg:w-1/2 text-xs md:text-sm text-slate-300 m-auto ${clashDisplay.className}`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-24 md:h-40" />
      <div id="tokenomic" className="h-24 sm:h-28 relative z-30" />
      <div
        ref={tokensRef}
        className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30"
      >
        <Button
          className={`id-pages ${poppins.className} ${
            isTokensVisible && "animate-slideInBottomBasic"
          }`}
        >
          TOKEN
        </Button>
        <div className={`xl:text-4xl ${clashDisplay.className} mt-4 mb-2`}>
          {contractAddress}
        </div>
        <div className="w-full md:w-11/12 flex flex-wrap justify-center items-center gap-y-8 mx-auto mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-3xl xl:text-4xl`}>
              Cryptnative AI
            </div>
            <div className={`text-primary !font-bold ${poppins.className}`}>
              Name
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-3xl xl:text-4xl`}>
              $CNAI
            </div>
            <div className={`text-primary !font-bold ${poppins.className}`}>
              Symbol
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-3xl xl:text-4xl`}>
              ETHEREUM
            </div>
            <div className={`text-primary !font-bold ${poppins.className}`}>
              Network
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-3xl xl:text-4xl`}>
              100M
            </div>
            <div className={`text-primary !font-bold ${poppins.className}`}>
              Supply
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 md:h-40" />
      <div className="generate-container">
        <div
          className={`w-full lg:w-3/4 text-center mx-auto text-4xl sm:text-5xl xl:text-6xl font-bold text-white py-2`}
        >
          <ReactTyped
            strings={["Initiate Your Digital Experience Now!"]}
            typeSpeed={40}
          />
        </div>

        <div
          className={`w-full flex flex-wrap justify-center gap-4 text-white my-10`}
        >
          <Button className={`try-button ${poppins.className}`}>
            Cartoons
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Meme Generator
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Remove Background
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Colorized
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Trading Companion
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Price Prediction
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Trading Tools
          </Button>
        </div>

        <Link href={socialsLink.bot} target="_blank" rel="noopener noreferrer">
          <div className="w-full text-center mx-auto">
            <Button
              size="lg"
              className="bot-button"
              leftIcon={
                <RobotIcon
                  className="bot-button-icon"
                  style={{
                    fontSize: "1.25em",
                  }}
                />
              }
            >
              Cryptnative AI
            </Button>
          </div>
        </Link>
      </div>

      <div className="h-24 md:h-40" />
    </div>
  );
};

export default Home;

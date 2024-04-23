import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="bg-gradient-to-b from-[#000000] to-[#050918]">
      <div className="px-4 py-12 lg:p-24 lg:w-full mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-6 ">
          <div className="basis-4/12">
            <div className="md:w-8/12">
              <img src="/images/footer-logo.png" alt="logo" />
              <p className="text-gray-500 mt-4">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
          </div>
          <div className="basis-8/12">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
              {/* <div className="inline-flex  flex-col gap-y-6">
                <p className="font-bold capitalize">about us</p>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  about
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  legal
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  careers
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  terms
                </Link>
              </div>
              <div className="inline-flex  flex-col gap-y-6">
                <p className="font-bold capitalize">resources</p>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  bug bounty
                </Link>
                <Link to={"#"} className="text-gray-500 hover:text-white">
                  FAQ
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  liscensing
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  tutorials
                </Link>
              </div>
              <div className="inline-flex flex-col gap-y-6">
                <p className="font-bold capitalize">products</p>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  brands
                </Link>
                <Link to={"#"} className="text-gray-500 hover:text-white">
                  ventures
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  dex
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  marketplace
                </Link>
                <Link
                  to={"#"}
                  className="capitalize text-sm md:text-base text-gray-500 hover:text-white"
                >
                  community
                </Link>
              </div> */}
              <div className="inline-flex  flex-col gap-y-6">
                <p className="font-bold capitalize">follow us</p>
                <div className="flex gap-6 items-center">
                  <Link
                    to={"https://twitter.com/FleamintEco"}
                    className="capitalize text-gray-500 hover:text-white"
                  >
                    <img
                      src="/images/twitter.png"
                      alt="twitter-icon"
                      className="md:h-8 md:w-8 w-6 h-6  hover:rotate-12"
                    />
                  </Link>
                  <Link to={"https://discord.com/invite/yD3B54a6sB"} className="text-gray-500 hover:text-white">
                    <img
                      src="/images/discord.png"
                      alt="discord-icon"
                      className="md:h-8 md:w-8 w-6 h-6  hover:rotate-12"
                    />
                  </Link>
                  <Link
                    to={"#"}
                    className="capitalize text-gray-500 hover:text-white"
                  >
                    <img
                      src="/images/github.png"
                      alt="github"
                      className="md:h-8 md:w-8 w-6 h-6  hover:rotate-12"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 border-t border-gray-900 text-center text-gray-500 text-sm">
          <p>@copy; 2024 Fleamint. All right reserved. Powered by Fleamint Foundation DAO</p>
      </div>
    </section>
  );
};

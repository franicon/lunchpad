export const Pillars = () => {
  return (
    <section className="p-4 py-12 lg:p-24 bg-[radial-gradient(rgba(0,80,250,20%),transparent,transparent),url(/images/pattern.png)]">
      <div className="flex flex-col lg:gap-y-24 gap-y-16">
        <div className="text-center">
          <h2 className="capitalize relative inline-block text-3xl before:absolute before:inline-block before:left-0 before:top-full before:w-full before:h-1 before:bg-blue-500">
            Key Pillars of Fleamint
          </h2>
        </div>
        <div className="content lg:w-10/12 mx-auto flex flex-col gap-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/images/membership.png" alt="membership" className="w-8/12 md:w-auto mx-auto md:mx-[initial]" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="capitalize relative text-xl md:text-3xl">Memberships</h2>
              <p className="text-gray-500 md:text-lg">
                Take part in the Fleamint ecosystem. Get your NFT and unlock
                access to our community and its unprecedented investment
                opportunities with established companies that have been making
                profits for years.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-y-4">
              <h2 className="capitalize relative text-xl md:text-3xl">
                Blockchain Identification & Data
              </h2>
              <p className="text-gray-500 md:text-lg">
                Web3 is a cornerstone of who we are because blockchain helps us
                solve major problems of counterfeiting and traceability of our
                partners' products and ensure us to provide you the best service
                quality.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img
                src="/images/blockchain.png"
                alt="blockchain"
                className="w-6/12 md:w-auto md:ml-auto mx-auto md:mx-[initial]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/images/venture.png" alt="venture" className="w-8/12 md:w-auto mx-auto md:mx-[initial]" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="capitalize relative text-xl md:text-3xl">
                Venture opportunities
              </h2>
              <p className="text-gray-500 md:text-lg">
                Venture investment opportunities we offer are with established
                companies that have been making profits for years.Find the best
                opportunities thanks to our user-friendly interface and take
                potential high returns in the rapidly evolving blockchain
                landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn-gradient">Join the waitlist</button>
        </div>
      </div>
    </section>
  );
};

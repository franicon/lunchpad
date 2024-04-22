export const Hero = () => {
  return (
    <section className="hero px-4 lg:px-24 lg:h-[calc(80vh-48px)] relative pb-12 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center h-full justify-center">
        <div className="hero-content flex flex-col gap-y-6 lg:basis-5/12 basis-full lg:pt-0">
          <h1 className="hero-text sm:text-4xl text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent" style={{lineHeight:1.2}}>
            Tokenised Real World Assets Opportunities
          </h1>
          <div>
            <div className="mb-6">
              <button className="btn-gradient">Join the waitlist</button>
            </div>

            <button className="underline capitalize text-emerald-400 hover:text-emerald-500">Check your status</button>
          </div>
        </div>
        <div className="basis-5/12 order-first lg:order-last">
          <img src="/images/hero-img.svg" alt="" className="lg:ml-auto lg:scale-150 relative -left-14 lg:-left-0 top-12" />
        </div>
      </div>
    </section>
  );
};

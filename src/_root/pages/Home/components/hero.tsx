export const Hero = () => {
  return (
    <section className="hero px-4 lg:px-24 h-[calc(70vh-48px)]">
      <div className="flex gap-12 items-center h-full">
        <div className="hero-content flex flex-col gap-y-6 basis-5/12">
          <h1 className="hero-text text-5xl md:text-6xl font-bold leading-snug bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
            Tokenised Real World Assets Opportunities
          </h1>
          <div>
            <div className="mb-6">
              <button className="btn-gradient">Join the waitlist</button>
            </div>

            <button className="underline capitalize text-emerald-400 hover:text-emerald-500">Check your status</button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

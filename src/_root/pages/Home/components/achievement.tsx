export const Achievement = () => {
  return (
    <section className="md:p-24 p-4 py-12 text-center md:text-left lg:w-10/12 mx-auto">
      <div className="md:px-20 px-4 py-12 bg-gradient-to-l from-blue-500/20 to-transparent  border border-slate-800 rounded-2xl">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="md:basis-8/12 basis-full">
            <div className="flex flex-col gap-y-12">
              <div>
                <h3 className="capitalize mb-4 md:text-3xl text-xl font-bold">Achievements</h3>
                <p className="text-gray-500">
                  We onboarded over $500 million worth of assets onto our
                  ecosystem
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-2">
                <div className="flex flex-col gap-y-4">
                  <h3 className="font-bold md:text-3xl text-xl">$500 Million</h3>
                  <p className="text-gray-500">In assets</p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h3 className="font-bold md:text-3xl text-xltext-3xl">11</h3>
                  <p className="text-gray-500">Projects</p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h3 className="font-bold md:text-3xl text-xl">10+</h3>
                  <p className="text-gray-500">Global Partners </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:basis-3/12 basis-full order-first md:order-last">
            <img src="/images/achievement.png" alt="award" className="md:w-10/12 w-8/12 md:ml-auto mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

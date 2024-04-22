import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

type TPartner = {
  imageUrl: string;
  color: string;
};

const partnersArr: TPartner[] = [
  { imageUrl: "/images/amazon.png", color: "#0E0E0E" },
  { imageUrl: "/images/hadrian.png", color: "#ffff" },
  { imageUrl: "/images/sens.png", color: "#0E0E0E" },
  { imageUrl: "/images/magic.png", color: "#ffff" },
  { imageUrl: "/images/fd.png", color: "#0E0E0E" },
  { imageUrl: "/images/scarlet.png", color: "#ffff" },
  { imageUrl: "/images/lion.png", color: "#0E0E0E" },
  { imageUrl: "/images/lda.png", color: "#0E0E0E" },
  { imageUrl: "/images/amazon.png", color: "#0E0E0E" },
  { imageUrl: "/images/hadrian.png", color: "#ffff" },
  { imageUrl: "/images/sens.png", color: "#0E0E0E" },
  { imageUrl: "/images/magic.png", color: "#ffff" },
  { imageUrl: "/images/fd.png", color: "#0E0E0E" },
  { imageUrl: "/images/scarlet.png", color: "#ffff" },
  { imageUrl: "/images/lion.png", color: "#0E0E0E" },
  { imageUrl: "/images/lda.png", color: "#0E0E0E" },
];

export const Partners = () => {
  const [emblaRef] = useEmblaCarousel({loop: true,align:"start"},[AutoScroll()]);

  return (
    <section className="p-4 py-12 lg:p-0">
      <div className="flex flex-col lg:gap-y-24 gap-y-16">
        <div className="text-center">
          <h2 className="capitalize relative inline-block text-3xl before:absolute before:inline-block before:left-0 before:top-full before:w-full before:h-1 before:bg-blue-500">
            our partners
          </h2>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container pr-7">
            {partnersArr.map((partner,index) => (
              <div className="embla__slide" key={partner.imageUrl+index}>
                <div
                  className={`p-4 lg:p-6 lg:py-12 flex items-center justify-center h-full lg:h-40`}
                  style={{ backgroundColor: partner.color }}
                >
                  <img src={partner.imageUrl} alt="partner" className="w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

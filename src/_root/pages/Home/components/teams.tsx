type TTeam = {
  name: string;
  title: string;
  previousTitle?: string;
  image: string;
};
const teams: TTeam[] = [
  {
    name: "JAMES GILLINGHAM",
    title: "CHIEF EXECUTIVE OFFICER",
    previousTitle: "Prev Chairman of the Board FINXFLO",
    image: "/images/ceo.png",
  },
  // {
  //   name: "ADAM LAMPREY",
  //   title: "CHIEF OPERATION OFFICER",
  //   image: "/images/coo.png",
  // },
  {
    name: "ROGER JONES",
    title: "HEAD OF MARKETING",
    image: "/images/cmo.png",
  },
  {
    name: "ADEDAMOLA ADENIYI",
    title: "PRODUCT MANAGER",
    image: "/images/pm.png",
  },
  // {
  //   name: "TARIQ KARANOUH",
  //   title: "CUSTOMER SEVICE",
  //   image: "/images/cs.png",
  // },
  {
    name: "RIZAL DEWANTARA",
    title: "GRAPHIC DESIGNER",
    image: "/images/gd.png",
  },
  {
    name: "SYED ASAD HUSSAIN",
    title: "UI/UX DESIGNER",
    image: "/images/uiux.png",
  },
];

const Team = ({ team,size }: { team: TTeam ,size?:"large" | "small"}) => {
  const { name, title, image, previousTitle } = team;
  const sizeClass = size === "large" ? "w-36 h-36 -top-2/4 translate-y-1/4" :"2-28 h-28 -top-2/4 translate-y-1/3";
  return (
    <div className="p-6 pt-24 pb-12  bg-[#0C1431] text-center relative rounded-2xl">
      <img
        src={`${image}`}
        alt="ceo"
        className={`rounded-full ${sizeClass} mx-auto absolute  left-2/4 -translate-x-2/4`}
      />
      <div>
        <h4 className="text-lg uppercase mb-2">{name}</h4>
        <p className="text-emerald-400 ">{title}</p>
      </div>
      {previousTitle ? <p className="mt-8">{previousTitle}</p> : null}
    </div>
  );
};

export const Teams = () => {
  const [ceo, ...rest] = teams;
  return (
    <section className="px-4 py-12 lg:p-24 bg-[#050918]">
      <div className="flex flex-col gap-y-32 lg:w-10/12 mx-auto">
        <div className="text-center mb-20 lg:mb-0">
          <h2 className="capitalize relative inline-block text-3xl before:absolute before:inline-block before:left-0 before:top-full before:w-full before:h-1 before:bg-blue-500">
            our team
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-36 w-full">
          <div className="lg:basis-3/12 basis-full">
            <Team team={ceo} size="large" />
          </div>
          <div className="lg:basis-8/12 basis-10/12 w-10/12 lg:w-auto mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-y-36 gap-y-32">
              {rest.map((team) => (
                <Team key={team.name} team={team} size="small" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

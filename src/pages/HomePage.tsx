import HERO_IMAGE from "../assets/IMAGES/HERO_IMAGE.png";
import { PlantsCategories } from "../components/Categories";

const HomePage = () => {
  return (
    <section className="flex flex-col">
      <div className="grid relative lg:grid-cols-2 items-center">
        <div className="absolute lg:static text-gray-100 left-[1rem] bottom-4 right-[0.5rem] lg:text-gray-900 z-20 top-[15rem] flex flex-col lg:gap-6 text-start order-2 md:order-1 justify-start">
          <div>
            <h2 className=" line-clamp-2 md:text-[30px] font-sans  font-semibold text-xl  lg:font-medium ">
              Find perfect plants for your home
            </h2>
          </div>
          <div>
            <span className="line-clamp-2 font-sans font-medium text-lg md:text-[20px]">
              Beautiful plants that encourage <br className="md:block hidden" />
              you to get creative
            </span>
          </div>

          <button className="lg:text-md  w-[8rem] md:w-[12rem] text-gray-100 bg-gray-900 font-serif font-medium lg:px-6 py-1 items-center md:py-3">
            SHOP NOW
          </button>
        </div>
        <div className="lg:py-20 relative  md:order-2 order-1 w-full  h-full  flex justify-end items-end">
          <div className="relative  ">
            <img
              src={HERO_IMAGE}
              alt="FLOWER IMAGE"
              className="object-cover h-[50vh] lg:h-[80vh] w-[100vw] z-0 "
            />
          </div>
        </div>
      </div>
      {/* second section */}
      <div>
        <PlantsCategories />
      </div>
    </section>
  );
};

export { HomePage };

import HERO_IMAGE from "../assets/IMAGES/HERO_IMAGE.png";
import { PlantsCategories } from "../components/Categories";

const HomePage = () => {
  return (
    <section className="flex flex-col">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="flex flex-col lg:gap-6 text-start justify-start">
          <div>
            <h2 className=" line-clamp-2 lg:text-[56px] font-serif font-medium text-gray-900">
              Find perfect plants <br /> for your home
            </h2>
          </div>
          <div>
            <span className="line-clamp-2 font-serif font-medium lg:text-[20px]">
              Beautiful plants that encourage <br /> you to get creative
            </span>
          </div>

          <button className="lg:text-md w-[12rem] text-gray-100 bg-gray-900 font-serif font-medium lg:px-6 py-3">
            SHOP NOW
          </button>
        </div>
        <div className="lg:py-20 flex justify-end items-end">
          <div>
            <img
              src={HERO_IMAGE}
              alt="FLOWER IMAGE"
              className="object-cover "
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

import JUNGLE from "../assets/IMAGES/JUNGLE_PLANTS.jpg";
import OUTDOOR from "../assets/IMAGES/OUTDOOR_PLANTS.jpg";
import INDOOR from "../assets/IMAGES/INDOOR_PLANTS.jpg";
import ROOM from "../assets/IMAGES/ROOM_PLANTS.jpg";

type CategoryTypes = {
  INDOOR: string;
  OUTDOOR: string;
  JUNGLE: string;
  ROOM: string;
};

const CATEGORY_IMAGES: CategoryTypes = {
  INDOOR: INDOOR,
  OUTDOOR: OUTDOOR,
  JUNGLE: JUNGLE,
  ROOM: ROOM,
};

const ImageCardStyle =
  "flex flex-col  md:text-start lg:text-[24px] font-serif font-medium";

const ImageStyle = "object-fill rounded-sm cursor-pointer shadow-xl";

const PlantsCategories = () => {
  return (
    <div className="flex flex-col">
      <span className="lg:text-[36px] font-serif text-center text-gray-900 lg:my-12 my-6 text-xl ">
        Categories
      </span>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <div className={ImageCardStyle}>
          <img
            src={CATEGORY_IMAGES.JUNGLE}
            className={ImageStyle}
            alt="jungle plants"
          />
          <span className="">Jungle Plants</span>
        </div>
        <div className={ImageCardStyle}>
          <img
            src={CATEGORY_IMAGES.INDOOR}
            className={ImageStyle}
            alt="Indoor Plants"
          />
          <span> Indoor Plants</span>
        </div>
        <div className={ImageCardStyle}>
          <img
            src={CATEGORY_IMAGES.OUTDOOR}
            className={ImageStyle}
            alt="Outdoor Plants"
          />
          <span>Outdoor Plants</span>
        </div>
        <div className={ImageCardStyle}>
          <img
            src={CATEGORY_IMAGES.ROOM}
            className={ImageStyle}
            alt="Room Plants"
          />
          <span>Room Plants</span>
        </div>
      </div>
    </div>
  );
};

export { PlantsCategories };

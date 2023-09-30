import PRODUCT_A from "../assets/IMAGES/PRODUCT_A.jpg";
import PRODUCT_B from "../assets/IMAGES/PRODUCT_B.jpg";
import PRODUCT_C from "../assets/IMAGES/PRODUCT_C.jpg";

type ProductTypes = {
  PRODUCT_A: string;
  PRODUCT_B: string;
  PRODUCT_C: string;
};

const PRODUCTS: ProductTypes = {
  PRODUCT_A: PRODUCT_A,
  PRODUCT_B: PRODUCT_B,
  PRODUCT_C: PRODUCT_C,
};

const ImageStyle =
  "object-cover h-[45vh] lg:h-[60vh] w-full rounded-sm cursor-pointer relative shadow-xl";
const gridItemStyle =
  "flex flex-col justify-center text-start gap-1 lg:gap-5 relative ";

const FeaturedPlants = () => {
  return (
    <div className="flex flex-col mb-12 lg:mb-24">
      <span className="lg:text-4xl text-xl font-serif text-center text-gray-900 lg:my-6 py-12 lg:py-24">
        Love and work are to people what water and <br /> sunshine are to plants
      </span>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center gap-5 relative w-full h-full ">
        <div className="grid-item flex flex-col gap-2 lg:gap-4 lg:text-xl lg:px-4 py-2 lg:py-4">
          <h2 className="font-serif text-2xl lg:text-5xl">Featured</h2>
          <p>
            Our plants are 100% organic, we don't use pesticides or harmful
            chemicals.
          </p>
          <p>But please don't eat them</p>
          <button className="border border-b border-gray-900 shadow-lg border-l-gray-400 border-r-gray-400 rounded-sm border-t-gray-400">
            Shop all Favorites
          </button>
        </div>
        <div className={gridItemStyle}>
          <img
            className={ImageStyle}
            src={PRODUCTS.PRODUCT_A}
            alt="plants image"
          />
          <p className="text-gray-700 lg:text-xl">Plant-1</p>
          <p className="lg:text-xl text-gray-900 font-semibold">150$</p>
        </div>
        <div className={gridItemStyle}>
          <img
            className={ImageStyle}
            src={PRODUCTS.PRODUCT_B}
            alt="plants image"
          />
          <p className="lg:text-xl text-gray-700">Plant-2</p>
          <p className="lg:text-xl text-gray-900 font-semibold">170$</p>
        </div>
        <div className={gridItemStyle}>
          <img
            className={ImageStyle}
            src={PRODUCTS.PRODUCT_C}
            alt="plants image"
          />
          <button className="absolute block md:left-[14rem] lg:left-[16rem] left-[15.5rem] top-[1.5rem] lg:top-[3rem] shadow-md bg-gray-900 font-serif py-2 px-6 justify-center lg:px-4 text-gray-100 items-center lg:text-lg ">
            Sold Out
          </button>
          <p className="text-gray-700 lg:text-xl">Plant-3</p>
          <p className="text-gray-900 lg:text-xl font-semibold">230$</p>
        </div>
      </div>
    </div>
  );
};

export { FeaturedPlants };

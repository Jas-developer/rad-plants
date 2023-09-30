import BLOG_IMAGE_A from "../assets/IMAGES/BLOG_IMAGE_A.jpg";
import BLOG_IMAGE_B from "../assets/IMAGES/BLOG_IMAGE_B.jpg";

const BlogPlants = () => {
  return (
    <div className="grid grid-cols-1 gap-2  lg:gap-6 lg:grid-cols-2 mt-5">
      <div className="grid-item relative flex flex-col text-start ">
        <img
          src={BLOG_IMAGE_A}
          alt="plants image"
          className="rouned-sm relative shadow-xl"
        />
        <span className="flex flex-col lg:left-[28rem] absolute px-10 shadow-md rounded-sm left-[12rem] top-[1rem] bg-slate-50 ">
          <p className="text-gray-400 ">Written by:</p>
          <span className="font-semibold text-gray-900">Mellissa Bale</span>
        </span>
        <p className="text-lg text-gray-400 font-medium">Edition 291</p>
        <span className="text-lg font-medium text-gray-900">
          How to water your freaking plants so they don't die after one week
        </span>
      </div>
      <div className="grid-item relative flex flex-col text-start ">
        <img
          src={BLOG_IMAGE_B}
          alt="plants image"
          className="rouned-sm relative shadow-xl"
        />
        <span className="flex flex-col absolute px-10 shadow-md lg:left-[28rem] left-[12rem] top-[1rem] bg-slate-50 rounded-sm">
          <p className="text-gray-400 ">Written by:</p>
          <span className="font-semibold text-gray-900">Jesse Rowe</span>
        </span>
        <p className="text-gray-400 text-lg font-medium">Edition 292</p>
        <span className="text-gray-900 font-medium text-lg">
          How to repot a Monstera without killing it and foster its growth
        </span>
      </div>
    </div>
  );
};

export { BlogPlants };

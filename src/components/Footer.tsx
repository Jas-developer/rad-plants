const Footer = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:mt-12 lg:py-4 border mb-2 border-b-transparent border-t-gray-400 border-l-transparent border-r-transparent mt-8">
      <div className="flex justify-start py-8">
        <span className="text-2xl md:text-3xl font-semibold font-serif">
          Red Plants
        </span>
      </div>
      <div className="flex flex-row justify-between gap-2">
        <div className="flex flex-col gap-1 md:text-xl text-gray-900 text-base font-medium">
          <span className="text-gray-400 mb-2">Connect</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Pinterest</span>
          <span>Youtube</span>
        </div>
        <div className="flex flex-col gap-1 md:text-xl text-gray-900 text-base font-medium">
          <span className="text-gray-400 mb-2">Resources</span>
          <span>Return Policy</span>
          <span>Track An Order</span>
          <span>FAQs</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex flex-col gap-1 text-gray-900 md:text-xl text-base font-medium">
          <span className="text-gray-400">About</span>
          <span>Our Story</span>
          <span>Careers</span>
          <span>Press</span>
        </div>
      </div>
      <div className="flex flex-col  items-end gap-2 lg:gap-4 ">
        <span className="text-lg font-semibold text-gray-400">Currency</span>
        <form action="">
          <select
            name="currency"
            className="outline-none border-none text-lg font-semibold lg:h-[2rem] w-[5rem]"
          >
            <option value="US">US</option>
            <option value="EUR">EUR</option>
            <option value="PESO">PHP</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export { Footer };

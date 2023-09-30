const NewsLetter = () => {
  return (
    <div className="flex flex-col mt-12 md:mt-24 mb-8 justify-center gap-2 items-center">
      <span className="text-lg md:text-xl text-gray-900 font-medium">
        Get 15% off your next order,
      </span>
      <span className="text-lg md:text-xl text-gray-900 font-medium">
        Subscribe to our Newsletter
      </span>
      <div>
        <form action="" className="flex flex-row ">
          <input
            type="email"
            placeholder="Enter your email here"
            className="px-2 md:px-4 md:text-lg text-gray-900 font-medium text-base outline-none"
          />
          <input
            type="submit"
            value="SUBSCRIBE"
            className="bg-gray-900 md:text-lg text-gray-100 md:px-4 px-2 py-1 border border-gray-200  font-medium text-base items-center"
          />
        </form>
      </div>
    </div>
  );
};

export { NewsLetter };

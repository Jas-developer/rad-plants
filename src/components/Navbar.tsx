import { Link } from "react-router-dom";

type NavigationTypes = {
  HOME: string;
  CATALOGUE: string;
  CONTACT: string;
};

const NAVIGATION: NavigationTypes = {
  HOME: "/",
  CATALOGUE: "/catalogue",
  CONTACT: "/contact",
};

const Navbar = () => {
  return (
    <header>
      {/* large screen */}
      <div className="hidden lg:grid grid-cols-3 text-gray-900">
        <div className="flex justify-start font-serif font-semibold lg:text-[24px] items-center">
          <span>Rad Plants</span>
        </div>
        <div className="flex flex-row lg:gap-8 justify-center lg:text-[14px] font-mono items-center">
          <Link to={NAVIGATION.HOME}>Home</Link>
          <Link to={NAVIGATION.CATALOGUE}>Catalogue</Link>
          <Link to={NAVIGATION.CONTACT}>Contact</Link>
        </div>
        <div className="flex gap-8 flex-row justify-end font-mono items-center lg:text-[14px]">
          <span>Search</span>
          <span>Cart(0)</span>
        </div>
      </div>
      {/* small screen */}
    </header>
  );
};

export { Navbar };

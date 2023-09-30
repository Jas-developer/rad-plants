import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { Catalogue } from "./pages/Catalogue";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

type NavigationTypes = {
  HOME: string;
  CATALOGUE: string;
  CONTACT: string;
};

type ComponentsTypes = {
  HOME: JSX.Element;
  CATALOGUE: JSX.Element;
  CONTACT: JSX.Element;
  FOOTER: JSX.Element;
  NAVBAR: JSX.Element;
};

const NAVIGATION: NavigationTypes = {
  HOME: "/",
  CATALOGUE: "/catalogue",
  CONTACT: "/contact",
};

const COMPONENTS: ComponentsTypes = {
  HOME: <HomePage />,
  CATALOGUE: <Catalogue />,
  CONTACT: <Contact />,
  FOOTER: <Footer />,
  NAVBAR: <Navbar />,
};

const Router = () => {
  return (
    <React.Fragment>
      {COMPONENTS.NAVBAR}
      <Routes>
        <Route path={NAVIGATION.HOME} element={COMPONENTS.HOME} />
        <Route path={NAVIGATION.CATALOGUE} element={COMPONENTS.CATALOGUE} />
        <Route path={NAVIGATION.CONTACT} element={COMPONENTS.CONTACT} />
      </Routes>
      {COMPONENTS.FOOTER}
    </React.Fragment>
  );
};

export { Router };

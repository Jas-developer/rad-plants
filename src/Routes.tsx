import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { Catalogue } from "./pages/Catalogue";
import { Contact } from "./pages/Contact";

type NavigationTypes = {
  HOME: string;
  CATALOGUE: string;
  CONTACT: string;
};

type ComponentsTypes = {
  HOME: JSX.Element;
  CATALOGUE: JSX.Element;
  CONTACT: JSX.Element;
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
};

const Router = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={NAVIGATION.HOME} element={COMPONENTS.HOME} />
        <Route path={NAVIGATION.CATALOGUE} element={COMPONENTS.CATALOGUE} />
        <Route path={NAVIGATION.CONTACT} element={COMPONENTS.CONTACT} />
      </Routes>
    </React.Fragment>
  );
};

export { Router };

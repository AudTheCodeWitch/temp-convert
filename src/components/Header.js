import React from "react";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className={'w-4/5 mx-auto my-4 text-primary flex flex-row'}>
      <h1 className={'text-3xl font-poiret flex-grow self-center'}>Temp Convert</h1>
      <Toggle />
    </header>
  );
};

export default Header;

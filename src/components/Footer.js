import React from "react";
import CodeWitchLogo from "../codewitchlogo.svg";


const Footer = () => {
  return (
    <footer>
      <p>©2021 Audrea Cook</p>
      <a target="_blank" href="https://codewitch.dev"><img src={CodeWitchLogo} alt="AudTheCodeWitch Logo" className={'w-12'} /></a>
    </footer>
  );
};

export default Footer;

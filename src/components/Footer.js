import React from 'react';
import CodeWitchLogo from "../assets/codewitchlogo.svg";

const Footer = () => {
  return (
    <footer className={'p-4'}>
      <a target="_blank" rel="noreferrer" href="https://codewitch.dev">
        <img src={CodeWitchLogo} alt="AudTheCodeWitch Logo" className={'w-12 mx-auto mb-2'} />
      </a>
      <p className={'text-secondary text-xs text-center'}>©2021 Audrea Cook</p>
    </footer>
  );
};

export default Footer;

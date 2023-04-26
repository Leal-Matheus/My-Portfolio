import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from '@/assets/styles/home.module.scss'
import Image from 'next/image';
import Logo from '../assets/img/originalLogo.png';
import IconTranslate from '../assets/img/IconTrad.png';

const enUS = {
    aboutMe: "About Me",
    contactMe: "Contact Me",
  }
  const ptBR = {
    aboutMe: "Sobre Mim",
    contactMe: "Meu Contato",
  
  }

const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { locale } = useRouter();
  const traducao = locale == "en-US" ? enUS : ptBR

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <Image src={Logo} className={styles.logoHeader} alt='Logo'/>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-icon-line ${isOpen ? "open" : ""}`}></div>
        <div className={`menu-icon-line ${isOpen ? "open" : ""}`}></div>
        <div className={`menu-icon-line ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        <li className="menu-item">{traducao.aboutMe}</li>
        <Image src={IconTranslate} className="dropdown-toggle" alt='Icon Translate' data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu" data-bs-theme="dark">
              <li><a className="dropdown-item" href='/en-US'>English</a></li>
              <li><a className="dropdown-item" href='/pt-BR'>Portugues</a></li>
            </ul>
        <li className="menu-item">{traducao.contactMe}</li>
        {/* Adicione mais itens de menu conforme necessário */}
      </ul>
    </nav>
  );
};

export default Hamburguer;
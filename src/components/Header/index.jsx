import './style.css';
import Lupa from '../../assets/search1.png';

import { RxAccessibility } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { LiaSearchMinusSolid } from "react-icons/lia";
import { BsAlignCenter, BsArrowCounterclockwise } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs";

import Logo from '../../assets/logo.svg';
import MenuBoxModel from '../../models/MenuBoxModel';
import { useState } from 'react';

import ImageUserIcon from '../../assets/fotousericon.svg';

const FaixaTopo = () => {
  return (
    <div className='faixa-topo-fixa'>
      {/* <div className='menu-login'>
        <img className='iconLogin' src={ImageUserIcon} alt="" />
        <div><a className='loginbutton' href='/sigin'>Login / Cadastre-se</a></div>
      </div> */} 

        {/* CÓDIGO COMENTADO ATÉ DEFINIR SE HAVERÁ LOGIN E CADASTRAMENTO DO USUÁRIO */}


    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para o menu
  const [isSearchActive, setIsSearchActive] = useState(false); // Estado para a barra de pesquisa
  const [query, setQuery] = useState(""); // Texto da pesquisa
  const [filteredData, setFilteredData] = useState([]); // Resultados filtrados
  const [fontSize, setFontSize] = useState(16); // Estado para acessibilidade
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para dark mode

  // Dados disponíveis para a pesquisa
  const searchData = [
    { id: 1, name: "Início", link: "/" },
    { id: 2, name: "Notícias", link: "/news" },
    { id: 3, name: "Quem Somos", link: "/us" },
    { id: 4, name: "Contacts", link: "/contacts" },
    { id: 5, name: "Trabalhe Conosco", link: "/work-with-us" },
  ];

  const AlternarMenu = () => {
    setIsOpen(!isOpen); // Alterna entre aberto e fechado
  };

  const toggleSearchBar = () => {
    setIsSearchActive(!isSearchActive); // Alterna a barra de pesquisa
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    const results = searchData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(results);
  };

  const handleIncreaseFont = () => {
    setFontSize((prevSize) => prevSize + 2);
    document.body.style.fontSize = `${fontSize + 2}px`;
  };

  const handleDecreaseFont = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 10));
    document.body.style.fontSize = `${Math.max(fontSize - 2, 10)}px`;
  };

  const handleResetFont = () => {
    setFontSize(16);
    document.body.style.fontSize = "16px";
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Alterna a classe no body
  };

  return (
    <header>
      <FaixaTopo />
      {isOpen && <MenuBoxModel />}
      <div className="display-desktop">
        <img id="imgLogo" src={Logo} alt="" />
        <h1 id="titulo-empresa">VIAÇÃO<br />PRAIA SOL</h1>

        <ul className="lista-menu">
          <li className="item-lista-menu"><a href="/">Início</a></li>
          <li className="item-lista-menu"><a href="/news">Notícias</a></li>
          <li className="item-lista-menu"><a href="/us">Quem Somos</a></li>
          <li className="item-lista-menu"><a href="/contacts">Contacts</a></li>
          <li className="item-lista-menu"><a href="/work-with-us">Trabalhe Conosco</a></li>
        </ul>

        <div onClick={AlternarMenu} className="display-mobile">
          <GiHamburgerMenu />
        </div>

        <div className="search-container">
          <button className="search-icon" onClick={toggleSearchBar}>
            <img className="btnBusca" src={Lupa} alt="Buscar" />
          </button>
          {isSearchActive && (
            <div>
              <input
                type="text"
                className="search-bar"
                placeholder="Pesquisar em todo o site..."
                value={query}
                onChange={handleSearch}
              />
              {query && (
                <div className="search-results">
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <a key={item.id} href={item.link}>
                        {item.name}
                      </a>
                    ))
                  ) : (
                    <p>Nenhum resultado encontrado</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="dropdown-accessibility">
          <button className="dropdown-button">
            <RxAccessibility className="iconAccessibility" />
          </button>
          <div className="dropdown-menu">
            <button onClick={handleIncreaseFont}>Aumentar Fonte <LiaSearchPlusSolid /></button>
            <button onClick={handleDecreaseFont}>Diminuir Fonte <LiaSearchMinusSolid /></button>
            <button onClick={handleResetFont}>Redefinir Fonte <BsArrowCounterclockwise /></button>
            <button onClick={toggleDarkMode} className='dark-mode-toggle'>
              {isDarkMode ? "Modo Claro" : "Modo Escuro"}
              <BsCircleHalf className='dark-mode-icon' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

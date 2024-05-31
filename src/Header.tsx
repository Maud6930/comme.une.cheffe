import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import "./formations";
import "./contactPage";
import "./about"

interface StarProps {
  style: React.CSSProperties;
}

const Star: React.FC<StarProps> = ({ style }) => {
  return <div className="star" style={style} />;
};

const Header: React.FC = () => {
  const starsCount = 100;
  const stars = Array.from({ length: starsCount }).map(() => {
    const starStyle = {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${Math.random() * 1.5 + 0.5}s`,
      animationDelay: `${Math.random() * 1.5 + 0.5}s`
    };

    return <Star style={starStyle} key={Math.random()} />;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-[#E4D2BB] text-white p-5 text-center overflow-hidden">
      {stars}
      <div className="container relative z-10">
        <h1 className="m-0 font-serif text-7xl">Comme une cheffe</h1>
        <h2 className="m-0 font-serif text-6xl">By Qayla's family</h2>
      </div>
      <div className="menu-container absolute top-0 right-0 p-5">
        <div
          className="burger-menu-icon cursor-pointer text-5xl hover:bg-antiquewhite transition-colors duration-200"
          onClick={toggleMenu}
        >
          ☰
        </div>
        <div className={`menu-items ${isMenuOpen ? 'block' : 'hidden'} absolute top-12 right-0 bg-white shadow-md w-52`}>
          <a href="/inscription" className="block p-3 text-black hover:bg-gray-200">Inscription</a>
          <a href="/connexion" className="block p-3 text-black hover:bg-gray-200">Connexion</a>
          <Link to="/about" className="block p-3 text-black hover:bg-gray-200">À propos</Link>
          <Link to="/ContactPage" className="block p-3 text-black hover:bg-gray-200">Contact</Link>
          <Link to="/Formations" className="block p-3 text-black hover:bg-gray-200">Nos formations</Link>
        </div>
      </div>
      <nav className="mt-5">
      <ul className="flex justify-center space-x-6">
    <li><a href="#convives" className="text-white">Formule convives</a></li>
    <li><a href="#Cheffe" className="text-white">Formule Cheffe</a></li>
    <li><a href="#entrepreneur" className="text-white">Formule entrepreneur</a></li>
    <li><a href="#apropos" className="text-white">À propos</a></li>
  </ul>
      </nav>
    </header>
  );
};

export default Header;

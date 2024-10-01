import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.querySelector(".header");

    if (btnNavEl) {
      btnNavEl.addEventListener("click", () => {
        if (headerEl) headerEl.classList.toggle("nav-open");
      });
    }
  }, []);

  return (
    <header className="header">
      <a href="/omnifood">
        <img className="logo" alt="Omnifood logo" src="/src/pages/OmniFood/img/omnifood-logo.png" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="#how">How it works</a></li>
          <li><a className="main-nav-link" href="#meals">Meals</a></li>
          <li><a className="main-nav-link" href="#testimonials">Testimonials</a></li>
          <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
          <li><a className="main-nav-link nav-cta" href="#cta">Try for free</a></li>
        </ul>
      </nav>
      <button className="btn-mobile-nav">
        <svg className="icon-mobile-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
        <svg className="icon-mobile-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </header>
  );
};

export default Header;

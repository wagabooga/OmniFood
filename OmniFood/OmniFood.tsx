import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import React Router's Link component
import Header from './header';
import HeroSection from './hero';
import HowItWorks from './howitworks';
import Meals from './meals';
import Testimonials from './testimonials';
import Pricing from './pricing';
import CallToAction from './calltoaction';
import Footer from './footer';

import './styles/general.css';
import './styles/style.css';
import './styles/queries.css';

const OmniFood: React.FC = () => {
  useEffect(() => {
    const yearEl = document.querySelector(".year");
    if (yearEl) {
      const currentYear = new Date().getFullYear();
      yearEl.textContent = currentYear.toString();
    }

    // Intersection observer for sticky header behavior
    const sectionHeroEl = document.querySelector(".section-hero");
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );

    if (sectionHeroEl) {
      obs.observe(sectionHeroEl);
    }

    function checkFlexGap() {
      const flex = document.createElement("div");
      flex.style.display = "flex";
      flex.style.flexDirection = "column";
      flex.style.rowGap = "1px";

      flex.appendChild(document.createElement("div"));
      flex.appendChild(document.createElement("div"));

      document.body.appendChild(flex);
      const isSupported = flex.scrollHeight === 1;
      if (flex.parentNode) flex.parentNode.removeChild(flex);

      if (!isSupported) document.body.classList.add("no-flexbox-gap");
    }
    checkFlexGap();
  }, []);

  return (
    <>
      <Helmet>
        <title>Omnifood &mdash; Never cook again!</title>
        <meta
          name="description"
          content="Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal tastes and nutritional needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default OmniFood;

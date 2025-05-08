import React from "react";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-copy">
        <span className="hero-line">
          A{" "}
          <img
            src="https://framerusercontent.com/images/0pm0YMy5C3Wnyy3wwxyelg47gO4.png"
            alt="avatar"
          />
          designer working
        </span>
        <br />
        <span className="hero-line">with startups globally.</span>
        <br />
        <span className="hero-line">Currently steering the</span>
        <br />
        <span className="hero-line">
          ship at{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 54 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="54" height="54" rx="12" fill="#171717" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.9974 29.0268C18.4554 33.9741 15.3152 38.1199 11 40.0164V14.9824C15.3152 16.8789 18.4554 21.0216 18.9974 25.9684V14.9825C23.7504 17.0714 27.0779 21.8855 27.0779 27.4976C27.0779 33.1097 23.7504 37.9275 18.9974 40.0164V29.0268ZM35.2147 14.9825C30.4617 17.0711 27.1342 21.8881 27.1342 27.4994C27.1342 33.1107 30.4617 37.9241 35.2147 40.0164V30.3608C36.1273 34.7116 39.0784 38.2901 43 40.0164V14.9825C39.0784 16.7057 36.1273 20.2862 35.2147 24.6377V14.9825Z"
              fill="white"
            />
          </svg>
          <a href="https://haptic.studio" target="_blank" rel="noopener">
            Haptic.
          </a>
        </span>
      </p>
    </section>
  );
}

export default Hero;
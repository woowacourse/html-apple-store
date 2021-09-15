export const BREAK_POINT = {
  DESKTOP: "1068px",
  TABLET: "734px",
};

export const globalMediaQueryStyle = `
  @media screen and (min-width: ${BREAK_POINT.TABLET}) {
    .nav-wrapper--mobile {
      top: -5000px;
    }

    .nav-wrapper {
      top: 0;
    }

    .hero {
      height: var(--hero-content-height);
    }

    .hero__description h2 {
      font-size: 56px;
    }
  
    .hero__description h3 {
      font-size: 28px;
      max-width: 500px;
    }

    .hero__watch-logo {
      width: 170px;
      height: 65px;
      background-image: url("./src/images/watch-logo-medium.png");
    }

    .hero__ipad-mini-logo {
      width: 221px;
      height: 44px;
      background-image: url("./src/images/ipad-mini-logo-medium.png");
    }
  }
  
  @media screen and (min-width: ${BREAK_POINT.DESKTOP}) {
    .hero__description h2 {
      font-size: 60px;
    }
  
    .hero__description h3 {
      font-size: 30px;
    }

    .hero__watch-logo {
      width: 218px;
      height: 83px;
      background-image: url("./src/images/watch-logo-large.png");
    }
  }
`;

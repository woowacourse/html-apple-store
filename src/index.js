import { renderPromotionElement } from "./renderPromotionElement.js";

const promotionElementInfos = [
  {
    title: "iPhone 13 Pro",
    description:
      "A dramatically more powerful camera system. An all‑new OLED display with ProMotion. The world’s fastest smartphone chip. A huge leap in battery life.",
    buttonTexts: ["Learn more", "View pricing"],
    descriptionPositionInDesktop: {
      top: "250px",
      left: "20vw",
    },
    bgImg: {
      y: "130%",
      bgPositionInDesktop: {
        x: "65vw",
        y: "150px",
      },
      desktop: "./src/images/iphone-pro-large.jpg",
      tablet: "./src/images/iphone-pro-medium.jpg",
      mobile: "./src/images/iphone-pro-small.jpg",
    },
  },
  {
    title: "iPhone 13",
    description:
      "Our most advanced dual‑camera system ever. An even brighter OLED display. A lightning‑fast chip that leaves the competition behind. A huge leap in battery life.",
    buttonTexts: ["Learn more", "View pricing"],
    descriptionPositionInDesktop: {
      top: "250px",
      left: "60vw",
    },
    bgImg: {
      width: "100%",
      bgPositionInDesktop: {
        x: "5vw",
        y: "-250px",
      },
      desktop: "./src/images/iphone-large.jpg",
      tablet: "./src/images/iphone-medium.jpg",
      mobile: "./src/images/iphone-small.jpg",
    },
    backgroundColor: "#34283c",
    reverseFontColor: true,
  },
  {
    title: `<span class="hero__watch-logo">Apple Watch Series 7</span>`,
    description:
      "The largest, most advanced Always‑On Retina display. The most durable Apple Watch ever. Breakthrough health innovations. Up to 33% faster charging.",
    buttonTexts: ["Learn more"],
    descriptionPositionInDesktop: {
      top: "75px",
      left: "auto",
    },
    subDescription: "Available later this fall",
    bgImg: {
      size: "120%",
      y: "100%",
      bgPositionInDesktop: {
        x: "50%",
        y: "450px",
      },
      desktop: "./src/images/watch-large.jpg",
      tablet: "./src/images/watch-medium.jpg",
      mobile: "./src/images/watch-small.jpg",
    },
  },
  {
    title: `<span class="hero__ipad-mini-logo">iPad mini</span>`,
    description:
      "Powerful A15 Bionic chip. New all‑screen design. Superfast 5G. Ultra Wide front camera with Center Stage. Now in four gorgeous colors.",
    buttonTexts: ["Learn more", "Order"],
    descriptionPositionInDesktop: {
      top: "250px",
      right: "55vw",
    },
    backgroundColor: "white",
    bgImg: {
      y: "300px",
      bgPositionInDesktop: {
        x: "55vw",
        y: "150px",
      },
      desktop: "./src/images/ipad-large.jpg",
      tablet: "./src/images/ipad-medium.jpg",
      mobile: "./src/images/ipad-small.jpg",
    },
  },
  {
    title: "iPad",
    description:
      "Advanced A13 Bionic chip. True Tone technology. Ultra Wide front camera with Center Stage. Now starting at 64GB of storage.",
    buttonTexts: ["Learn more", "Order"],
    descriptionPositionInDesktop: {
      top: "250px",
      left: "60vw",
    },
    bgImg: {
      width: "100%",
      y: "90%",
      bgPositionInDesktop: {
        x: "10vw",
        y: "50%",
      },
      desktop: "./src/images/ipad-mini-large.jpg",
      tablet: "./src/images/ipad-mini-medium.jpg",
      mobile: "./src/images/ipad-mini-small.jpg",
    },
  },
];

renderPromotionElement(promotionElementInfos);

import { BREAK_POINT, globalMediaQueryStyle } from "./mediaQuery.js";

const renderingElementsToBody = [];
const stylesToPushHead = [globalMediaQueryStyle];

const genUniqueId = function* () {
  let i = 0;

  while (true) {
    yield i++;
  }
};

const getNewId = genUniqueId();

const createPromotionElementStyle = (
  elementId,
  descriptionPositionInDesktop,
  { size, x, y, bgPositionInDesktop, desktop, tablet, mobile },
  backgroundColor
) => {
  const descriptionPositionStyle = `
    top: ${descriptionPositionInDesktop.top};
    left: ${descriptionPositionInDesktop.left};
    right: ${descriptionPositionInDesktop.right};
    bottom: ${descriptionPositionInDesktop.bottom};
  `;

  const backgroundPositionStyle = `
  background-position-x: ${bgPositionInDesktop.x};
  background-position-y: ${bgPositionInDesktop.y};
  `;

  return `
    .bg-color-${elementId} {
      background-color: ${backgroundColor};
    }

    .hero__promotion-${elementId} {
      justify-content: flex-start;
    }

    .hero__bg-img-${elementId} {
      position: absolute;
      bottom: 0;
      height: 100%;
      width: 100%;
      background-image: url("${mobile}");
      background-repeat: no-repeat;
      background-position-x: ${x || "center"};
      background-position-y: ${y || "100%"};
      background-size: ${size};
    }

    @media screen and (min-width: ${BREAK_POINT.TABLET}) {
      .hero__bg-img-${elementId} {
        background-image: url("${tablet}");
      }
    }

    @media screen and (min-width: ${BREAK_POINT.DESKTOP}) {
      .hero__promotion-${elementId} {
        position: absolute;
        ${descriptionPositionStyle}
      }

      .hero__bg-img-${elementId} {
        background-image: url("${desktop}");
        ${backgroundPositionStyle}
      }
    }
  `;
};

const createHeroPromotionElement = ({
  title,
  description,
  subDescription = "",
  buttonTexts = [],
  descriptionPositionInDesktop,
  bgImg,
  backgroundColor,
  reverseFontColor = false,
}) => {
  const elementId = getNewId.next().value;
  const style = createPromotionElementStyle(
    elementId,
    descriptionPositionInDesktop,
    bgImg,
    backgroundColor
  );

  stylesToPushHead.push(style);

  const buttonElements = buttonTexts
    .map((buttonText) => `<a href="./" class="like-button">${buttonText}</a>`)
    .join("");

  return `
    <section class="hero bg-color-${elementId} ${
    reverseFontColor ? "hero--color-reverse" : ""
  }">
      <section class="hero__promotion-${elementId} hero__description">
        <h2>${title}</h2>
        <h3>
          ${description}
        </h3>
        ${
          subDescription &&
          `<span class="hero__sub-description">${subDescription}</span>`
        }
        ${
          buttonElements &&
          `<section class="hero__button-wrapper">
            ${buttonElements}
          </section>`
        }
      </section>
      <div class="hero__bg-img-${elementId}"></div>
    </section>
  `;
};

const $heros = document.querySelector(".heros");
const $style = document.querySelector(".css-in-js");

export const renderPromotionElement = (promotionElementInfos) => {
  promotionElementInfos.forEach((promotionInfo) => {
    const element = createHeroPromotionElement(promotionInfo);

    renderingElementsToBody.push(element);
  });

  $heros.innerHTML = $heros.innerHTML + renderingElementsToBody.join("");
  $style.innerHTML = stylesToPushHead.join("");
};

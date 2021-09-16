import { NAV_TYPE, navigationContents } from "./contents/navigation.js";
import { mainSectionContents } from "./contents/mainSections.js";

document.querySelector(".js-global-nav-list").innerHTML = `
  ${navigationContents.map(navItem => `
    <li class="global-nav-item">
      ${
        navItem.type === NAV_TYPE.ANCHOR 
          ? `<a href=${navItem.href}>${navItem.content}</a>`
          : `<button type="button">${navItem.content}</button>`
      }
    </li>
  `).join("")}
`;

document.querySelector("main").innerHTML = `
  ${mainSectionContents.map(mainSectionItem => `
      <section class="main-section content-direction-${mainSectionItem.direction}">
        <div class="main-section-content">
          <h2>${mainSectionItem.title}</h2>
          <h3>${mainSectionItem.subtitle}</h3>
          <div class="main-section-anchors-wrapper">
            ${mainSectionItem.anchors.map(anchor => `
              <a href=${anchor.href} class="main-section-anchor">${anchor.text}</a>
            `).join("")}
          </div>
        </div>
      </section>
  `).join("")}
`;
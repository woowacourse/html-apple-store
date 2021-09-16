const mobile = window.matchMedia('screen and (max-width: 767px)');

const navMenu = document.querySelector('.nav-menu');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

const footer = document.querySelector('footer');
const footerCheckboxes = footer.querySelectorAll('input[type="checkbox"]');

const setResponsiveUI = () => {
  if (mobile.matches) {
    navMenu.classList.add('hidden');
    mobileNavMenu.classList.remove('hidden');
    footerCheckboxes.forEach((checkbox) => {
      checkbox.classList.remove('hidden');
      checkbox.addEventListener('change', function setResponsiveCheckbox(e) {
        const menuList = e.target.closest('.menu').querySelector('ul');
        if (checkbox.checked) {
          menuList.classList.add('menu-visible');
        } else {
          menuList.classList.remove('menu-visible');
        }
      });
    });
  } else {
    navMenu.classList.remove('hidden');
    mobileNavMenu.classList.add('hidden');
    footerCheckboxes.forEach((checkbox) => {
      checkbox.classList.add('hidden');
      if (typeof setResponsiveCheckbox === 'function') {
        checkbox.removeEventListener('change', setResponsiveCheckbox);
      }
    });
  }
};

window.addEventListener('resize', setResponsiveUI);

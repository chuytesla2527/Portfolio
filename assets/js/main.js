/**
* Template Name: PhotoFolio - v1.2.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// const currentLocation = location.href;
//     if (currentLocation.includes("JAMT")){ 
// document.addEventListener('DOMContentLoaded', () => {
//   "use strict";

/**
 * Mobile nav toggle
 */
// const mobileNavShow = document.querySelector('.mobile-nav-show');
// const mobileNavHide = document.querySelector('.mobile-nav-hide');

// document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
//   el.addEventListener('click', function (event) {
//     event.preventDefault();
//     mobileNavToogle();
//   })
// });

// function mobileNavToogle() {
//   document.querySelector('body').classList.toggle('mobile-nav-active');
//   mobileNavShow.classList.toggle('d-none');
//   mobileNavHide.classList.toggle('d-none');
// }

// /**
//  * Hide mobile nav on same-page/hash links
//  */
// document.querySelectorAll('#navbar a').forEach(navbarlink => {

//   if (!navbarlink.hash) return;

//   let section = document.querySelector(navbarlink.hash);
//   if (!section) return;

//   navbarlink.addEventListener('click', () => {
//     if (document.querySelector('.mobile-nav-active')) {
//       mobileNavToogle();
//     }
//   });

// });

// /**
//  * Toggle mobile nav dropdowns
//  */
// const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

// navDropdowns.forEach(el => {
//   el.addEventListener('click', function (event) {
//     if (document.querySelector('.mobile-nav-active')) {
//       event.preventDefault();
//       this.classList.toggle('active');
//       this.nextElementSibling.classList.toggle('dropdown-active');

//       let dropDownIndicator = this.querySelector('.dropdown-indicator');
//       dropDownIndicator.classList.toggle('bi-chevron-up');
//       dropDownIndicator.classList.toggle('bi-chevron-down');
//     }
//   })
// });

// /**
//  * Scroll top button
//  */
// const scrollTop = document.querySelector('.scroll-top');
// if (scrollTop) {
//   const togglescrollTop = function () {
//     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
//   }
//   window.addEventListener('load', togglescrollTop);
//   document.addEventListener('scroll', togglescrollTop);
//   scrollTop.addEventListener('click', window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   }));
// }

// /**
//  * Initiate glightbox
//  */
// const glightbox = GLightbox({
//   selector: '.glightbox'
// });

// /**
//  * Init swiper slider with 1 slide at once in desktop view
//  */
// new Swiper('.slides-1', {
//   speed: 600,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false
//   },
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });

// /**
//  * Init swiper slider with 3 slides at once in desktop view
//  */
// new Swiper('.slides-3', {
//   speed: 600,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false
//   },
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 40
//     },

//     1200: {
//       slidesPerView: 3,
//     }
//   }
// });

/**
 * Animation on scroll function and init
 */
//   function aos_init() {
//     AOS.init({
//       duration: 1500,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });
//   }
//   window.addEventListener('load', () => {
//     aos_init();
//   });

// });

// /**
//    * Preloader
//    */
// const preloader = document.querySelector('#preloader');
// const currentURL = window.location.href;

// if (preloader && currentURL.includes("/JAMT-Portfolio/")) {
//   window.addEventListener('load', () => {
//     setTimeout(() => {
//       preloader.classList.add('loaded');
//     }, 300);
//     setTimeout(() => {
//       preloader.remove();
//     }, 1000);
//   });
// }

// if (currentURL.includes("/JAMT")) {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = "assets/scss/http/main.css";
//   document.head.appendChild(link);
// }
// }
// const preloader = document.querySelector('#preloader');
// const currentURL = window.location.href;
// if (currentURL.includes("JAMT"))
/**
 * Hide mobile nav on same-page/hash links
 */
const currentURL = window.location.href;
if (currentURL.includes("JAMT")) {

  document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });

    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
      el.addEventListener('click', function (event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');

          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper('.slides-3', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },

        1200: {
          slidesPerView: 3,
        }
      }
    });

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });

  });

  /**
     * Preloader
     */
  const preloader = document.querySelector('#preloader');
  const currentURL = window.location.href;

  if (preloader && currentURL.includes("/JAMT-Portfolio/")) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 300);
      setTimeout(() => {
        preloader.remove();
      }, 1000);
    });
  }

  if (currentURL.includes("/JAMT-Portfolio")) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/JAMT-Portfolio/assets/scss/http/main.css";
    document.head.appendChild(link);
  }

}
{
const currentURL = window.location.href;
const j_projects = [
  { name: "Netflix Null Values", url: "/JAMT-Portfolio/assets/projects/Jupyter/j_project_1.html" },
  { name: "Netflix Titles", url: "/JAMT-Portfolio/assets/projects/Jupyter/j_project_2.html" },
  // Add more projects here
];

// Function to generate the project links for "j_project"
function generateJProjectLinks() {
  const j_projectMenu = document.getElementById("j-project-menu");
  j_projects.forEach(project => {
    if (!currentURL.includes(project.url)) {
      const j_link = document.createElement("a");
      const icon = document.createElement("i");
      const projectName = document.createTextNode(" " + project.name);
      icon.classList.add("bi", "bi-file-earmark-text-fill");
      j_link.href = project.url;
      j_link.appendChild(icon);
      j_link.appendChild(projectName);
      j_projectMenu.appendChild(j_link);
    }
  });
}
}
{
const currentURL = window.location.href;
const db_projects = [
  { name: "Netflix Dashboard", url: "/JAMT-Portfolio/assets/projects/Databricks/db_project_1.html" },
  { name: "Netflix Null Values Dashboard", url: "/JAMT-Portfolio/assets/projects/Databricks/db_project_2.html" },
  { name: "Bank Analysis Dashboard", url: "/JAMT-Portfolio/assets/projects/Databricks/db_project_3.html" },
  { name: "Medical Analysis Dashboard", url: "/JAMT-Portfolio/assets/projects/Databricks/db_project_4.html" },
  // Add more projects here
];
// Function to generate the project links for "db_project"
function generateDBProjectLinks() {
  const db_projectMenu = document.getElementById("db-project-menu");
  db_projects.forEach(project => {
    if (!currentURL.includes(project.url)) {
      const db_link = document.createElement("a");
      const icon = document.createElement("i");
      const projectName = document.createTextNode(" " + project.name);
      icon.classList.add("bi", "bi-graph-up");
      db_link.href = project.url;
      db_link.appendChild(icon);
      db_link.appendChild(projectName);
      db_projectMenu.appendChild(db_link);
    }
  });
}
}
if (document.getElementById("j-project-menu"))  {
  generateJProjectLinks();}
else if (document.getElementById("db-project-menu"))  {
  generateDBProjectLinks();
}






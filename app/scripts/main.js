// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expendClass = "is-expend";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expendClass);
});
window.addEventListener("click", function (e) {
  //   menuHeader.classList.add("");
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expendClass);
  }
});
//Slick-Slider
$(document).ready(function () {
  $(".quote-container ").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
document.addEventListener("DOMContentLoaded", function () {
  var startWidth = window.outerWidth;
  window.onresize = function () {
    if (startWidth > 1024) {
      if (window.outerWidth <= 1024) {
        location.reload();
      }
    } else {
      if (window.outerWidth > 1024) {
        location.reload();
      }
    }
  };
  var QuestionsDropdown = /*#__PURE__*/function () {
    function QuestionsDropdown(container) {
      _classCallCheck(this, QuestionsDropdown);
      this.container = container;
      this.btn = this.container.querySelector(".apartments-questions-list-item__btn");
      this.content = this.container.querySelector(".apartments-questions-list-item__text");
      this.maxHeight = 0;
      this.isOpen = false;
      if (this.container && this.btn && this.content) {
        this.init();
      }
    }
    _createClass(QuestionsDropdown, [{
      key: "init",
      value: function init() {
        this.maxHeight = this.content.offsetHeight * 2 + "px";
        this.btn.addEventListener("click", this.handleClick.bind(this));
        this.close();
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.container.classList.add("_active");
        this.content.style.maxHeight = this.maxHeight;
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.container.classList.remove("_active");
        this.content.style.maxHeight = "0px";
      }
    }]);
    return QuestionsDropdown;
  }();
  var apartmentsQuestionsItems = document.querySelectorAll(".apartments-questions-list-item");
  apartmentsQuestionsItems.forEach(function (item) {
    return new QuestionsDropdown(item);
  });
  var header = document.querySelector("header.header");
  if (header) {
    var swiper = header.querySelector(".swiper.header-nav");
    if (swiper) {
      new Swiper(swiper, {
        slidesPerView: "auto",
        freeMode: true
      });
    }
  }
  var apartmentsTrendSwiper = document.querySelector(".apartments-trend-swiper");
  if (apartmentsTrendSwiper) {
    new Swiper(apartmentsTrendSwiper, {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".apartments-trend-nav__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: ""
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 0
        }
      }
    });
  }
  var apartmentsCatalogSwiper = document.querySelector(".apartments-catalog-swiper");
  if (apartmentsCatalogSwiper) {
    new Swiper(apartmentsCatalogSwiper, {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".apartments-catalog__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: ""
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 0
        }
      }
    });
  }
  var apartmentsIncomeSwiper = document.querySelector(".apartments-income-swiper");
  if (apartmentsIncomeSwiper) {
    new Swiper(apartmentsIncomeSwiper, {
      slidesPerView: "auto",
      spaceBetween: 50,
      pagination: {
        el: ".apartments-income__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: ""
      },
      breakpoints: {
        1025: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        501: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }
    });
  }
  var investmentProjectsSwiper = document.querySelector(".investment-projects__swiper");
  if (investmentProjectsSwiper && window.matchMedia("(max-width: 1024px)").matches) {
    new Swiper(investmentProjectsSwiper, {
      // freeMode: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".investment-projects__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: ""
      }
    });
  }

  // const investmentReasonSwiper = document.querySelector(".investment-reason__swiper");
  // if (investmentReasonSwiper && window.matchMedia("(max-width: 1024px)").matches) {
  //   new Swiper(investmentReasonSwiper, {
  //     slidesPerView: "auto",
  //     spaceBetween: 30,
  //     autoHeight: true,
  //     pagination: {
  //       el: ".investment-reason__bullets",
  //       type: "bullets",
  //       bulletClass: "swiper-bullet",
  //       bulletActiveClass: "swiper-bullet_active",
  //       modifierClass: "",
  //     },
  //   });
  // }

  var casePhotoSwiper = document.querySelector(".case-photo__swiper");
  if (casePhotoSwiper) {
    new Swiper(casePhotoSwiper, {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        el: ".case-photo__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: ""
      },
      breakpoints: {
        1025: {
          slidesPerView: 2
        }
      }
    });
  }
  var caseAvailableSwiper = document.querySelector(".case-available__swiper");
  if (caseAvailableSwiper && window.matchMedia("(max-width: 1024px)").matches) {
    new Swiper(caseAvailableSwiper, {
      slidesPerView: 1,
      spaceBetween: 40,
      autoHeight: true,
      pagination: {
        el: ".case-available__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: ""
      }
    });
  }
  var caseAboutSwiper = document.querySelector(".case-about__swiper");
  if (caseAboutSwiper) {
    new Swiper(caseAboutSwiper, {
      spaceBetween: 40,
      autoHeight: true,
      pagination: {
        el: ".case-about__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: ""
      }
    });
  }
  var caseProgress = document.querySelector(".case-progress");
  if (caseProgress) {
    var items = caseProgress.querySelectorAll(".case-progress-item");
    items.forEach(function (item) {
      var swiper = item.querySelector(".case-progress-item__swiper");
      var bullets = item.querySelector(".case-progress-item__bullets");
      new Swiper(swiper, {
        pagination: {
          el: bullets,
          type: "bullets",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet_active",
          modifierClass: "",
          clickable: true
        }
      });
    });
  }
  var objectsFilterSwiper = document.querySelector(".objects-filter__swiper");
  if (objectsFilterSwiper) {
    new Swiper(objectsFilterSwiper, {
      freeMode: true,
      slidesPerView: "auto",
      spaceBetween: 15
    });
  }
  var caseRegionSwiper = document.querySelector(".case-region__swiper");
  if (caseRegionSwiper && window.matchMedia("(max-width: 1024px)").matches) {
    new Swiper(caseRegionSwiper, {
      pagination: {
        el: ".case-region__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: "",
        clickable: true
      },
      slidesPerView: 1,
      breakpoints: {
        501: {
          slidesPerView: 4
        }
      }
    });
  }
});
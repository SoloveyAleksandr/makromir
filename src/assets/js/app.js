document.addEventListener("DOMContentLoaded", () => {

  const startWidth = window.outerWidth;

  window.onresize = () => {
    if (startWidth > 1024) {
      if (window.outerWidth <= 1024) {
        location.reload();
      }
    } else {
      if (window.outerWidth > 1024) {
        location.reload();
      }
    }
  }

  class QuestionsDropdown {
    constructor(container) {
      this.container = container;
      this.btn = this.container.querySelector(".apartments-questions-list-item__btn");
      this.content = this.container.querySelector(".apartments-questions-list-item__text");
      this.maxHeight = 0;
      this.isOpen = false;

      if (this.container && this.btn && this.content) {
        this.init();
      }
    }

    init() {
      this.maxHeight = this.content.offsetHeight * 2 + "px";
      this.btn.addEventListener("click", this.handleClick.bind(this));
      this.close();
    }

    handleClick() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.container.classList.add("_active");
      this.content.style.maxHeight = this.maxHeight;
    }

    close() {
      this.isOpen = false;
      this.container.classList.remove("_active");
      this.content.style.maxHeight = "0px";
    }
  }

  const apartmentsQuestionsItems = document.querySelectorAll(".apartments-questions-list-item");
  apartmentsQuestionsItems.forEach(item => new QuestionsDropdown(item));

  const header = document.querySelector("header.header");
  if (header) {
    const swiper = header.querySelector(".swiper.header-nav");

    if (swiper) {
      new Swiper(swiper, {
        slidesPerView: "auto",
        freeMode: true,
      })
    }
  }

  const apartmentsTrendSwiper = document.querySelector(".apartments-trend-swiper");
  if (apartmentsTrendSwiper) {
    new Swiper(apartmentsTrendSwiper, {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".apartments-trend-nav__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: "",
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 0,
        }
      },
    });
  }

  const apartmentsCatalogSwiper = document.querySelector(".apartments-catalog-swiper");
  if (apartmentsCatalogSwiper) {
    new Swiper(apartmentsCatalogSwiper, {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".apartments-catalog__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: "",
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 0,
        }
      },
    });
  }

  const apartmentsIncomeSwiper = document.querySelector(".apartments-income-swiper");
  if (apartmentsIncomeSwiper) {
    new Swiper(apartmentsIncomeSwiper, {
      slidesPerView: "auto",
      spaceBetween: 50,
      pagination: {
        el: ".apartments-income__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: "",
      },
      breakpoints: {
        1025: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        501: {
          slidesPerView: 3,
          spaceBetween: 0,
        }
      },
    });
  }

  const investmentProjectsSwiper = document.querySelector(".investment-projects__swiper");
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
        modifierClass: "",
      },
    });
  }

  const investmentReasonSwiper = document.querySelector(".investment-reason__swiper");
  if (investmentReasonSwiper && window.matchMedia("(max-width: 1024px)").matches) {
    new Swiper(investmentReasonSwiper, {
      slidesPerView: "auto",
      spaceBetween: 30,
      autoHeight: true,
      pagination: {
        el: ".investment-reason__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: "",
      },
    });
  }

  const casePhotoSwiper = document.querySelector(".case-photo__swiper");
  if (casePhotoSwiper) {
    new Swiper(casePhotoSwiper, {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        el: ".case-photo__bullets",
        type: "bullets",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "swiper-bullet_active",
        modifierClass: "",
      },
      breakpoints: {
        1025: {
          slidesPerView: 2,
        }
      }
    });
  }

  const caseAvailableSwiper = document.querySelector(".case-available__swiper");
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
        modifierClass: "",
      },
    });
  }

});
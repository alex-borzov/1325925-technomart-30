const bullits = document.querySelectorAll(".slider-pager-link");
const sliderArrows = document.querySelectorAll(".slider-arrow");
const keys = document.querySelectorAll(".services-slider-link");
const modalFeedback = document.querySelector(".js-modal-feedback");
const buttonCallModalFeedback = document.querySelector(".js-contacts-link");
const modalMap = document.querySelector(".js-modal-map");
const buttonCallModalMap = document.querySelector(".js-link-map");
const modalCart = document.querySelector(".js-cart-notice");
const buttonCallModalCart = document.querySelectorAll(".js-link-buy");
const buttonCloseModal = document.querySelectorAll(".modal-close");
const sortSwitches = document.querySelectorAll(".sort-button");
const sortLinks = document.querySelectorAll(".sort-link");

// console.log(buttonCallModalFeedback);

bullits.forEach(function (bullit, i) {
  bullit.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log(this.dataset.screen);
    document
      .querySelector(".slider-item--active")
      .classList.remove("slider-item--active");
    document
      .querySelector("." + this.dataset.screen)
      .classList.add("slider-item--active");
    document
      .querySelector(".slider-pager-link--active")
      .classList.remove("slider-pager-link--active");
    this.classList.add("slider-pager-link--active");
  });
});

sliderArrows.forEach(function (sliderArrow, i) {
  sliderArrow.addEventListener("click", function (evt) {
    evt.preventDefault();
    document
      .querySelector(".slider-item--first")
      .classList.toggle("slider-item--active");
    document
      .querySelector(".slider-item--second")
      .classList.toggle("slider-item--active");
    document
      .querySelector(".slider-pager-link--first")
      .classList.toggle("slider-pager-link--active");
    document
      .querySelector(".slider-pager-link--second")
      .classList.toggle("slider-pager-link--active");
  });
});

keys.forEach(function (key, i) {
  key.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log(this.dataset.slide);
    document
      .querySelector(".slider-element-item--active")
      .classList.remove("slider-element-item--active");
    // ('.' + this.dataset.slide) - получение класса соответствующего элемента слайдера из
    // аттрибута data-slide ссылки по которой кликнули
    document
      .querySelector("." + this.dataset.slide)
      .classList.add("slider-element-item--active");
    document
      .querySelector(".services-slider-link--selected")
      .classList.remove("services-slider-link--selected");
    this.classList.add("services-slider-link--selected");
  });
});

if (buttonCallModalFeedback) {
  buttonCallModalFeedback.addEventListener("click", function (evt) {
    console.log(buttonCallModalFeedback);
    console.log(modalFeedback);
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
  });
}

if (buttonCallModalMap) {
  buttonCallModalMap.addEventListener("click", function (evt) {
    console.log(evt);
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  });
}

if (buttonCallModalCart) {
  buttonCallModalCart.forEach(function (button) {
    button.addEventListener("click", function (evt) {
      console.log(evt);
      evt.preventDefault();
      modalCart.classList.add("modal-show");
    });
  });
}

if (buttonCloseModal) {
  buttonCloseModal.forEach(function (buttonClose) {
    buttonClose.addEventListener("click", function (evt) {
      this.parentElement.parentElement.classList.remove("modal-show");
    });
  });
}

if (sortSwitches) {
  sortSwitches.forEach(function (sortswitch, i) {
    sortswitch.addEventListener("click", function (evt) {
      evt.preventDefault();
      // console.log(this.dataset.screen);
      document
        .querySelector(".sort-button--active")
        .classList.remove("sort-button--active");
      this.classList.add("sort-button--active");
    });
  });
}

if (sortLinks) {
  sortLinks.forEach(function (sortLink, i) {
    sortLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      document
        .querySelector(".sort-selected")
        .classList.remove("sort-selected");
      this.classList.add("sort-selected");
    });
  });
}

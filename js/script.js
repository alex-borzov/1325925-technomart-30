const bullits = document.querySelectorAll(".slider-pager-link");
const sliderArrows = document.querySelectorAll(".slider-arrow");
const keys = document.querySelectorAll(".services-slider-link");
const modalFeedback = document.querySelector(".js-modal-feedback");
const buttonCallModalFeedback = document.querySelector(".js-contacts-link");
const buttonCloseModalFeedback = document.querySelector(".js-feedback-close");
const modalMap = document.querySelector(".js-modal-map");
const buttonCallModalMap = document.querySelector(".js-link-map");
const buttonCloseModalMap = document.querySelector(".js-map-close");
const modalBasket = document.querySelector(".js-cart-notice");
const buttonCollModalBasket = document.querySelectorAll(".js-link-buy");

console.log(buttonCallModalFeedback);

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

buttonCallModalFeedback.addEventListener("click", function (evt) {
  console.log(evt);
  evt.preventDefault();
  modalFeedback.classList.remove("modal-hidden");
});

buttonCloseModalFeedback.addEventListener("click", function () {
  modalFeedback.classList.add("modal-hidden");
});

buttonCallModalMap.addEventListener("click", function (evt) {
  console.log(evt);
  evt.preventDefault();
  modalMap.classList.remove("modal-hidden");
});

buttonCloseModalMap.addEventListener("click", function () {
  modalMap.classList.add("modal-hidden");
});

buttonCollModalBasket.addEventListener("click", function (evt) {
  console.log(evt);
  evt.preventDefault();
  modalBasket.classList.remove("modal-hidden");
});

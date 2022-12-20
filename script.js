const burgerBtn = document.querySelector(".burger-btn");
const menuListContainer = document.querySelector(".menu-list-container");

const menuList = document.querySelector(".menu-list");

const mainContainerMobile = document.querySelector(".main-container-mobile");
const mainContainer = document.querySelector(".main-container");
const footer = document.querySelector("footer");

const btnmobile = document.querySelector(".btn-mobile");

burgerBtn.addEventListener("click", () => {
  if (burgerBtn.classList.contains("burger-btn-active")) {
    burgerBtn.classList.remove("burger-btn-active");
    burgerBtn.style.backgroundImage = "url(/assets/menu-burger-open.svg)";
    footer.style.display = "flex";
    mainContainer.style.display = "flex";
    mainContainerMobile.classList.remove("menu-open");
    menuListContainer.classList.remove("menu-list-active");
    console.log("closed");
    return;
  }

  footer.style.display = "none";
  mainContainer.style.display = "none";
  mainContainerMobile.classList.add("menu-open");

  burgerBtn.style.backgroundImage = "url(/assets/menu-burger-close.svg)";
  burgerBtn.classList.add("burger-btn-active");
  menuListContainer.classList.add("menu-list-active");
  console.log("opened");
});

menuList.addEventListener("click", (e) => {
  const clickedItem =
    e.target.tagName.toLowerCase() === "a" ? e.target.parentElement : e.target;

  clickedItem.classList.add("clicked-list-item");

  const listItems = clickedItem.parentElement.children;

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i] !== clickedItem) {
      listItems[i].classList.remove("clicked-list-item");
    }
  }
});

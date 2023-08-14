document.querySelectorAll("details").forEach((el) => {
  el.classList.remove("active");
  el.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("active");
  });
});

const mail = document.querySelector(".email");
const myForm = document.querySelector("form");
const message = document.querySelector(".message");
const formBtn = document.querySelector("form .more-info");
const errorIcon = document.querySelector(".error");

formBtn.addEventListener("click", () => {
  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail.value
      )
    ) {
      mail.style.backgroundImage = "none";
      message.style.visibility = "hidden";
      return true;
    } else {
      myForm.addEventListener("submit", (e) => e.preventDefault());
      mail.style.backgroundImage = `url("../images/icon-error.svg")`;
      mail.style.backgroundRepeat = "no-repeat";
      mail.style.backgroundPosition = "96% 50%";
      message.style.visibility = "visible";
      return false;
    }
  }
  ValidateEmail(mail);
});

const tabLinks = document.querySelectorAll(".features-title");
const tabcontent = document.querySelectorAll(".section-features figure");
console.log(tabcontent);

tabLinks.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    tabLinks.forEach((t) => {
      t.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
    tabcontent.forEach((cont) => {
      cont.style.display = "none";
    });

    document.querySelector(`.${e.currentTarget.dataset.tab}`).style.display =
      "grid";
  });
});

const header = document.querySelector(".header");
const icon = document.querySelectorAll(".menu-icons .icon");

icon.forEach((i) => {
  i.addEventListener("click", function () {
    header.classList.toggle("open");
  });
});

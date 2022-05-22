function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sales@reddtechs.com",
    Password: "BE11316F0945AE534EE15491B0A187C83752",
    To: "sales@reddtechs.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

function navLinks() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (nav.classList.contains("nav-active")) {
      burger.classList.add("opened");
    } else {
      burger.classList.remove("opened");
    }
  });
}
navLinks();

const subscribeEmail = document.querySelector(".input-subscribe");
const subscribeBtn = document.querySelector(".subscribe-btn");

const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#email");
const contactMessage = document.querySelector("#message");

subscribeBtn.addEventListener("click", async () => {
  if (subscribeEmail.value.length <= 1) {
    alert("Please provide an email address");
  } else {
    const response = await fetch("https://sportbetpredict.onrender.com/api/visitor/add/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: subscribeEmail.value }),
    });
    const data = await response.json();
    if (response) {
      alert(data.message);
      setTimeout(() => {
        subscribeEmail.value = "";
      }, 3000);
    }
  }
});

document.querySelector("#contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await fetch("https://sportbetpredict.onrender.com/api/visitor/contact-us", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: contactName.value, email: contactEmail.value, message: contactMessage.value }),
  });
  const data = await response.json();
  if (response) {
    alert(data.message);
    setTimeout(() => {
      contactName.value = "";
      contactEmail.value = "";
      contactMessage.value = "";
    }, 3000);
  }
});

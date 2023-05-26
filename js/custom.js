const subscribeEmail = document.querySelector(".input-subscribe");
const subscribeBtn = document.querySelector(".subscribe-btn");

subscribeBtn.addEventListener("click", async () => {
  if (subscribeEmail.value.length <= 1) {
    alert("Please provide an email address");
  } else {
    const response = await fetch("https://sportbetpredict.onrender.com/api/visitor/add/waitlist", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: { email: subscribeEmail.value },
    });
    const data = await response.json();

    console.log(data);
  }
});

const buttons = document.querySelectorAll(".buttons-wrapper button");
const allHours = document.querySelectorAll("#hours");
const previousHours = document.querySelectorAll("#previousHours");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const activeButtons = document.querySelector(".active");
    if (activeButtons != e.target) {
      activeButtons.classList.remove("active");
      button.classList.add("active");
    }

    fetch("src/data.json")
      .then((response) => response.json())
      .then((json) => {
        const hours = [];
        for (let i = 0; i < 6; i++) {
          console.log(json[i].timeframes[e.target.value]);
          allHours[i].textContent = `${
            json[i].timeframes[e.target.value].current
          }`;

          if (json[i].timeframes[e.target.value].current == 1) {
            allHours[i].textContent += "hr";
          } else {
            allHours[i].textContent += "hrs";
          }

          previousHours[i].textContent = `Last Week - ${
            json[i].timeframes[e.target.value].previous
          }`;

          if (json[i].timeframes[e.target.value].previous == 1) {
            previousHours[i].textContent += "hr";
          } else {
            previousHours[i].textContent += "hrs";
          }
        }
      });
  });
});

document.forms[0].addEventListener("submit", function (a) {
  a.preventDefault();
  getLrs();
});

function getLrs() {
  let perHour = document.getElementById("baseCount").value;
  let Lr_Per_hr = document.getElementById("Lr-Per-hr").value;

  let getDate = new Date();
  let currentHour = getDate.getHours() % 12;  

  let lastDrinkHour = Number(Lr_Per_hr) % 12;
  let sinceLastTime = currentHour - lastDrinkHour;

  if (sinceLastTime < 0) {
    sinceLastTime += 12;
  }

  let liters = sinceLastTime * Number(perHour);

  if (Number(Lr_Per_hr) <= 12) {
    currentHour += 12;
  }

  if (liters === 1) {
    document.getElementsByTagName("span")[0].textContent = liters + " Liter";
  } else {
    document.getElementsByTagName("span")[0].textContent = liters + " Liters";
  }
}



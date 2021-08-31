let bill = document.querySelector(".bill__input");
let people = document.querySelector(".people__input");
let buttons = document.querySelectorAll(".button__percent");
let custom = document.querySelector(".custom__input");
let numbers = document.querySelectorAll("#input-number");
let amount = document.getElementById("price-amount");
let total = document.getElementById("price-total");
let reset = document.querySelector(".btn-reset");
let txtError = document.querySelector(".text__error");


//Validations
const invalid = ["e", "-", "+"];

numbers.forEach((inputs) =>
  inputs.addEventListener("keydown", (e) => {
    if (invalid.includes(e.key)) {
      e.preventDefault();
      console.log(e);
      console.log(inputs.value);
    }
  })
);

numbers.forEach((input) =>
  input.addEventListener("input", function () {
    this.value = this.value.replace(/[e\+\-]/gi, "");
  })
);

bill.addEventListener("input", () => {
  if (custom.value > 0 && people.value > 0) {
    cal();
  }
});

people.addEventListener("input", () => {
  if (people.value == 0 || people.value == "") {
    console.log("error");
    people.style.remove = "people__input";
    people.classList.add("error");
    txtError.style.visibility = "visible";
  } else {
    console.log(people.value);
    people.classList.remove("error");
    txtError.style.visibility = "hidden";
    cal()
  }
});

//Buttons Tip

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (bill.value == 0 || bill.value == "" || people.value == "") {
      e.preventDefault();
    } else {
      let tip = parseInt(btn.value);
      let TipPercent = (tip * bill.value) / 100 / people.value;
      amount.innerHTML = `$${parseFloat(TipPercent).toFixed(2)}`;
      total.innerHTML = `$${parseFloat(bill.value / people.value + TipPercent).toFixed(2)}`;
      custom.value = "";
    }
  });
});

custom.addEventListener("input", () => {
  if (people.value == 0 || bill.value == 0) {
    amount.innerHTML = "$0";
  } else {
    cal();
  }
});

const cal = () => {
  let Tipcustom = (custom.value * bill.value) / 100 / people.value;
  amount.innerHTML = `$${parseFloat(Tipcustom).toFixed(2)}`;
  total.innerHTML = `$${parseFloat(bill.value / people.value + Tipcustom).toFixed(2)}`;
};

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  custom.value = "";
  amount.innerHTML = "$0";
  total.innerHTML = "$0";
});

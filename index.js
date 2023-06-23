window.addEventListener("DOMContentLoaded", () => {
  const phoneNumberInput = document.getElementById("phone");
  phoneNumberInput.addEventListener("keydown", formatPhoneNumber);
  console.log(phoneNumberInput);
});

export function formatPhoneNumber(event) {
  let splittedPhoneValue;
  if (event.key !== "Backspace") {
    splittedPhoneValue = event.target.value.split("");
    if (splittedPhoneValue.length === 3) {
      splittedPhoneValue.push(")", " ");
      splittedPhoneValue.unshift("(");
      event.target.value = splittedPhoneValue.join("");
    }
  }
  if (splittedPhoneValue?.length === 9) {
    splittedPhoneValue.push("-");
    event.target.value = splittedPhoneValue.join("");
  }
}

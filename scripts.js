const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

//Converts to numbers
const dividendNumber = parseFloat(dividend);
const dividerNumber = parseFloat(divider);

//Checks if either input is empty
if (!dividend.trim() || !divider.trim()){
  const errorMessage = "Division not performed. Both values are required in inputs. Try again."
  result.innerText = errorMessage;
  console.error(new Error(errorMessage));
  return;
}
//Checks for valid numbers
if (isNaN(dividendNumber) || isNaN(dividerNumber)){
  const criticalErrorMessage = "Something critical went wrong. Please reload the page.";
  document.body.innerHTML = `<h1>${criticalErrorMessage}</h1>`;
  console.error(new Error(criticalErrorMessage));
  return;
}
//Checks for division by zero
if (dividerNumber === 0) {
  const errorMessage = "Division not performed. Invalid number provided. Try again";
  result.innerText = errorMessage;
  console.error(new Error(errorMessage));
} else {
//Displays result without decimals
  const divisionResult = Math.floor(dividendNumber / dividerNumber);
  result.innerText = divisionResult;
}
});
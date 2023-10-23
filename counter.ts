const numberToCount = document.getElementById("number") as HTMLDivElement | null;
const increaseButton = document.getElementById("increaseButton") as HTMLButtonElement | null;
const decreaseButton = document.getElementById("decreaseButton") as HTMLButtonElement | null;
const resetButton = document.getElementById("resetButton") as HTMLButtonElement | null;


function increaseNumber(value: number) {
  if (numberToCount) {
    const currentNumber = parseInt(numberToCount.textContent || "0", 10);
    numberToCount.textContent = (currentNumber + value).toString();
  }
}

function decreaseNumber(value: number) {
    if (numberToCount) {
      const currentNumber = parseInt(numberToCount.textContent || "0", 10);
      numberToCount.textContent = (currentNumber - value).toString();
    }
  }
  function resetNumber() {
    if (numberToCount) {
      const currentNumber = parseInt(numberToCount.textContent || "0", 10);
      numberToCount.textContent = (0).toString();
    }
  }
  

if (increaseButton) {
  increaseButton.addEventListener("click", () => {
    increaseNumber(1);
  });}

if (decreaseButton) {
    decreaseButton.addEventListener("click", () => {
      decreaseNumber(1);
    });}

    if (resetButton) {
        resetButton.addEventListener("click", () => {
          resetNumber();
        });}

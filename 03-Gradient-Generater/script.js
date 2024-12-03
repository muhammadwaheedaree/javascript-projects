const btn1 = document.getElementById("myButton1");
const btn2 = document.getElementById("myButton2");
const copyDiv = document.getElementById("copyCode");
let color1 = "#051937";
let color2 = "#008793";

const hexValues = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};

const updateGradient = () => {
  document.body.style.backgroundImage = `linear-gradient(to right top, ${color1}, ${color2})`;
  copyDiv.textContent = `background-image: linear-gradient(to right top, ${color1}, ${color2});`;
};

const handleButton1 = () => {
  color1 = hexValues();
  btn1.textContent = color1;
  btn1.style.backgroundColor = color1;
  updateGradient();
};

const handleButton2 = () => {
  color2 = hexValues();
  btn2.textContent = color2;
  btn2.style.backgroundColor = color2;
  updateGradient();
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.textContent);
  const originalText = copyDiv.textContent;
  copyDiv.textContent = "Copied to clipboard!";
  setTimeout(() => {
    copyDiv.textContent = originalText;
  }, 2000);
});

// Initialize button colors
btn1.style.backgroundColor = color1;
btn2.style.backgroundColor = color2;

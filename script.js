const canvasSize = document.getElementById("myRange").value;
const slider = document.getElementById("myRange");
const stringSlider = `${slider.value} x ${slider.value}`;
const h2Slider = document.createElement("h2");
const sliderContainer = document.getElementById("slider-container");
const colorButton = document.getElementById("color");
const eraseButton = document.getElementById("erase");
const resetButton = document.getElementById("reset");
let color = "black";

h2Slider.innerHTML = stringSlider;
h2Slider.className = "flex-center";
h2Slider.id = "h2-slider";
sliderContainer.insertBefore(h2Slider, sliderContainer.children[0]);

createCanvas(canvasSize);

slider.addEventListener("input", function () {
  h2Slider.innerHTML = `${this.value} x ${this.value}`;
});

slider.addEventListener("click", function () {
  resetCanvas();
});

colorButton.addEventListener("click", function () {
  color = "black";
});

eraseButton.addEventListener("click", function () {
  color = "white";
});

resetButton.addEventListener("click", function () {
  resetCanvas();
});

colorButton.click();

function createCanvas(canvasSize) {
  for (let i = 0; i < canvasSize; i++) {
    let subContainer = document.createElement("div");
    subContainer.className = "row";
    for (let j = 0; j < canvasSize; j++) {
      let node = document.createElement("div");
      node.className = "square";
      node.addEventListener("mouseover", function (e) {
        node.style.backgroundColor = color;
      });
      subContainer.appendChild(node);
    }
    document
      .getElementById("etch-a-sketch-container")
      .appendChild(subContainer);
  }
}

function resetCanvas() {
  const divNodes = Array.from(document.getElementsByClassName("square"));
  const etch = document.getElementById("etch-a-sketch-container");
  const sliderValue = document.getElementById("myRange").value;
  divNodes.forEach((node) => {
    node.style.backgroundColor = "#fff";
  });
  removeAllChildNodes(etch);
  createCanvas(sliderValue);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

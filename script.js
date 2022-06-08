for (let i = 0; i < 16; i++) {
  let subContainer = document.createElement("div");
  subContainer.className = "row";
  for (let j = 0; j < 16; j++) {
    let node = document.createElement("div");
    node.className = "square";
    node.addEventListener("mouseover", function (e) {
      node.style.backgroundColor = "black";
    });
    subContainer.appendChild(node);
  }
  document.getElementById("etch-a-sketch-container").appendChild(subContainer);
}

// const node = document.createElement("div");
// const textnode = document.createTextNode("Yo");
// document.getElementById("etch-a-sketch-container").appendChild(node);

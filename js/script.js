let container = document.getElementById("container")
let pixel = document.createElement("div")

let putGrid = function(x, y) {
  for (i=0; i < x; i++) {
    for (j=0; j < y; j++) {
      container.appendChild(document.createElement("div")).className = "pixel"
    }
  }
}

putGrid(5, 5)
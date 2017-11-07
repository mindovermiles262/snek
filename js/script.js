let container = document.getElementById("container")
let pixel = document.createElement("div")

let grid = {
  row0: ["1", "0", "0", "0", "0"],
  row1: ["0", "0", "0", "0", "0"],
  row2: ["0", "0", "1", "0", "0"],
  row3: ["0", "0", "0", "1", "0"],
  row4: ["0", "0", "0", "0", "1"],
}
// Object.keys(grid).length => 5

let putGrid = function(x, y) {
  for (i=0; i < x; i++) {
    let row = "row" + i
    grid[row].forEach(function(element, index) {
      if (grid[row][index] === "0") {
        let pixel = container.appendChild(document.createElement("div"))
        pixel.className = "pixel"
        pixel.style.backgroundColor = "goldenrod"
      } else {
        container.appendChild(document.createElement("div")).className = "pixel"
      }
    })
  }
}

putGrid(5, 5)
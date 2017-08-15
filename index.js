
var width = 9
var length = 60
var tWidth = 40
var tHeight = 40
var nextRow = length+1

function generateInitialTiles(width, length, type) {
  let allTiles = []
  let tileRows = []
  for(let m = 0; m < length; m++) {
    let tileRow = []
    for(let n = 0; n < width; n++) {
      let div = document.createElement("div");
      div.style.position = 'absolute'
      div.style.width = `${tWidth}px`;
      div.style.height = `${tHeight}px`;
      if(type === 'checkerboard') {
        allTiles.length % 2 === 0 ? div.style.background = '#666' : div.style.background = '#DDD'
      } else {
        seed = Math.random()
          if (seed < .2) {
            div.className = 'water'
            div.style.backgroundImage = "url('./images/water.gif')";
          }
          else if (.2 < seed < .5) {
            div.className = 'sand'
            div.style.backgroundImage = "url('./images/sand.png')";

          }
          else if (.5 < seed < .8) {
            div.className = 'sand2'
            div.style.backgroundImage = "url('./images/sand2.png')";

          }
          else if (.8 < seed < .9) {
            div.className = 'grass2'
            div.style.backgroundImage = "url('./images/grass2.png')";
          } else if (.9 < seed < 1) {
            div.className = 'grass'
            div.style.backgroundImage = "url('./images/grass.png')";
          } else {
            div.className = 'grass2'
            div.style.backgroundImage = "url('./images/grass2.png')";
          }
      }
      div.style.top = `${n*tHeight}px`
      div.style.left = `${m*tWidth}px`
      allTiles.push(div)
      tileRow.push(div)
    }
    tileRows.push(tileRow)
  }

  c = document.getElementById("container")
  allTiles = blendTerrain(allTiles)
  allTiles.forEach((element) => {
    c.appendChild(element)
  })

}

function blendTerrain(allTiles) {
  debugger
}
generateInitialTiles(width, length, 'map')

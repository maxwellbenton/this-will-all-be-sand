
var width = 9
var length = 60
var tWidth = 40
var tHeight = 40
var nextRow = length+1

function generateInitialTiles(width, length, type) {
  let allTiles = []
  let overlayTiles = []
  let tileRows = []
  for(let m = 0; m < length; m++) {
    let tileRow = []
    for(let n = 0; n < width; n++) {
      let div = document.createElement("div");
      div.style.position = 'absolute'
      div.style.width = `${tWidth}px`;
      div.style.height = `${tHeight}px`;
      div.style.top = `${n*tHeight}px`
      div.style.left = `${m*tWidth}px`
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
          else if (.5 < seed < .7) {
            div.className = 'sand'
            div.style.backgroundImage = "url('./images/sand.png')";
          }
          else if (.7 < seed < .701) {
            div.className = 'stone'
            div.style.backgroundImage = "url('./images/stone.png')";
          }
          else if (.701 < seed < .9) {
            div.className = 'grass'
            div.style.backgroundImage = "url('./images/grass.png')";
          } else if (.9 < seed < 1) {
            div.className = 'grass'
            div.style.backgroundImage = "url('./images/grass2.png')";
          } else {
            div.className = 'grass'
            div.style.backgroundImage = "url('./images/grass2.png')";
          }
      }

      allTiles.push(div)
      tileRow.push(div)
    }
    tileRows.push(tileRow)
  }

  c = document.getElementById("container")
  allTiles = mergeTerrain(allTiles)
  overlayTiles = blendTerrain(allTiles)
  allTiles.forEach((element) => {
    c.appendChild(element)
  })
  overlayTiles.forEach((element) => {
    c.appendChild(element)
  })

}
function blendTerrain(allTiles) {
  overlayTiles = []
  for(let p = width; p < allTiles.length; p++) {
    if (allTiles[p].className === 'grass' || allTiles[p].className === 'water') {

      if (allTiles[p-width-1]) {
        if (allTiles[p-width-1].className === 'sand') {
          var div = allTiles[p]
          div.className = 'sand-overlay'
          div.style.background = "transparent url('./images/sand_upper_left.png')";
          div.style.zIndex = "2"
          overlayTiles.push(div)
        }
      }
      if (allTiles[p-width].className === 'sand') {
        var div = allTiles[p]
        div.className = 'sand-overlay'
        div.style.background = "transparent url('./images/sand_left.png')";
        div.style.zIndex = "2"
        overlayTiles.push(div)
      }
      if (allTiles[p-width+1].className === 'sand') {
        var div = allTiles[p]
        div.className = 'sand-overlay'
        div.style.background = "transparent url('./images/sand_lower_left.png')";
        div.style.zIndex = "2"
        overlayTiles.push(div)
      }
      if (allTiles[p-1].className === 'sand') {
        var div = allTiles[p]
        div.className = 'sand-overlay'
        div.style.background = "transparent url('./images/sand_top.png')";
        div.style.zIndex = "2"
        overlayTiles.push(div)
      }
      if (allTiles[p+1]) {
        if (allTiles[p+1].className === 'sand') {
          var div = allTiles[p]
          div.className = 'sand-overlay'
          div.style.background = "transparent url('./images/sand_bottom.png')";
          div.style.zIndex = "2"
          overlayTiles.push(div)
        }
      }
      if (allTiles[p+width-1]) {
        if (allTiles[p+width-1].className === 'sand') {
          var div = allTiles[p]
          div.className = 'sand-overlay'
          div.style.background = "transparent url('./images/sand_upper_right.png')";
          div.style.zIndex = "2"
          overlayTiles.push(div)
        }
      }
      if (allTiles[p+width]) {
        if (allTiles[p+width].className === 'sand') {
          var div = allTiles[p]
          div.className = 'sand-overlay'
          div.style.background = "transparent url('./images/sand_right.png')";
          div.style.zIndex = "2"
          overlayTiles.push(div)
        }
      }
      if (allTiles[p+width+1]) {
        if (allTiles[p+width+1].className === 'sand') {
          var div = allTiles[p]
          div.className = 'sand-overlay'
          div.style.background = "transparent url('./images/sand_lower_right.png')";
          div.style.zIndex = "2"
          overlayTiles.push(div)
        }
      }
    }
  }
  return overlayTiles
  //
  //
  //     if (allTiles[p-width-1]) {
  //       allTiles[p-width-1].className === 'sand' ?  : false
  //     } else {
  //
  //     }
  //     neighbors.push(allTiles[p-width] ?allTiles[p-width].className === 'sand' ? true : false : false)
  //     neighbors.push(allTiles[p-width+1] ? allTiles[p-width+1].className === 'sand' ? true : false : false)
  //     neighbors.push(allTiles[p-1] ? allTiles[p-1].className === 'sand' ? true : false : false)
  //     neighbors.push(allTiles[p+1] ? allTiles[p+1].className === 'sand' ? true : false : false)
  //     neighbors.push(allTiles[p+width-1] ? allTiles[p+width-1].className === 'sand' ? true : false : false)
  //     neighbors.push(allTiles[p+width] ? allTiles[p+width].className === 'sand' ? true : false : false)
  //     neighbors.push(allTiles[p+width+1] ? allTiles[p+width+1].className === 'sand' ? true : false : false)
  //   } else {
  //     overlayTiles[p].style.opacity = "0"
  //   }
  //   // switch (neighbors) {
  //   //   case [true,true,true,true,true,true,true,true]:
  //   //     allTiles[p].style.background = "transparent url('./images/sand_all.png')";
  //   //     break;
  //   //   case [true,false,true,true,true,true,true,true]:
  //   //     allTiles[p].style.backgroundImage = "url('./images/sand_no_left.png')";
  //   //     break;
  //   //   case [true,true,true,false,true,true,true,true]:
  //   //     allTiles[p].style.backgroundImage = "url('./images/sand_no_top.png')";
  //   //     break;
  //   //   case [true,true,true,true,false,true,true,true]:
  //   //     allTiles[p].style.backgroundImage = "url('./images/sand_no_bottom.png')";
  //   //     break;
  //   //   case [true,true,true,true,true,true,false,true]:
  //   //     allTiles[p].style.backgroundImage = "url('./images/sand_no_right.png')";
  //   //     break;
    //   case [true,false,true,false,false,true,false,true]:
    //     allTiles[p].style.backgroundImage = "url('./images/sand_corners.png')";
    //     break;
    //   case [true,true,true,true,true,true,true,true]:
    //     allTiles[p].style.backgroundImage = "url('./images/sand_all.png')";
    //     break;
    //   default:

    // }
  // }
  // newOverlays = overlayTiles.forEach((tile, i) => {
  //   debugger
  //   // if (allTiles[i].className === 'grass' || allTiles[i].className === 'water') {
  //   //   neighbors = [allTiles[i-width-1].className === 'sand' ? true : false, allTiles[i-width].className === 'sand' ? true : false, allTiles[i-width+1].className === 'sand' ? true : false, allTiles[i-1].className === 'sand' ? true : false, allTiles[i+1].className === 'sand' ? true : false, allTiles[i+width-1].className === 'sand' ? true : false, allTiles[i+width].className === 'sand' ? true : false, allTiles[i+width+1].className === 'sand' ? true : false]
  //   //   debugger
  //   // } else {
  //   //   tile.style.opacity = "0"
  //   // }
  //   // return tile
  // })
  // return ov
}

function mergeTerrain(allTiles) {

  for(let o = 0; o < allTiles.length/10; o++) {
    r = Math.floor(Math.random() * (allTiles.length - width) + width)
    nearbyTiles = [allTiles[r-width].className,allTiles[r-1].className,allTiles[r+1].className]
    if (allTiles[r+width] === 'undefined') {
      allTiles[r].className = 'sand'
      allTiles[r].style.backgroundImage = "url('./images/sand.png')"

    } else if (allTiles[r-1].className === allTiles[r+1].className) {
      if (allTiles[r].className === 'grass') {
        allTiles[r].style.backgroundImage = "url('./images/grass.png')"
      } else if (allTiles[r].className === 'sand') {
        allTiles[r].style.backgroundImage = "url('./images/sand.png')"
      } else {
        allTiles[r].style.backgroundImage = "url('./images/water.gif')"
      }
    } else if (nearbyTiles.includes('sand')) {
      allTiles[r].style.backgroundImage = "url('./images/sand.png')"
    } else {
      allTiles[r].style.backgroundImage = "url('./images/grass2.png')"
    }

  }
  return allTiles
}
generateInitialTiles(width, length, 'map')

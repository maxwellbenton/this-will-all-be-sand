
var width = 9
var length = 60
var tWidth = 40
var tHeight = 40
var nextRow = length+1

function generateInitialTiles(width, length, type) {
  let aT = []
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
        aT.length % 2 === 0 ? div.style.background = '#666' : div.style.background = '#DDD'
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

      aT.push(div)
      tileRow.push(div)
    }
    tileRows.push(tileRow)
  }

  c = document.getElementById("container")
  aT = mergeTerrain(aT)
  overlayTiles = blendTerrain(aT)
  aT.forEach((element) => {
    c.appendChild(element)
  })
  overlayTiles.forEach((element) => {
    c.appendChild(element)
  })

}
function mergeTerrain(aT) {
    for (let o = 0; o < aT.length; o++) {
      if(aT[o].className !== 'sand') {
        let img = document.createElement("IMG");
        nearbyTiles = [aT[o-width-1] ? aT[o-width-1].className !== aT[o].className ? true : false : false,
                      aT[o-width] ? aT[o-width].className !== aT[o].className ? true : false : false,
                      aT[o-width+1] ? aT[o-width+1].className !== aT[o].className ? true : false : false,
                      aT[o-1] ? aT[o-1].className !== aT[o].className ? true : false : false,
                      aT[o+1] ? aT[o+1].className !== aT[o].className ? true : false : false,
                      aT[o+width-1] ? aT[o+width-1].className !== aT[o].className ? true : false : false,
                      aT[o+width] ? aT[o+width].className !== aT[o].className ? true : false : false,
                      aT[o+width+1] ? aT[o+width+1].className !== aT[o].className ? true : false : false]
        switch (nearbyTiles.join(' ')) {
          case "false true false true true false true false":
          case "true true false true true false true false":
          case "false true true true true false true false":
          case "false true false true true true true false":
          case "false true false true true false true true":

          case "true true true true true false true false":
          case "true true false true true true true false":
          case "true true false true true false true true":
          case "false true true true true true true false":
          case "false true true true true false true true":
          case "false true false true true true true true":
          case "true true true true true true true false":
          case "true true true true true false true true":
          case "true true false true true true true true":
          case "false true true true true true true true":
          case "false true false false true true true true":
          case "true true true true true true true true":  img.src = "images/sand_all.png"; break;
          case "true true false false false false false false":
          case "false true true false false false false false":
          case "true true true false false false false false":
          case "true true true false false true false true":
          case "true true false false false true false true": //corners
          case "true true true false false true false false": //corners
          case "true true true false false false false true": //corners
          case "false true false false false true false false": //corners
          case "false true false false false true false true": //corners
          case "true true false false false true false false": //corners
          case "false true true false false false false true": //corners
          case "false true true false false false false true": //corners
          case "true true false false false false false true":
          case "false true true false false true false false": //corners
          case "false true false false false false false false": img.src = "images/sand_left.png"; break;
          case "true false false true false true false false":
          case "true false false true false false false false":
          case "false false false true false true false false":
          case "false false false false true true false true": //right corner
          case "true false true true false true false true": //corners missing
          case "false false true true false true false true": //corners missing
          case "true false false true false true false true": //corners
          case "true false true false true true false true": //corners
          case "false false true true false false false true": //corners
          case "true false true true false false false true": //corners
          case "true false true true false true false false": //corners
          case "true false false false true true false false": //corners
          case "true false true true false false false false": //corners
          case "false false true true false true false false": //corners
          case "true false false true false false false true": //corners
          case "false false false true false false false false": img.src = "images/sand_top.png"; break;
          case "false false true false true false false false":
          case "false false false false true false false true":
          case "false false true false true false false true":
          case "false false true false true true false false": //corners
          case "true false true false true true false false": //corners
          case "true false true false true false false false": //corners
          case "false false true false true true false true": //corners
          case "true false true false true true true false": //corners
          case "true false true false true false false true": //corners
          case "true false false false true true false true": //corners
          case "true false false false true false false true": //corners
          case "true false false false true false false false": //corners
          case "false false false false true false false false": img.src = "images/sand_bottom.png"; break;
          case "false false false false false true true false":
          case "false false false false false false true true":
          case "false false false false false true true true":
          case "false false true false false true true true":
          case "false false false false true true true true":
          case "true false true false false true true true": //corners
          case "true false true false false true true false": //corners
          case "true false false false false true true true": //corners
          case "true false true false false false true true": //corners
          case "false false true false false true true false": //corners
          case "true false true false false false true false": //corners
          case "true false false false false true true false": //corners
          case "true false false false false false true false": //corners
          case "false false true false false false true true": //corners
          case "true false false false false false true true": //corners
          case "false false true false false false true false": //corners
          case "false false false false false false true false": img.src = "images/sand_right.png"; break;
          case "true false false false false false false false": img.src = "images/sand_upper_left.png"; break;
          case "false false true false false false false false": img.src = "images/sand_lower_left.png"; break;
          case "false false false false false true false false": img.src = "images/sand_upper_right.png"; break;
          case "false false false false false false false true": img.src = "images/sand_lower_right.png"; break;
          case "true true false true false false false false":
          case "true true true true false false false false":
          case "true true true true false true false false":
          case "false true true true false false false false":
          case "false true true true false true false false":
          case "false true false true false true false false":
          case "true true false true false true false false":
          case "false false true true false false true true":
          case "true true true true false true false true":
          case "true true false true false true false true":
          case "true true true true false false false true":
          case "true true false true false false false true": //corners
          case "false true true true false false false true":
          case "false true false true false false false false": img.src = "images/sand_no_bottom_right.png"; break;
          case "false false false true false false true false":
          case "false false false true false false true false":
          case "false false false true false false true false":
          case "false false false true false false true false":
          case "false false false true false false true false":
          case "false false false true false false true false":
          case "false false true true false true true false": //need
          case "true false true true false true true false": //missing corners
          case "true false true false true true true true":
          case "false false false true false false true true":
          case "false false false true false true true true":
          case "true false true true false true true true":
          case "true false false true false true true true":

          case "false false false true false true true false":
          case "false false true true false true true true":
          case "true false true true false false true true":
          case "true false false true false false true true":
          case "false false true true false false true false":
          case "true false false true false true true false":
          case "true false true true false false true false":
          case "true false false true false false true false":
          case "false false false true false false true false":img.src = "images/sand_no_bottom_left.png"; break;
          case "true false true false true false true true": //need
          case "false false false false true true true false":
          case "false false true false true true true false":
          case "false false true false true false true true":
          case "false false false false true false true true":
          case "true false false false true true true true":
          case "true false true false true false true false": //corner
          case "true false false false true true true false": //corner
          case "true false false false true false true true": //corner
          case "false false true false true true true true":
          case "false false false false true false true false": img.src = "images/sand_no_top_left.png"; break;
          case "true true false false true false false true":
          case "true true false false true false false false":
          case "true true true false true false false true":
          case "true true true false true true false true":
          case "true true false false true true false true":
          case "false true false false true true false true":
          case "false true true false true true false false": //corners
          case "false true false false true true false false":
          case "false true true false true false false false": //corners
          case "false true false false true false false true": //corners
          case "false true false false true false false false": img.src = "images/sand_no_top_right.png"; break;
          case "false true true false false true false true": img.src = "images/sand_right_corners.png"; break;
          case "false true false true false false false true": img.src = "images/sand_no_bottom_right_corner.png"; break;
          case "true true true true true false false true":
          case "true true false true true true false true":
          case "true true true true true true false true":
          case "true true true true true false false false":
          case "false true true true true true false false":
          case "true true true true true true false false":
          case "false true true true true false false false":
          case "false true true true true true false true":
          case "false true true true true false false true":
          case "true true false true true true false false":
          case "false true false true true true false true":
          case "false true false true true true false false":
          case "false true false true true false false false":
          case "true true false true true false false false":
          case "false true false true true false false true":
          case "true true false true true false false true": img.src = "images/sand_no_right.png"; break;
          case "false false false true true true true true":
          case "true false true true true false true true":
          case "false false true true true true true true":
          case "true false false true true true true true":
          case "false false true true true true true false":
          case "true false true true true true true false":
          case "false false false true true true true false":
          case "false false false true true false true true":
          case "false false false true true false true false":
          case "true false true true true false true false":
          case "true false false true true false true true":
          case "false false true true true false true true":
          case "true false false true true true true false":
          case "false false true true true false true false":
          case "true false false true true false true false":
          case "true false true true true true true true": img.src = "images/sand_no_left.png"; break;
          case "true false false false false false false true": img.src = "images/sand_left_diag_corners.png"; break;
          case "false true true false true true true false":
          case "false true false false true false true true":
          case "true true true false true true true false":
          case "false true true false true false true true":
          case "false true true false true true true true":
          case "true true true false true true true true":
          case "true true true false true true true false":
          case "true true true false true false true false":
          case "true true false false true true true false":
          case "true true true false true false true true":
          case "false true false false true true true false":
          case "true true false false true false true true":
          case "false true true false true false true false":
          case "true true false false true false true false":
          case "false true false false true false true false": img.src = "images/sand_no_top.png"; break;
          case "true true true true false true true true":
          case "true true true true false false true true":
          case "true true true true false true true false":
          case "false true false true false true true true":
          case "false true true true false false true true":
          case "false true true true false false true false":
          case "false true true true false true true true":
          case "false true false true false false true true":
          case "true true true true false false true false":
          case "true true false true false true true true":
          case "true true false false true true true true":
          case "false true true true false true true false":
          case "true true false true false true true false":
          case "false true false true false true true false":
          case "true true false true false false true true":
          case "true true false true false false true false":
          case "false true false true false false true false": img.src = "images/sand_no_bottom.png"; break;
          case "false false false true false true false true":
          case "false false false true false false false true":
            //need top right corner
            img.src = "images/sand_top.png";
            break;
          case "true  false true true false false false false":
          case "false false true true false false false false":
            //need top left corner
            img.src = "images/sand_top.png";
            break;
          case "false false false false false true false true":
            img.src = "images/sand_right_corners.png";
            break;
          case "false true true true false true false true":
          case "false true false true false true false true":
            //need top left right corner
            img.src = "images/sand_no_bottom_right.png";
            break;
          case "false false false false true true false false":
            //need bottom right corner
            img.src = "images/sand_bottom.png";
            break;
          case "false false true false false false false true":
            img.src = "images/sand_bottom_corners.png";
            break;
          case "false false true false false true false true":
            img.src = "images/sand_all_corners.png";
            break;
          case "false false true true true false false true":
          case "false false true true true false false false":
          case "false false true true true true false true":
          case "true false true true true false false false":
          case "false false false true true true false true":
          case "false false false true true true false false":
          case "true false true true true true false true":
          case "false false false true true false false false":
          case "false false true true true true false false":
          case "true false true true true false false true":
          case "true false false true true true false true":
          case "true false false true true true false false":
          case "true false true true true true false false":
          case "true false false true true false false true":
          case "true false false true true false false false":
          case "false false false true true false false true": img.src = "images/sand_no_left_right.png"; break;
          case "true true false false false false true true":
          case "true true true false false true true false":
          case "true true true false false true true true":
          case "true true false false false true true false":
          case "false true true false false true true false":
          case "false true true false false true true true":
          case "true true true false false false true false":
          case "true true true false false false true true":
          case "false true true false false false true false":
          case "false true false false false true true true":
          case "true true false false false true true true":
          case "false true true false false false true true":
          case "true true false false false false true false":
          case "false true false false false false true false":
          case "false true false false false false true true":
          case "false true false false false true true false": img.src = "images/sand_no_bottom_top.png"; break;
          case "true true true false true false false false":
          case "false true true false true true false true":
          case "true true false false true true false false": //corners
          case "false true true false true false false true": img.src = "images/sand_no_top_right.png"; break;
          case "true false false false true false true false":
          case "true true true false true true false false":
          case "false false true false true false true false": img.src = "images/sand_no_top_left.png"; break;
          case "true false false false false true false true":
          case "true false true false false true false true":
          case "true false true false false true false false": img.src = "images/sand_all_corners.png"; break;
          case "true false true false false false false false":
          case "true false true false false false false true": img.src = "images/sand_left_corners.png"; break;
          case "true false false false false true false false": img.src = "images/sand_top_corners.png"; break;
          case "false false true false false true false false": img.src = "images/sand_right_diag_corners.png"; break;
          case "false false false false false false false false": break;

          default:
            debugger
            img.src = "images/obsidian.png";
            break;
        }
        aT[o].appendChild(img)
      }

    }
  return aT
}
// function blendTerrain(overlayTiles, aT) {
//   newOverlays = overlayTiles.forEach((tile, i) => {
//     if (aT[i].className === 'grass' || aT[i].className === 'water') {
//       neighbors = [aT[i-width-1].className === 'sand' ? true : false, aT[i-width].className === 'sand' ? true : false, aT[i-width+1].className === 'sand' ? true : false, aT[i-1].className === 'sand' ? true : false, aT[i+1].className === 'sand' ? true : false, aT[i+width-1].className === 'sand' ? true : false, aT[i+width].className === 'sand' ? true : false, aT[i+width+1].className === 'sand' ? true : false]
//       debugger
//     } else {
//       tile.style.opacity = "0"
//     }
//     return tile
//   })
//   return newOverlays
// }

function mergeTerrain(aT) {

  for(let o = 0; o < aT.length/10; o++) {
    r = Math.floor(Math.random() * (aT.length - width) + width)
    nearbyTiles = [aT[r-width].className,aT[r-1].className,aT[r+1].className]
    if (aT[r+width] === 'undefined') {
      aT[r].className = 'sand'
      aT[r].style.backgroundImage = "url('./images/sand.png')"

    } else if (aT[r-1].className === aT[r+1].className) {
      if (aT[r].className === 'grass') {
        aT[r].style.backgroundImage = "url('./images/grass.png')"
      } else if (aT[r].className === 'sand') {
        aT[r].style.backgroundImage = "url('./images/sand.png')"
      } else {
        aT[r].style.backgroundImage = "url('./images/water.gif')"
      }
    } else if (nearbyTiles.includes('sand')) {
      aT[r].style.backgroundImage = "url('./images/sand.png')"
    } else {
      aT[r].style.backgroundImage = "url('./images/grass2.png')"
    }

  }
  return aT
}
generateInitialTiles(width, length, 'map')

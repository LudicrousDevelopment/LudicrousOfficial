let MAZE_SIZE = prompt("Maze size? (Try 60)");

const cellsize = ~~(window.innerWidth / MAZE_SIZE),
			spacing = 2*cellsize,
			hbias = Math.random() * 0.5,
      vbias = Math.random() * 0.5;
let cells = [],
		y = 0;

const speee = cellsize / 3;

let pixel_density,
    finished_maze;

let lastX = true;

let perc = 0,
    solved = false;

function setup() {
	createCanvas(~~(windowWidth/spacing + 1)*spacing-cellsize, ~~(windowHeight/spacing + 1)*spacing-cellsize);
	background(0);
	for(let i = 0; i < width/spacing - 1; i ++) cells.push(i)
	noStroke();

  pixelDensity(1);
  pixel_density = pixelDensity();
  textAlign(CENTER, CENTER);
  textFont("Verdana");
  textSize(windowWidth / 30);
}

let playing = false;
let playerX = 0, playerY = 0;

function draw() {
  if(!playing) {
    let new_cells = new Array(cells.length).fill(false)
    //translate(cellsize, cellsize)
    for(let i = 0; i < cells.length; i ++){			// Randomly merge cells of different sets
      rect(i*spacing, y, cellsize, cellsize)
      if(i === cells.length-1) continue
      if((random() > 0.5-hbias/2 || y > height-spacing*2)&& cells[i] != cells[i+1]){
        let old = cells[i+1]
        for(let i2 = 0; i2 < cells.length; i2 ++){
          if(cells[i2] === old) cells[i2] = cells[i]
        }
        rect(i*spacing+cellsize, y, cellsize, cellsize)
      }
      //text(cells[i], i*spacing+5, y+15)
    }
    if(y < height-spacing * 2){						// Create (at least one) random connection for each set
      let sets = {}
      for(let i = 0; i < cells.length; i ++){
        if(sets[cells[i]]) sets[cells[i]].push(i)
        else sets[cells[i]] = [i]
      }
      for(let set in sets){
        const cells_in_set = sets[set],
              chosen_cells = []
        let n_items = 1+~~random(cells_in_set.length+vbias*cells_in_set.length)
        for(let n = 0; n < n_items; n ++){
          chosen_cells.push(random(cells_in_set))
        }
        for(let i = 0; i < chosen_cells.length; i ++){
          rect(chosen_cells[i]*spacing, y+cellsize, cellsize, cellsize)
          new_cells[chosen_cells[i]] = set
        }
      }
      let least_set = Math.max(...new_cells)+1
      for(let i = 0; i < new_cells.length; i ++){			// Fill in the new cells with new sets
        if(new_cells[i] !== false) continue
        new_cells[i] = least_set;
        least_set++
      }
    }
    cells = [...new_cells]		// Update cells and repeat
    y += spacing
    if(y >= height - spacing) {
      playing = true;
      finished_maze = get();
    }
    return;
  }
  background(0);
  image(finished_maze, 0, 0);
 
  loadPixels();

  let offsetX = 0, offsetY = 0;

  if(keyIsDown(87) || keyIsDown(38)){
    offsetY -= speee;
  }
  if(keyIsDown(83) || keyIsDown(40)){
    offsetY += speee;
  }
  if(keyIsDown(65) || keyIsDown(37)){
    offsetX -= speee;
  }
  if(keyIsDown(68) || keyIsDown(39)){
    offsetX += speee;
  }

  if((offsetX || offsetY) && !solved){
    if(lastX){ // favor the last key to be pressed
      for(let x = 0; x < cellsize; x += cellsize - 1){
        for(let y = 0; y < cellsize; y += cellsize - 1){
          if(pixels[((Math.round(playerY) + y) * width + Math.round(playerX) + x + Math.round(offsetX)) * pixel_density * 4] !== 255){
            for(let i = 0; i < 10000; i ++){
              if(pixels[((Math.round(playerY) + y) * width + Math.round(playerX) + x + Math.sign(offsetX)) * pixel_density * 4] !== 255) break;
              playerX += Math.sign(offsetX);
            }
            offsetX = 0;
          }
        }
      }

      playerX += offsetX;

      for(let x = 0; x < cellsize; x += cellsize - 1){
        for(let y = 0; y < cellsize; y += cellsize - 1){
          if(pixels[((Math.round(playerY) + y + Math.round(offsetY)) * width + Math.round(playerX) + x) * pixel_density * 4] !== 255){
            for(let i = 0; i < 10000; i ++){
              if(pixels[((Math.round(playerY) + y + Math.sign(offsetY)) * width + Math.round(playerX) + x) * pixel_density * 4] !== 255) break;
              playerY += Math.sign(offsetY);
            }
            
            offsetY = 0;
          }
        }
      }

      playerY += offsetY;
    } else {
      for(let x = 0; x < cellsize; x += cellsize - 1){
        for(let y = 0; y < cellsize; y += cellsize - 1){
          if(pixels[((Math.round(playerY) + y + Math.round(offsetY)) * width + Math.round(playerX) + x) * pixel_density * 4] !== 255){
            for(let i = 0; i < 10000; i ++){
              if(pixels[((Math.round(playerY) + y + Math.sign(offsetY)) * width + Math.round(playerX) + x) * pixel_density * 4] !== 255) break;
              playerY += Math.sign(offsetY);
            }
            
            offsetY = 0;
          }
        }
      }

      playerY += offsetY;

      for(let x = 0; x < cellsize; x += cellsize - 1){
        for(let y = 0; y < cellsize; y += cellsize - 1){
          if(pixels[((Math.round(playerY) + y) * width + Math.round(playerX) + x + Math.round(offsetX)) * pixel_density * 4] !== 255){
            for(let i = 0; i < 1000; i ++){
              if(pixels[((Math.round(playerY) + y) * width + Math.round(playerX) + x + Math.sign(offsetX)) * pixel_density * 4] !== 255) break;
              playerX += Math.sign(offsetX);
            }
            offsetX = 0;
          }
        }
      }

      playerX += offsetX;
    }
  }

  fill(0, 255, 0);
  rect(width - cellsize * 3, height - cellsize * 3, cellsize, cellsize);
  fill(255, 0, 0);
  rect(playerX, playerY, cellsize, cellsize);

  if(Math.abs(playerX - (width - cellsize * 3)) < cellsize/2 && Math.abs(playerY - (height - cellsize * 3)) < cellsize/2) {
    solved = true;
    fill(0, 190 * perc);
    rect(0, 0, width, height);
    fill(255);
    text("Good job, you solved the maze!", width/2, height/2);

    if(perc < 1) perc += 0.06;
    if(perc > 1) perc = 1;
  }
}

function keyPressed(){
	if(key === "p") saveCanvas("maze", "png")

  if(key === "w" || key === "s" || keyCode === UP_ARROW || keyCode === DOWN_ARROW) { lastX = false; return false; }
  else if(key === "a" || key === "d" || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) { lastX = true; return false; }
}
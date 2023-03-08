var player = {
    left: 350,
    top: 600
}

var enemies = [
    {left: 50, top: 200},
    {left: 150, top: 200},
    {left: 650, top: 200},
    {left: 250, top: 200},
    {left: 350, top: 100},
    {left: 550, top: 200},
    {left: 450, top: 200},

]
  

var missiles = []
        
function drawPlayer() {
    content = "<div class='player' style='left: "+player.left+"px; top: "+player.top+"px'></div>";
    document.getElementById("players").innerHTML = content;
}

function drawEnemies() {
    content = "";
    for(var i=0; i<enemies.length; i++) {
    content += "<div class='enemy' style='left: "+enemies[i].left+"px; top: "+enemies[i].top+"px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}

function drawMissiles() {
    content = "";
    for(var i=0; i<missiles.length; i++) {
    content += "<div class='missile' style='left: "+missiles[i].left+"px; top: "+missiles[i].top+"px'></div>";
    }
    document.getElementById("missiles").innerHTML = content;
}

function moveEnemies() {
    for(var i=0; i<enemies.length; i++) {
    enemies[i].top += 1;
    }
}

function moveMissiles() {
    for(var i=0; i<missiles.length; i++) {
    missiles[i].top -= 20;
    }
}

document.onkeydown = function(e) {
    if(e.keyCode == 37) {
    if(player.left > 10) {
        player.left -= 10;
    }
    }
    if(e.keyCode == 39) {
    if(player.left < 820) {
        player.left += 10;
    }
    }
    if(e.keyCode == 38) {
    if(player.top > 10) {
        player.top -= 10;
    }
    }
    if(e.keyCode == 40) {
    if(player.top < 760) {
        player.top += 10;
    }
    }
    if(e.keyCode == 32) {
    missiles.push({left: player.left+51, top: player.top});
    drawMissiles();
    }
    drawPlayer();
}
    

      
function gameLoop() {
    moveEnemies();
    moveMissiles();
    drawPlayer();
    drawEnemies();
    drawMissiles();
    setTimeout(gameLoop, 32);
}

gameLoop();
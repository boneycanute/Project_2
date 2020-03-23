positionLog = 

[["a8","b8","c8","d8","e8","f8","g8","h8"],

  ["a7","b7","c7","d7","e7","f7","g7","h7"],

 ["a6","b6","c6","d6","e6","f6","g6","h6"],

 ["a5","b5","c5","d5","e5","f5","g5","h5"],

 ["a4","b4","c4","d4","e4","f4","g4","h4"],

 ["a3","b3","c3","d3","e3","f3","g3","h3"],

 ["a2","b2","c2","d2","e2","f2","g2","h2"],

 ["a1","b1","c1","d1","e1","f1","g1","h1"]];



var queen = {
  direction:"S",
  posX : 4,
  posY : 0,
  whereabouts : "e8"
};

/* Operations */
changeDirection("E")
//moveForward()

function execute()
{
    console.log("reach");
    var x = document.getElementById("dir").value;
    console.log(x);
    var y = parseInt(document.getElementById("hop").value);
    console.log(y);
    changeDirection(x);
    jumpForward(y);
    console.log("X:"+queen.posX+" Y:"+queen.posY );
document.getElementById("demo").innerHTML = "Position :"+queen.whereabouts+" X:"+queen.posX+" Y:"+queen.posY +" Direction:"+queen.direction;
}

function moveForward()
{
    switch(queen.direction)
    {
        case "N":
            queen.posY=queen.posY-1;
            break;
        case "S":
            queen.posY=queen.posY+1;
            break;
        case "E":
            queen.posX=queen.posX+1;
            break;
        case "W":
            queen.posX=queen.posX-1;
            break;
        case "NE":
            queen.posY=queen.posY-1;
            queen.posX=queen.posX+1;
            break;
        case "NW":
            queen.posY=queen.posY-1;
            queen.posX=queen.posX+1;
            break;
        case "SE":
            queen.posY=queen.posY+1;
            queen.posX=queen.posX+1;
            break;
        case "SW":
            queen.posY=queen.posY+1;
            queen.posX=queen.posX+1;
            break;
    }
    queen.whereabouts=positionLog[queen.posX][queen.posY];
}

function jumpForward(steps)
{
    switch(queen.direction)
    {
        case "N":
            queen.posY=queen.posY-steps;
            break;
        case "S":
            queen.posY=queen.posY+steps;
            break;
        case "E":
            queen.posX=queen.posX+steps;
            break;
        case "W":
            queen.posX=queen.posX-steps;
            break;
        case "NE":
            queen.posY=queen.posY-steps;
            queen.posX=queen.posX+steps;
            break;
        case "NW":
            queen.posY=queen.posY-steps;
            queen.posX=queen.posX+steps;
            break;
        case "SE":
            queen.posY=queen.posY+steps;
            queen.posX=queen.posX+steps;
            break;
        case "SW":
            queen.posY=queen.posY+steps;
            queen.posX=queen.posX+steps;
            break;
    }
    if(check(queen.posX,queen.posY))
    {
        return;
    }
    else
    {
        queen.whereabouts=positionLog[queen.posX][queen.posY];
    }
    
}

function changeDirection(dir)
{
    queen.direction=dir;
}

function check(x,y)
{
    if(x<0 || y<0 || x>7 || y>7)
        {
            console.error("Out of bounds");
            return true;
        }
        return false;
}



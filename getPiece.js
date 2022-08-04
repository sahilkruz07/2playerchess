function getX(val)
{
    var X = val[0];
    var x;

        if(X == 'a')
        {
            x = 0;
        }

        if(X == 'b')
        {
            x = 1;
        }

        if(X == 'c')
        {
            x = 2;
        }

        if(X == 'd')
        {
            x = 3;
        }

        if(X == 'e')
        {
            x = 4;
        }

        if(X == 'f')
        {
            x = 5;
        }

        if(X == 'g')
        {
            x = 6;
        }

        if(X == 'h')
        {
            x = 7;
        }
    
    return x;
}

function getY(val)
{
    var Y = val[1];

    var y;

    if(Y == '8')
    {
        y = 0;
    }

    if(Y == '7')
    {
        y = 1;
    }
    
    if(Y == '6')
    {
        y = 2;
    }
    
    if(Y == '5')
    {
        y = 3;
    }
    
    if(Y == '4')
    {
        y = 4;
    }

    if(Y == '3')
    {
        y = 5;
    }

    if(Y == '2')
    {
        y = 6;
    }

    if(Y == '1')
    {
        y = 7;
    }

    return y;
}

function getPiece(val)
{
    var x,y;
    x = getX(val);
    y = getY(val);
    
    if(active[y][x] == 0)
    {
        tilePiece(val,x,y);
    }
    else
    {
        movePiece(val,x,y);
    }
                
}


function tilePiece(val,x,y)
{
    setActive();
    generateBoard();
    
    currentPiece = chess[y][x]; 
    previousX = x;
    previousY = y;
        
    if(chess[y][x] != 0)
    {
        showTiles(chess[y][x] , y , x);
        document.getElementById(val).style.backgroundColor = "#157777";
    }
}

function movePiece(val,x,y)
{
    chess[previousY][previousX] = 0;
    chess[y][x] = currentPiece;
    generateBoard();
    setActive();
}
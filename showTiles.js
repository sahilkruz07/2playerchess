function showTiles(value , y , x)
{
    var tile;

    //White Pawn
    if(value == 1)
    {
        if(y-1 >= 0 && chess[y-1][x] == 0)
        {
            tile  = col[x] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x] = 1;

            if(y == 6 && chess[y-2][x] == 0)
            {
                tile  = col[x] + row[y-2];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-2][x] = 1;
            }
        }

        if(y-1 >= 0 && x-1 >= 0 && chess[y-1][x-1] < 0)
        {
            tile  = col[x-1] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x-1] = 1;
        }

        if(y-1 >= 0 && x+1 <= 7 && chess[y-1][x+1] < 0)
        {
            tile  = col[x+1] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x+1] = 1;
        }


        
    }

    //Black Pawn
    if(value == -1)
    {
        if(y+1 < 8 && chess[y+1][x] == 0)
        {
            tile  = col[x] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x] = 1;

            if(y == 1 && chess[y+2][x] == 0)
            {
                tile  = col[x] + row[y+2];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+2][x] = 1;
            }
        }

        if(y+1 <= 7 && x-1 >= 0 && chess[y+1][x-1] > 0)
        {
            tile  = col[x-1] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x-1] = 1;
        }

        if(y+1 <= 7 && x+1 <= 7 && chess[y+1][x+1] > 0)
        {
            tile  = col[x+1] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x+1] = 1;
        }

    }

    //White Knight
    if(value == 3)
    {
        if(x-1 >= 0 && y-2 >= 0 && chess[y-2][x-1] <= 0)
        {
            tile  = col[x-1] + row[y-2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-2][x-1] = 1;
        }

        if(x+1 < 8 && y-2 >= 0 && chess[y-2][x+1] <= 0)
        {
            tile  = col[x+1] + row[y-2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-2][x+1] = 1;
        }

        if(x-1 >= 0 && y+2 < 8 && chess[y+2][x-1] <= 0)
        {
            tile  = col[x-1] + row[y+2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+2][x-1] = 1;
        }

        if(x+1 <8 && y+2 < 8 && chess[y+2][x+1] <= 0)
        {
            tile  = col[x+1] + row[y+2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+2][x+1] = 1;
        }

        if(x-2 >= 0 && y-1 >= 0 && chess[y-1][x-2] <= 0)
        {
            tile  = col[x-2] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x-2] = 1;
        }

        if(x-2 >= 0 && y+1 < 8 && chess[y+1][x-2] <= 0)
        {
            tile  = col[x-2] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x-2] = 1;
        }

        if(x+2 < 8 && y-1 >= 0 && chess[y-1][x+2] <= 0)
        {
            tile  = col[x+2] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x+2] = 1;
        }

        if(x+2 < 8 && y+1 < 8 && chess[y+1][x+2] <= 0)
        {
            tile  = col[x+2] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x+2] = 1;
        }
    }

    //Black Knight
    if(value == -3)
    {
        if(x-1 >= 0 && y-2 >= 0 && chess[y-2][x-1] >= 0)
        {
            tile  = col[x-1] + row[y-2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-2][x-1] = 1;
        }

        if(x+1 < 8 && y-2 >= 0 && chess[y-2][x+1] >= 0)
        {
            tile  = col[x+1] + row[y-2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-2][x+1] = 1;
        }

        if(x-1 >= 0 && y+2 < 8 && chess[y+2][x-1] >= 0)
        {
            tile  = col[x-1] + row[y+2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+2][x-1] = 1;
        }

        if(x+1 <8 && y+2 < 8 && chess[y+2][x+1] >= 0)
        {
            tile  = col[x+1] + row[y+2];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+2][x+1] = 1;
        }

        if(x-2 >= 0 && y-1 >= 0 && chess[y-1][x-2] >= 0)
        {
            tile  = col[x-2] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x-2] = 1;
        }

        if(x-2 >= 0 && y+1 < 8 && chess[y+1][x-2] >= 0)
        {
            tile  = col[x-2] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x-2] = 1;
        }

        if(x+2 < 8 && y-1 >= 0 && chess[y-1][x+2] >= 0)
        {
            tile  = col[x+2] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x+2] = 1;
        }

        if(x+2 < 8 && y+1 < 8 && chess[y+1][x+2] >= 0)
        {
            tile  = col[x+2] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x+2] = 1;
        }
    }

    //WhiteRook
    if(value == 2)
    {

        var block_x,block_y;


        block_x = 7;
        for(var i = x+1 ; i < 8 ; i++)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = 8;
            }
        }

        for(i = x+1 ; i <= block_x ; i++)
        {
            if(chess[y][i] <= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }

        }


        block_x = 0;
        for(var i = x-1 ; i >= 0 ; i--)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = -1;
            }
        }

        for(i = x-1 ; i >= block_x ; i--)
        {
            if(chess[y][i] <= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }
        }



        block_y = 7;
        for(var i = y+1 ; i < 8 ; i++)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = 8;
            }
        }

        for(i = y+1 ; i <= block_y ; i++)
        {
            if(chess[i][x] <= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }

        }


        block_y = 0;
        for(var i = y-1 ; i >= 0 ; i--)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = -1;
            }
        }

        for(i = y-1 ; i >= block_y ; i--)
        {
            if(chess[i][x] <= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }
        }


    }

    //BlackRook
    if(value == -2)
    {

        var block_x,block_y;


        block_x = 7;
        for(var i = x+1 ; i < 8 ; i++)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = 8;
            }
        }

        for(i = x+1 ; i <= block_x ; i++)
        {
            if(chess[y][i] >= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }

        }


        block_x = 0;
        for(var i = x-1 ; i >= 0 ; i--)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = -1;
            }
        }

        for(i = x-1 ; i >= block_x ; i--)
        {
            if(chess[y][i] >= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }
        }



        block_y = 7;
        for(var i = y+1 ; i < 8 ; i++)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = 8;
            }
        }

        for(i = y+1 ; i <= block_y ; i++)
        {
            if(chess[i][x] >= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }

        }


        block_y = 0;
        for(var i = y-1 ; i >= 0 ; i--)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = -1;
            }
        }

        for(i = y-1 ; i >= block_y ; i--)
        {
            if(chess[i][x] >= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }
        }


    }

    //White Bishop
    if(value == 4)
    {
        var d1 =  diag1(y,x);
        var d2 =  diag2(y,x);
        var d3 =  diag3(y,x);
        var d4 =  diag4(y,x);

        for(i=1;i<=d1;i++)
        {
            console.log("d1 "+i);
            
            if(chess[y+i][x+i]==0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
            }

            if(chess[y+i][x+i]<0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
                break;
            }

            if(chess[y+i][x+i]>0)
            {
                break;
            }

        }


        for(i=1;i<=d3;i++)
        {
            console.log("d3 "+i);
            if(chess[y-i][x-i]==0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
            }

            if(chess[y-i][x-i]<0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
                break;
            }

            if(chess[y-i][x-i]>0)
            {
                break;
            }

        }


        for(i=1;i<=d2;i++)
        {
            console.log("d2 "+i);
            if(chess[y-i][x+i]==0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
            }

            if(chess[y-i][x+i]<0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
                break;
            }

            if(chess[y-i][x+i]>0)
            {
                break;
            }

        }

        for(i=1;i<=d4;i++)
        {
            console.log("d4 "+i);
            if(chess[y+i][x-i]==0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
            }

            if(chess[y+i][x-i]<0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
                break;
            }

            if(chess[y+i][x-i]>0)
            {
                break;
            }

        }


    

    }

    // Black Bishop
    if(value == -4)
    {
        var d1 =  diag1(y,x);
        var d2 =  diag2(y,x);
        var d3 =  diag3(y,x);
        var d4 =  diag4(y,x);

        for(i=1;i<=d1;i++)
        {
            if(chess[y+i][x+i]==0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
            }

            if(chess[y+i][x+i]>0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
                break;
            }

            if(chess[y+i][x+i]<0)
            {
                break;
            }

        }


        for(i=1;i<=d3;i++)
        {
            if(chess[y-i][x-i]==0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
            }

            if(chess[y-i][x-i]>0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
                break;
            }

            if(chess[y-i][x-i]<0)
            {
                break;
            }

        }


        for(i=1;i<=d2;i++)
        {
            if(chess[y-i][x+i]==0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
            }

            if(chess[y-i][x+i]>0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
                break;
            }

            if(chess[y-i][x+i]<0)
            {
                break;
            }

        }

        for(i=1;i<=d4;i++)
        {
            if(chess[y+i][x-i]==0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
            }

            if(chess[y+i][x-i]>0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
                break;
            }

            if(chess[y+i][x-i]<0)
            {
                break;
            }

        }
    }

    //White Queen
    if(value == 5)
    {
        var block_x,block_y;


        block_x = 7;
        for(var i = x+1 ; i < 8 ; i++)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = 8;
            }
        }

        for(i = x+1 ; i <= block_x ; i++)
        {
            if(chess[y][i] <= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }

        }


        block_x = 0;
        for(var i = x-1 ; i >= 0 ; i--)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = -1;
            }
        }

        for(i = x-1 ; i >= block_x ; i--)
        {
            if(chess[y][i] <= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }
        }



        block_y = 7;
        for(var i = y+1 ; i < 8 ; i++)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = 8;
            }
        }

        for(i = y+1 ; i <= block_y ; i++)
        {
            if(chess[i][x] <= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }

        }


        block_y = 0;
        for(var i = y-1 ; i >= 0 ; i--)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = -1;
            }
        }

        for(i = y-1 ; i >= block_y ; i--)
        {
            if(chess[i][x] <= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }
        }


        var d1 =  diag1(y,x);
        var d2 =  diag2(y,x);
        var d3 =  diag3(y,x);
        var d4 =  diag4(y,x);

        for(i=1;i<=d1;i++)
        {
            console.log("d1 "+i);
            
            if(chess[y+i][x+i]==0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
            }

            if(chess[y+i][x+i]<0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
                break;
            }

            if(chess[y+i][x+i]>0)
            {
                break;
            }

        }


        for(i=1;i<=d3;i++)
        {
            console.log("d3 "+i);
            if(chess[y-i][x-i]==0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
            }

            if(chess[y-i][x-i]<0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
                break;
            }

            if(chess[y-i][x-i]>0)
            {
                break;
            }

        }


        for(i=1;i<=d2;i++)
        {
            console.log("d2 "+i);
            if(chess[y-i][x+i]==0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
            }

            if(chess[y-i][x+i]<0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
                break;
            }

            if(chess[y-i][x+i]>0)
            {
                break;
            }

        }

        for(i=1;i<=d4;i++)
        {
            console.log("d4 "+i);
            if(chess[y+i][x-i]==0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
            }

            if(chess[y+i][x-i]<0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
                break;
            }

            if(chess[y+i][x-i]>0)
            {
                break;
            }

        }

    }

    //Black Queen
    if(value == -5)
    {

        var block_x,block_y;


        block_x = 7;
        for(var i = x+1 ; i < 8 ; i++)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = 8;
            }
        }

        for(i = x+1 ; i <= block_x ; i++)
        {
            if(chess[y][i] >= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }

        }


        block_x = 0;
        for(var i = x-1 ; i >= 0 ; i--)
        {
            if(chess[y][i]!= 0)
            {
                block_x = i;
                i = -1;
            }
        }

        for(i = x-1 ; i >= block_x ; i--)
        {
            if(chess[y][i] >= 0)
            {
                tile = col[i] + row[y];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y][i] = 1;
            }
        }



        block_y = 7;
        for(var i = y+1 ; i < 8 ; i++)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = 8;
            }
        }

        for(i = y+1 ; i <= block_y ; i++)
        {
            if(chess[i][x] >= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }

        }


        block_y = 0;
        for(var i = y-1 ; i >= 0 ; i--)
        {
            if(chess[i][x]!= 0)
            {
                block_y = i;
                i = -1;
            }
        }

        for(i = y-1 ; i >= block_y ; i--)
        {
            if(chess[i][x] >= 0)
            {
                tile = col[x] + row[i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[i][x] = 1;
            }
        }



        var d1 =  diag1(y,x);
        var d2 =  diag2(y,x);
        var d3 =  diag3(y,x);
        var d4 =  diag4(y,x);

        for(i=1;i<=d1;i++)
        {
            if(chess[y+i][x+i]==0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
            }

            if(chess[y+i][x+i]>0)
            {
                tile = col[x+i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x+i] = 1;
                break;
            }

            if(chess[y+i][x+i]<0)
            {
                break;
            }

        }


        for(i=1;i<=d3;i++)
        {
            if(chess[y-i][x-i]==0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
            }

            if(chess[y-i][x-i]>0)
            {
                tile = col[x-i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x-i] = 1;
                break;
            }

            if(chess[y-i][x-i]<0)
            {
                break;
            }

        }


        for(i=1;i<=d2;i++)
        {
            if(chess[y-i][x+i]==0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
            }

            if(chess[y-i][x+i]>0)
            {
                tile = col[x+i] + row[y-i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y-i][x+i] = 1;
                break;
            }

            if(chess[y-i][x+i]<0)
            {
                break;
            }

        }

        for(i=1;i<=d4;i++)
        {
            if(chess[y+i][x-i]==0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
            }

            if(chess[y+i][x-i]>0)
            {
                tile = col[x-i] + row[y+i];
                document.getElementById(tile).style.backgroundColor = "#a9f0fa";
                active[y+i][x-i] = 1;
                break;
            }

            if(chess[y+i][x-i]<0)
            {
                break;
            }

        }


    }

    //White King
    if(value == 6)
    {

        if(y-1>=0 && chess[y-1][x] <=0)
        {
            tile = col[x] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x] = 1;    
        }

        if(y+1<=7 && chess[y+1][x] <=0)
        {
            tile = col[x] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x] = 1;    
        }

        if(y-1>=0 && x+1<=7 && chess[y-1][x+1] <=0)
        {
            tile = col[x+1] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x+1] = 1;    
        }

        if(x+1<=7 && chess[y][x+1] <=0)
        {
            tile = col[x+1] + row[y];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y][x+1] = 1;    
        }

        if(y+1<=7 && x+1<=7 && chess[y+1][x+1] <=0)
        {
            tile = col[x+1] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x+1] = 1;    
        }


        if(y-1>=0 && x-1>=0 && chess[y-1][x-1] <=0)
        {
            tile = col[x-1] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x-1] = 1;    
        }

        if(x-1>=0 && chess[y][x-1] <=0)
        {
            tile = col[x-1] + row[y];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y][x-1] = 1;    
        }

        if(y+1<=7 && x-1>=0 && chess[y+1][x-1] <=0)
        {
            tile = col[x-1] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x-1] = 1;    
        }



    }

    //Black King
    if(value == -6)
    {

        if(y-1>=0 && chess[y-1][x] >=0)
        {
            tile = col[x] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x] = 1;    
        }

        if(y+1<=7 && chess[y+1][x] >=0)
        {
            tile = col[x] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x] = 1;    
        }

        if(y-1>=0 && x+1<=7 && chess[y-1][x+1] >=0)
        {
            tile = col[x+1] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x+1] = 1;    
        }

        if(x+1<=7 && chess[y][x+1] >=0)
        {
            tile = col[x+1] + row[y];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y][x+1] = 1;    
        }

        if(y+1<=7 && x+1<=7 && chess[y+1][x+1] >=0)
        {
            tile = col[x+1] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x+1] = 1;    
        }


        if(y-1>=0 && x-1>=0 && chess[y-1][x-1] >=0)
        {
            tile = col[x-1] + row[y-1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y-1][x-1] = 1;    
        }

        if(x-1>=0 && chess[y][x-1] >=0)
        {
            tile = col[x-1] + row[y];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y][x-1] = 1;    
        }

        if(y+1<=7 && x-1>=0 && chess[y+1][x-1] >=0)
        {
            tile = col[x-1] + row[y+1];
            document.getElementById(tile).style.backgroundColor = "#a9f0fa";
            active[y+1][x-1] = 1;    
        }



    }



}

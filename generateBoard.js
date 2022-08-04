function generateBoard()
{
    for(var i = 0 ; i < 8 ; i++)
    {
        for(var j = 0 ; j < 8 ; j++)
        {
            var value = chess[i][j]; 
            var box_id = col[j] + row[i];
         
            if((i + j) % 2 == 0)
            {
                document.getElementById(box_id).style.backgroundColor = "#E3C39F";    
            }
            else
            {
                document.getElementById(box_id).style.backgroundColor = "#95632C";
            }

            document.getElementById(box_id).innerHTML = generate(value);

        }
        
    }

}

function generate(val)
{
    var image_name;
    if(val == 0)
    {
        image_name = '';
    }
    if(val == 1)
    {
        image_name = '<img src="images/whitepawn.png">';
    }
    
    if(val == -1)
    {
        image_name = '<img src="images/blackpawn.png">';
    }
    
    if(val == 2)
    {
        image_name = '<img src="images/whiterook.png">';
    }
    
    if(val == -2)
    {
        image_name = '<img src="images/blackrook.png">';
    }
    
    if(val == 3)
    {
        image_name = '<img src="images/whiteknight.png">';
    }

    if(val == -3)
    {
        image_name = '<img src="images/blackknight.png">';
    }

    if(val == 4)
    {
        image_name = '<img src="images/whitebishop.png">';
    }

    if(val == -4)
    {
        image_name = '<img src="images/blackbishop.png">';
    }
    
    if(val == 5)
    {
        image_name = '<img src="images/whitequeen.png">';
    }
    
    if(val == -5)
    {
        image_name = '<img src="images/blackqueen.png">';
    }
    
    if(val == 6)
    {
        image_name = '<img src="images/whiteking.png">';
    }

    if(val == -6)
    {
        image_name = '<img src="images/blackking.png">';
    }


    return image_name;
}
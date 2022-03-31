let chance=0;
const boxvalue=[,,,,,,,,]
let blackwin="Black Win"
let blueWin="blue Win"
const dis=document.getElementsByClassName('dis');
for(let i=0; i<9;i++)
{
    dis[i].addEventListener('click', function(){
     if(chance%2==0)
     {
        boxvalue[i]=1;  
        document.getElementById('tic'+i).style.backgroundColor="black"; 
        check(1)  
     }
     else
     {
      boxvalue[i]=0;
       const va= document.getElementById('tic'+i).style.backgroundColor="blue";
       check(0)

     }
    
    })
    
}

function check(value)
{
  if(boxvalue!="" && boxvalue[0]==value && boxvalue[1]==value && boxvalue[2]==value )
  {
   winningCondition(value)
  }
  else if(boxvalue!="" && boxvalue[0]==value && boxvalue[3]==value && boxvalue[6]==value )
  {
    winningCondition(value)
  }
  else if(boxvalue!="" && boxvalue[3]==value && boxvalue[4]==value && boxvalue[5]==value )
  {
    winningCondition(value)
  }
  else if(boxvalue!="" && boxvalue[6]==value && boxvalue[7]==value && boxvalue[8]==value )
  {
    winningCondition(value)
  }
  else if(boxvalue!="" && boxvalue[1]==value && boxvalue[4]==value && boxvalue[7]==value )
  {
    winningCondition(value)
  }
  else if(boxvalue!="" && boxvalue[2]==value && boxvalue[5]==value && boxvalue[8]==value )
  {
    winningCondition(value)
  }
  else if(boxvalue!="" && boxvalue[0]==value && boxvalue[4]==value && boxvalue[8]==value )
  {
    winningCondition(value)
  }
  else if(boxvalue!="" && boxvalue[6]==value && boxvalue[4]==value && boxvalue[2]==value )
  {
    winningCondition(value)
  }
  else
  {
    chance++;
  }
  
  
}

function diswin(text, id)
{
document.getElementById(id).innerHTML=text;
}

function winningCondition(value)
{
  if(value==1)
  diswin(blackwin ,"disWiner1")
  else
  diswin(blueWin ,"disWiner2")
  
  removelistener()
}
function removelistener()
{
  for(let i=0; i<9;i++)
{
    dis[i].removeEventListener('onclick')
     
}
}




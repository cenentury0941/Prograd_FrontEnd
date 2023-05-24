var curpos = 0 ;
var maxpos = 400;
var minpos = 0;

function PreviousImage()
{
   console.log("clicked");
   if( curpos > minpos )
   {
    curpos -= 100;
   }
   var elems = document.getElementsByClassName("Carousel-Item");
   for( var elem of elems )
   {
      elem.className = "Carousel-Item img1 p" + curpos;
   }
}


function NextImage()
{
   console.log("clicked");
   if( curpos < maxpos )
   {
    curpos += 100;
   }
   var elems = document.getElementsByClassName("Carousel-Item");
   for( var elem of elems )
   {
      elem.className = "Carousel-Item img1 p" + curpos;
   }
}


function ChangeColour()
{

}
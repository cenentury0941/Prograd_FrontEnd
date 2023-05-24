var choices = [ "Rock" , "Paper" , "Scissors" ];
var tally = 1 ;

function Play(choice)
{

    

    document.getElementById("playarea").style.animationName = "RevealBot" + tally ;
    tally += 1;
    tally %= 2 ;
}
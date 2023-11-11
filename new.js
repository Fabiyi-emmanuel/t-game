const answer=Math.floor (Math.random ( )* +20) 
let guesses=0


document.getElementById("sub").onclick=function(){
let guess=document.getElementById("guessit").value
guesses +=1
if(guess==answer){
    alert
    (guess+" " +"is correct." + " " + "and you guess " + guesses+ " "+ "times"  + "😎😎😊😊😉🤩")
}
else if(guess<answer){
    alert("😒😒😠😠😠😩😩 no!!!! that is not the answer it is lower to the answer")
}


else
    alert("🙄🙄🙄💪💪💪💪💪💪 noo it is larger than the answer")
}











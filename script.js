
function randomGen() {
  var diceA = Math.random()*6;
  diceA = Math.floor(diceA + 1);

  var diceB = Math.random()*6;
  diceB = Math.floor(diceB + 1);
  // score boarde
  document.querySelector("p#sr1").innerHTML= "P1-Score: " + diceA;
  document.querySelector("p#sr2").innerHTML= "P2-Score: " + diceB;

  // dice images chgange
   var imageSource1 = "images/dice-" + diceA +".png";
   document.querySelector("#diceA").setAttribute("src",imageSource1);
   var imageSource2 = "images/dice-" + diceB +".png";
   document.querySelector("#diceB").setAttribute("src",imageSource2);

  if(diceA > diceB){
          // add text and images in dice 1 section
          document.querySelector("#diceP-1 #winnerA").classList.remove("hide");
          document.querySelector("#diceP-1 p").innerHTML="Winner";
          // add text and img in h1 section
          document.querySelector(".container img").setAttribute("src","images/trophy.png");
          document.querySelector(".container img").classList.remove("tHide");
          document.querySelector("h1").innerHTML="PLAYER 1 WIN 🏆";
}
  else if(diceA < diceB ){
          // add text and images in dice 2 section
          document.querySelector("#diceP-2 #winnerB").classList.remove("hide");
          document.querySelector("#diceP-2 p").innerHTML="Winner";
          // add text and img in h1 section
          document.querySelector(".container img").setAttribute("src","images/trophy.png");
          document.querySelector(".container img").classList.remove("tHide");
          document.querySelector("h1").innerHTML="PLAYER 2 WIN 🏆";
  }
  else{
    // match tie
      document.querySelector("h1").innerHTML="DRAW! 🥲";
      document.querySelector(".container img").classList.remove("tHide");
     document.querySelector(".container img").setAttribute("src","images/match-tie.png");
  }
  
console.log(diceA);
console.log(diceB);

}

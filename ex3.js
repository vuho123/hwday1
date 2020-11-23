//Them listener

let $answers = document.getElementById("answers");

let $no = document.getElementById("no");
// $no.addEventListener('mouseover',function(){
//    count++;

//     if(count < 5){
//         $answers.classList.toggle('reverse');
//         $answers.fadeTo("slow")
//     }
//     else {
//         $answers.style.display="none"
//     }

// })
// let $yes= document.getElementById("yes");
// $yes.addEventListener("click",function(){
//     alert("OK")
// })
function findRandom(min, max) {
  return Math.random() * (max - min) + min;
}

let count = 0;
let blur = 0;
$no.addEventListener("mouseover", function () {
  count++;
  let width = screen.width;
  let heigh = screen.height;
  let randomWidth = findRandom(0, width/2);
  let randomHeight= findRandom(0,heigh/2);
  
  $no.style.marginLeft = randomWidth + "px";
  $no.style.marginTop = randomHeight + "px";

  blur += 0.2;
  if (count < 5) {
    if (blur < 1) {
      console.log(blur);
      $answers.style.opacity = 1 - blur;
    }
  } else {
    $answers.style.display = "none";
  }

});

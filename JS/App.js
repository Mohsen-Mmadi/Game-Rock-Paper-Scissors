let btnStartPlay = document.getElementById("btn-start-play");
let Rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let susser = document.getElementById("susser");
let userResult1 = document.getElementById("user1-result");
let userResult2 = document.getElementById("user2-result");
let pointNumber1 = document.getElementById("NumberPoint1");
let pointNumber2 = document.getElementById("NumberPoint2");
let buttonGame = document.querySelectorAll(".btnGame");
let textResult = document.getElementById("textResult");
let RefreshBtn = document.getElementById("refresh");
let userWork1;
let point1 = 1;
let point2 = 1;

// EventListeners
btnStartPlay.addEventListener("click", (e) => {
  e.preventDefault();
  let show1 = document.querySelector("#section1");
  show1.setAttribute("class", " ");
  let show2 = document.querySelector("#section2");
  show2.setAttribute("class", " ");
  let show3 = document.querySelector("#section3");
  show3.setAttribute("class", " ");
  // function
  const arrRandom = ["قیچی", "سنگ", "کاغذ"];
  function ranomCamputer() {
    let randomWork = arrRandom[Math.floor(Math.random() * arrRandom.length)];
    userResult2.innerHTML = randomWork;
  }
  Rock.addEventListener("click", () => {
    userResult1.innerHTML = Rock.innerHTML;
  });
  paper.addEventListener("click", () => {
    userResult1.innerHTML = paper.innerHTML;
  });
  susser.addEventListener("click", () => {
    userResult1.innerHTML = susser.innerHTML;
  });

  function winPlayer() {
    e.preventDefault();
    if (
      (userResult1.innerHTML == "قیچی" && userResult2.innerHTML == "کاغذ") ||
      (userResult1.innerHTML == "سنگ" && userResult2.innerHTML == "قیچی") ||
      (userResult1.innerHTML == "کاغذ" && userResult2.innerHTML == "سنگ")
    ) {
      textResult.innerHTML = "User1 Win";
      pointNumber1.innerHTML = point1++;
    } else if (
      (userResult2.innerHTML == "قیچی" && userResult1.innerHTML == "کاغذ") ||
      (userResult2.innerHTML == "سنگ" && userResult1.innerHTML == "قیچی") ||
      (userResult2.innerHTML == "کاغذ" && userResult1.innerHTML == "سنگ")
    ) {
      textResult.innerHTML = "UserPC Win";

      pointNumber2.innerHTML = point2++;
    } else {
      textResult.innerHTML = "The game equalised!";
    }
    if (point1 == 11 || point2 == 11) {
      alert("Game End!");
      show1.remove();
      show2.remove();
    }
  }
  buttonGame.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      ranomCamputer();
      winPlayer();
    })
  );
});
RefreshBtn.addEventListener("click", () => {
  userResult1.innerHTML = " ";
  userResult2.innerHTML = " ";
});
document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    userResult1.innerHTML = " ";
    userResult2.innerHTML = " ";
  }
});

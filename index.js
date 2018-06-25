// The interaction with the Like Info and Dislike buttons
function buttonOrcaLike() {
  alert ('Thanks for liking the Orca whale, you mind want to check the info button for more describtion');
}
function buttonOrcaInfo() {
  alert ('Here is new page with more infomation');
  window.location.href = 'https://en.wikipedia.org/wiki/Killer_whale';
}
function buttonOrcaDislike() {
  alert ('Oppse, you do not like this kind, maybe try other whales.');
}

function buttonGreyLike() {
  alert ('Thanks for liking the Grey whale, you mind want to check the info button for more describtion');
}
function buttonGreyInfo() {
  alert ('Here is new page with more infomation');
  window.location.href = 'https://en.wikipedia.org/wiki/Gray_whale';
}
function buttonGreyDislike() {
  alert ('Oppse, you do not like this kind, maybe try other whales.');
}

function buttonHumpbackLike() {
  alert ('Thanks for liking the Humpback whale, you mind want to check the info button for more describtion');
}
function buttonHumpbackInfo() {
  alert ('Here is new page with more infomation');
  window.location.href = 'https://en.wikipedia.org/wiki/Humpback_whale';
}
function buttonHumpbackDislike() {
  alert ('Oppse, you do not like this kind, maybe try other whales.');
}

function buttonMinkeLike() {
  alert ('Thanks for liking the Minke whale, you mind want to check the info button for more describtion');
}
function buttonMinkeInfo() {
  alert ('Here is new page with more infomation');
  window.location.href = 'https://en.wikipedia.org/wiki/Minke_whale';
}
function buttonMinkeDislike() {
  alert ('Oppse, you do not like this kind, maybe try other whales.');
}

function buttonPropoiseLike() {
  alert ('Thanks for liking the Propoise whale, you mind want to check the info button for more describtion');
}
function buttonPropoiseInfo() {
  alert ('Here is new page with more infomation');
  window.location.href = 'https://en.wikipedia.org/wiki/Porpoise';
}
function buttonPropoiseDislike() {
  alert ('Oppse, you do not like this kind, maybe try other whales.');
}

// What does whales eats
var eats=[
  {
    food: "tuna",
  },
  {
    food: "grass",
  },
  {
    food: "human",
  }
]
function show(){
    var eatsHTML = eats.map(a => a.food);
    var text = document.createTextNode(eatsHTML);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("eatsList").appendChild(newItem);
  }
function eatsList() {
  var item = document.getElementById("eatsInput").value;
  var text = document.createTextNode(item);
  var newItem = document.createElement("li");
  newItem.appendChild(text);
  document.getElementById("eatsList").appendChild(newItem);
}
function removeFromList() {
  var list = document.getElementById("eatsList");
  list.removeChild(list.childNodes[0]);
}


// The interaction on radio buttons
function questionOneYes(x) {
  let questionOne = document.getElementsByName("mammal");
  for (var index = 0; index < questionOne.length; index++) {
    if (questionOne[index].checked) {
      x = questionOne[index].value;
    }
  }
  if (x == 1) {
    alert ('Yeah! You got the right idea.');
  }
}
function questionOneNo(y) {
  let questionOneNoo = document.getElementsByName("mammal");
  for (var index = 0; index < questionOneNoo.length; index++) {
    if (questionOneNoo[index].checked) {
      y = questionOneNoo[index].value;
    }
  }
  if (y == 2) {
    alert ('Oppse, you mind want to try the other guy.');
  }
}
// The interaction on click on the button
function button() {
  var userName = document.getElementById("yourName").value;
  var mostLike = document.getElementById("like").value;
  var output = 'Nice work on your quiz! Dear ' + userName + ', I am glad that you like the ' + mostLike + ' whale!'
  document.getElementById("feedback").textContent += output;
  var emailAddess = document.getElementById("yourEmailAddress").value;
  window.open('mailto:' + emailAddess);
}
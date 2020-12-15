var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "New Line on H1";
heading.style.color = "blue";

document.querySelector("input").click();
// var li3 = document.querySelector("ul li:nth-child(3)") ;
var li3 = document.getElementsByTagName("li")[2];
li3.style.color =  "green";

var clickBtn = document.getElementsByClassName("btn")[0];
clickBtn.style.width = "10%";
clickBtn.style.height = "7vh";
clickBtn.style.border = "2px solid black";
clickBtn.style.borderRadius = "10px";
clickBtn.style.backgroundColor= "Yellow";

var firstListItem = document.getElementById("firstLink");
firstListItem.style.textDecoration = "none";


document.querySelector(".testList .list #firstLink").style.fontSize = "29px";

// document.querySelectorAll(".list").style.width = "200px";

// if(document. getElementById('button'). clicked == true)
// {
//     document.querySelector("h1").classList.add("huge");
// }
// else
// {
//     document.querySelector("h1").classList.remove("remove");
// }

document.querySelector("h1").classList.add("huge");
document.querySelector("h1").classList.remove("huge");

document.querySelector("h1").innerHTML = "<em>for changing just any thing between tag we use </em>";
document.querySelector("h1").textContent = "new content between any tag will be used like this";


document.querySelector("ul li a").setAttribute("href","http://bing.com");

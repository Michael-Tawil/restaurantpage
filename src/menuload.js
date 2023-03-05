import navload from "./nav";
import cs from "./cs.jpg";
import fnc from "./fnc.jpg";
import burg from "./burger.jpg";
export default function menuload() {
  const mdiv = document.querySelector("#content");
  mdiv.innerHTML = "";
  navload();
  const maindiv = document.createElement("div");
  const headerm = document.createElement("h1");
  const ulist = document.createElement("ul");
  const list1 = document.createElement("li");
  const list2 = document.createElement("li");
  const list3 = document.createElement("li");
  const list1img = document.createElement("img");
  const list2img = document.createElement("img");
  const list3img = document.createElement("img");
  list1img.src = cs;
  list2img.src = fnc;
  list3img.src = burg;
  list1img.classList.add('main-img');
  list2img.classList.add('main-img');
  list3img.classList.add('main-img');
  ulist.classList.add('menu-ul');
  list1.innerText = "Chicken Salad";
  list2.innerText = "Fish & Chips";
  list3.innerText = "Double Beef Burger";
  //Menu work
  maindiv.classList.add("main-div");
  headerm.innerText = "Menu";
  //displaying on screen
  mdiv.appendChild(maindiv);
  maindiv.appendChild(headerm);
  maindiv.appendChild(ulist);
  ulist.appendChild(list1);
  ulist.appendChild(list2);
  ulist.appendChild(list3);
  list1.appendChild(list1img);
  list2.appendChild(list2img);
  list3.appendChild(list3img);

}
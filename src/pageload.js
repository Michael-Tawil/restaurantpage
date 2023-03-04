import icon from "./icon.png";
import chef from "./chef.jpg";

export default function pageload() {
  //navbar creation
  const mdiv = document.querySelector("#content");
  const navbar = document.createElement("nav");
  const ulist = document.createElement("ul");
  const list1 = document.createElement("li");
  const list2 = document.createElement("li");
  const list3 = document.createElement("li");
  const image = document.createElement("img");
  const header = document.createElement("h1");
  const list1a = document.createElement("a");
  const list2a = document.createElement("a");
  const list3a = document.createElement("a");
  const maindiv = document.createElement("div");
  const headerm = document.createElement("h1");
  const image2 = document.createElement("img");
  const chefabt = document.createElement("p");
  //navbar work
  navbar.classList.add("nav-bar");
  header.innerText = "Restaurant Tawilo";
  header.classList.add("nav-bar-header");
  image.src = icon;
  image.classList.add("image-nav");
  ulist.classList.add("nav-ul");
  list1a.classList.add("nav-a");
  list2a.classList.add("nav-a");
  list3a.classList.add("nav-a");
  list1a.innerText = "Home";
  list2a.innerText = "Menu";
  list3a.innerText = "Contact Us";
  list1a.href = "#Home";
  list2a.href = "#Menu";
  list3a.href = "#Contact-Us";
  //end of navbar
  //start of main
  maindiv.classList.add('main-div');
  headerm.innerText = "Chef Steve";
  image2.src = chef;
  image2.classList.add('main-img');
  chefabt.innerText = "Owner/Pastry Chef with 3 years of experience in high-pressure culinary environments. Skilled in preparing large volumes of food quickly and efficiently. Seeking to use culinary skills and expertise to prepare a special variety of dishes in a professional, rewarding environment. To pursue my professional career in the Culinary field, being able to demonstrate my passion, creative skills, strong motivation and the desire to grow and develop.";
  //displaying on screen
  mdiv.appendChild(navbar);
  navbar.appendChild(image);
  navbar.appendChild(header);
  navbar.appendChild(ulist);
  ulist.appendChild(list1);
  ulist.appendChild(list2);
  ulist.appendChild(list3);
  list1.appendChild(list1a);
  list2.appendChild(list2a);
  list3.appendChild(list3a);
  mdiv.appendChild(maindiv);
  maindiv.appendChild(headerm);
  maindiv.appendChild(image2);
  maindiv.appendChild(chefabt);
}
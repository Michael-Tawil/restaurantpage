import chef from "./chef.jpg";
import navload from "./nav";
export default function pageload() {
  const mdiv = document.querySelector("#content");
  mdiv.innerHTML = "";
  navload()
  const maindiv = document.createElement("div");
  const headerm = document.createElement("h1");
  const image2 = document.createElement("img");
  const chefabt = document.createElement("p");
  //main work
  maindiv.classList.add('main-div');
  headerm.innerText = "Chef Steve";
  image2.src = chef;
  image2.classList.add('main-img');
  chefabt.innerText = "Owner/Pastry Chef with 3 years of experience in high-pressure culinary environments. Skilled in preparing large volumes of food quickly and efficiently. Seeking to use culinary skills and expertise to prepare a special variety of dishes in a professional, rewarding environment. To pursue my professional career in the Culinary field, being able to demonstrate my passion, creative skills, strong motivation and the desire to grow and develop.";
  //displaying on screen
  mdiv.appendChild(maindiv);
  maindiv.appendChild(headerm);
  maindiv.appendChild(image2);
  maindiv.appendChild(chefabt);
}
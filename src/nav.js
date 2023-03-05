import icon from "./icon.png";
import pageload from "./pageload";
import menuload from "./menuload";
export default function navload (){
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
  //end of navbar
  //displaying nav
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

  const navlink = document.querySelectorAll('a');
  console.log(navlink)

  const handleinput = (e) => {
    console.log(e.target.innerText)
    switch(e.target.innerText){
        case "Home":
            pageload();
            break;
        case "Menu":
            menuload();
            break;
        case "Contact Us":
            contactusload();
            break;            
      }
  }

navlink.forEach(link => link.addEventListener('click',handleinput));
}
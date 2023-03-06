import navload from "./nav";
export default function contactusload() {
    const mdiv = document.querySelector("#content");
    mdiv.innerHTML = "";
    navload()
    const maindiv = document.createElement("div");
    const headerm = document.createElement("h1");
    const mapframe = document.createElement("iframe");
    const info = document.createElement("p");
    //main work
    maindiv.classList.add('main-div');
    headerm.innerText = "Contact us";
    mapframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402589.81567304773!2d144.77296579868184!3d-37.971692925342026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1678096956313!5m2!1sen!2sau";
    mapframe.classList.add('main-img');
    info.innerText = "Reach Us on 0456 456 789";
    //displaying on screen
    mdiv.appendChild(maindiv);
    maindiv.appendChild(headerm);
    maindiv.appendChild(mapframe);
    maindiv.appendChild(info);
  }
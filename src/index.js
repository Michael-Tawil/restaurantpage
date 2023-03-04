import './style.css';
import pageload from './pageload';
pageload();
const navlink = document.querySelectorAll('a');

const handleinput = (e) => {
    switch(e){
        case e.target.href === "#Home":
            pageload();
            break;
        case e.target.href === "#Menu":
            Menuload();
            break;
        case e.target.href === "#Contact-Us":
                contactusload();
                break;            
    }
}

navlink.forEach(link => link.addEventListener('click',handleinput));
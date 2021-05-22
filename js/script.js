const Menu = () => {

    if(humburgerMenu.classList.contains("menu-active") == true){
        humburgerMenu.classList.remove('menu-active');
    }else{
        humburgerMenu.classList.add('menu-active');
    };

    if(triggerMenu.classList.contains("humburger-active") == true){
        triggerMenu.classList.remove('humburger-active');
    }else{
        triggerMenu.classList.add('humburger-active');
    };
    

}

let humburgerMenu = document.getElementById('mobile-menu');
let triggerMenu = document.getElementById('hum-menu');
triggerMenu.addEventListener('click', (Menu));


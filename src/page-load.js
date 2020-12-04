const pageLoad = (() => {

const HOMEPAGE = document.querySelector('.content');

const home = () => {
    while(HOMEPAGE.firstChild) {
        HOMEPAGE.removeChild(HOMEPAGE.firstChild);
    }
    const prevAct = document.querySelectorAll('.active');
    prevAct.forEach(tag => {
        tag.classList.remove('active');
    });
    const background = document.createElement('div');
    background.classList.add('home-background');
    HOMEPAGE.appendChild(background);
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Majestic.';
    heroTitle.classList.add('hero-title');
    HOMEPAGE.appendChild(heroTitle);
    const homeLink = document.getElementById('home');
    homeLink.classList.add('active');
}

const menu = () => {
    while(HOMEPAGE.firstChild) {
        HOMEPAGE.removeChild(HOMEPAGE.firstChild);
    }

    const prevAct = document.querySelectorAll('.active');
    prevAct.forEach(tag => {
        tag.classList.remove('active');
    });
    const menuLink = document.getElementById('menu');
    menuLink.classList.add('active');

    const background = document.createElement('div');
    background.classList.add('menu-background');
    HOMEPAGE.appendChild(background);
    
    const menuContainer = document.createElement('div');
    HOMEPAGE.appendChild(menuContainer);

    let menus = ['Dishes', 'Desserts', 'Drinks']
    menus.forEach(menu => {
        const menuTable = document.createElement('div');
        menuTable.innerHTML = `<h2>${menu}</h2>`;
        menuTable.classList.add('menu-table')
        menuContainer.appendChild(menuTable);
        for(let i = 0; i < 10; i++) {
            let item = document.createElement('p');
            item.classList.add('menu-item');
            item.textContent = 'item';
            menuTable.appendChild(item);
        }

    });

    menuContainer.classList.add('menu-flex');

}

const contact = () => {
    while(HOMEPAGE.firstChild) {
        HOMEPAGE.removeChild(HOMEPAGE.firstChild);
    }

    const prevAct = document.querySelectorAll('.active');
    prevAct.forEach(tag => {
        tag.classList.remove('active');
    });
    const contactLink = document.getElementById('contact');
    contactLink.classList.add('active');

    const background = document.createElement('div');
    background.classList.add('contact-background');
    HOMEPAGE.appendChild(background);

    const header = document.createElement('div');
    header.classList.add('contact-section');
    header.innerHTML = `<h1 class='contact-header'>Contact us</h1>
    <p class='contact-info'> <span class='tell'>TEL</span> +57 3104297026 </p>`

    HOMEPAGE.appendChild(header);


    const socials = document.createElement('ul');
    socials.classList.add('socials');
    socials.innerHTML = `<span class='socials-title'>Socials: </span><li><i class="fab fa-facebook icon"></i></li>
    <li><i class="fab fa-instagram icon"></i></li>`;
    header.appendChild(socials);

    

}

return {
    home, 
    menu,
    contact
}

})();

export { pageLoad };
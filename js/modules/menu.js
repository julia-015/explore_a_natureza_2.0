export default function menuMobileInit() {
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list-menu');

    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        toggle.addEventListener('click', toggleMenu);
    }
}

function ativarConteudoPorId(id) {
    const secao = document.getElementById(id);
    if (secao) {
        textos.forEach((item) => {
            item.classList.remove('active');
        });
        secao.classList.add('active');
    }
}

document.querySelectorAll('.menu-link a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        ativarConteudoPorId(targetId);
    });
});


imagens.forEach((item, indice) => {
    item.addEventListener('click', () => {
        ativarConteudo(indice);
        const targetId = textos[indice].getAttribute('id');
        ativarConteudoPorId(targetId);
    });
});



function ativarConteudoPorId(id) {
    const secao = document.getElementById(id);
    if (secao) {
        textos.forEach((item) => {
            item.classList.remove('active');
        });
        secao.classList.add('active');
    }
}


document.querySelectorAll('.menu-link a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove o "#" do href
        ativarConteudoPorId(targetId);
    });
});


imagens.forEach((item, indice) => {
    item.addEventListener('click', () => {
        ativarConteudo(indice);
        const targetId = textos[indice].getAttribute('id');
        ativarConteudoPorId(targetId);
    });
});


export default function menuMobileInit() {
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list-menu');

    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        toggle.addEventListener('click', toggleMenu);
    }
}



export function menuMobileInit() {
    const menu = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list');

    if (menu && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const menuIcon = menu.querySelector('span');
            menuIcon.classList.toggle('active');
            menuIcon.innerText = menuIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        menu.addEventListener('click', toggleMenu);
    }
}

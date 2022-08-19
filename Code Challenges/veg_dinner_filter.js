function vegetarian_menu(menu) {
    const menuNode = document.querySelector('#menu');
    const vegetarian_options = menu.filter((menuItem) => menuItem.veg === true);

    vegetarian_options.forEach(element => {
        const node = document.createElement('li');
        node.textContent = element.name;
        menuNode.appendChild(node);
    });
}

const menu = [{
        name:'Chicken tikka',
        veg: false
    }, 
    {
        name:'Paneer tikka',
        veg: true
    },
    {
        name:'Matan Handi',
        veg: false
    },
    {
        name:'Egg Curry',
        veg: false
    },
    {
        name:'Chole Masala',
        veg: true
    }
];

vegetarian_menu(menu);
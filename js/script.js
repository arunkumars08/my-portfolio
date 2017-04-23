class Portfolio {
    constructor() {
        this.init();
    }
    init() {
        this.handleWords();
        this.handleMenu();
    }
    handleMenu() {
        let navigation = document.querySelector('nav ul');
        let container = document.querySelector('.section-container');
        navigation.addEventListener('click', (event) => {
            if (event.target.classList.contains('menu-item')) {
                let clicked = event.target;
                if (!clicked.classList.contains('menu-active')) {
                    let left = navigation.querySelector('.menu-left');
                    let current = navigation.querySelector('.menu-active');
                    let right = navigation.querySelector('.menu-right');

                    let leftContainer = container.querySelector('.left');
                    let currentContainer = container.querySelector('.active');
                    let rightContainer = container.querySelector('.right');

                    if (clicked.classList.contains('menu-left')) {
                        right.classList.remove('menu-right');
                        rightContainer.classList.remove('right');

                        current.classList.remove('menu-active');
                        current.classList.add('menu-right');
                        currentContainer.classList.remove('active');
                        currentContainer.classList.add('right');

                        left.classList.remove('menu-left');
                        left.classList.add('menu-active');
                        leftContainer.classList.remove('left');
                        leftContainer.classList.add('active');

                        right.classList.add('menu-left');
                        rightContainer.classList.add('left');
                    } else if (clicked.classList.contains('menu-right')) {
                        right.classList.remove('menu-right');
                        rightContainer.classList.remove('right');

                        current.classList.remove('menu-active');
                        current.classList.add('menu-left');
                        currentContainer.classList.remove('active');
                        currentContainer.classList.add('left');

                        // Change
                        left.classList.remove('menu-left');
                        left.classList.add('menu-right');
                        leftContainer.classList.remove('left');
                        leftContainer.classList.add('right');

                        right.classList.add('menu-active');
                        rightContainer.classList.add('active');
                    }
                }
            }
        });
    }
    handleWords() {
        let changeWords = document.getElementsByClassName('change-words')[0];

        setInterval(() => {
            let prev = changeWords.getElementsByClassName('show')[0];
            let next;
            if (prev.nextElementSibling) {
                next = prev.nextElementSibling;
            } else {
                next = changeWords.getElementsByClassName('word')[0];
            }
            next.classList.remove('hide');
            next.classList.add('show');

            prev.classList.remove('show');
            prev.classList.add('hide');
        }, 3000);
    }
}

new Portfolio();

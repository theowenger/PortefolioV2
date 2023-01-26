const presentationArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button01">Qui je suis</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button02">Le passé</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">L\'avenir</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">Mes passions</button>'
]

const projectArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button01">NPC Factory</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button02">KASA</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">Kanap</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">OhMyFood</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button05">Booki</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button06">Piiquante</button>',
]

const technoArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button01">Javascript</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button02">React</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">HTML</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">CSS</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button05">GitHub</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button06">MongoDB</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button07">SASS</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button08">Node.js</button>',
]

const contactArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button01">Adresse</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button02">Mail / Telephone</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">Reseaux</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">CV en ligne</button>',

]

const contentMap = {
    "Qui je suis": {
        text: "Qui je suis",
        image: "./img/theo-picture.jpg",
        description: "Je m'appelle Théo Wenger et je suis un développeur web passionné basé à Nîmes, dans le Sud de la France. L'été 2022 a été le début d'une nouvelle aventure pour moi, lorsque j'ai décidé de me reconvertir dans le développement web. Depuis, je me suis plongé avec enthousiasme dans l'apprentissage de nombreuses technologies, que je mets maintenant au service de projets passionnants."
    },
    "Le passé": {
        text: "Le passé",
        image: "./img/clock.png",
        description: "Dès l'âge de 17 ans, j'ai commencé à travailler et j'ai découvert un univers riche d'expériences qui m'ont permis de développer une forte conscience professionnelle. J'ai exploré différents domaines, mais j'ai rapidement compris que ma passion était dans le conseil et la vente de produits. Cette expérience m'a donné les compétences clés telles que l'écoute active, la capacité à communiquer efficacement et un dynamisme qui me caractérise aujourd'hui encore."
    },
    "L'avenir": {
        text: "L'avenir",
        image: "./img/futur.png",
        description: "Actuellement diplômé en développement web avec une formation certifiée par l'état (bac+2), je suis prêt à relever de nouveaux défis et à mettre mes compétences à disposition d'une entreprise inspirante et bienveillante où je pourrais continuer à apprendre et à grandir professionnellement. Je suis motivé à prouver mes capacités et à contribuer au succès de l'entreprise."
    },
    "Mes passions": {
        text: "Mes passions",
        image: "./img/piano.png",
        description: "La passion pour l'art a toujours été présente dans ma vie. En plus de pratiquer la musique de manière autodidacte, j'aime également découvrir de nouveaux univers à travers la lecture de romans, de bandes dessinées et de mangas. Mon amour pour les univers digitaux m'a conduit à utiliser mes connaissances en programmation pour développer des solutions qui combinent l'utilité et la créativité. Je suis très excité à l'idée de continuer à explorer les possibilités offertes par le développement web pour faire passer mes idées à la réalité."
    },
    "NPC Factory": {
        text: "NPC Factory",
        image: "./img/logo-npc-factory.png",
        description: "NPC Factory est un projet personnel qui m'a permis de mettre en pratique toutes les compétences que j'ai acquises lors de ma formation en développement web. Il s'agit d'un site web qui permet aux utilisateurs de créer et de partager des personnages non joueurs (PNJ) pour des parties de jeux de rôles. Les utilisateurs peuvent créer un compte, se connecter et créer des PNJ qui seront visibles par tous les autres utilisateurs. Ce projet est un exemple concret de ma capacité à utiliser mes connaissances pour créer une solution pratique et fonctionnelle.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/NPC-gallery">GitHub</a>'
    },
    "KASA": {
        text: "KASA",
        image: "./img/KASA.png",
        description: "Le projet OpenClassRooms de location d'appartements était l'occasion pour moi de découvrir et de maîtriser les fondements de React. Ce site web a été développé en utilisant les concepts de cycle de vie des composants et de logique de routage pour une navigation fluide entre les différentes pages. Cela m'a permis de démontrer mes compétences en utilisant les dernières technologies pour créer une expérience utilisateur intuitive et efficace.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/KASA">GitHub</a>'
    },
    "Kanap": {
        text: "Kanap",
        image: "./img/kanap.png",
        description: "Kanap est un projet OpenClassRooms que j'ai réalisé en utilisant uniquement Javascript Vanilla. Il s'agit d'un site web de vente en ligne de canapés, avec un système de panier pour gérer les achats. J'ai utilisé les fonctions du localStorage pour stocker les informations dans la mémoire du navigateur, ce qui permet une expérience utilisateur plus fluide et agréable. Ce projet a été une excellente occasion pour moi de démontrer mes compétences en développement web et de mettre en pratique mes connaissances en Javascript Vanilla.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/Kanap-Theo-Wenger">GitHub</a>'

    },
    "OhMyFood": {
        text: "OhMyFood",
        image: "./img/ohmyfood.svg",
        description: "OhMyFood est un projet de site web de commande de repas à emporter que j'ai réalisé en utilisant la technologie SASS pour la mise en page. J'ai également intégré des animations en CSS pour donner plus de vie au site. Ce site web est également responsive, avec une version adaptée pour les ordinateurs de bureau, les tablettes et les téléphones, permettant une expérience utilisateur optimale quel que soit l'appareil utilisé. Ce projet m'a permis de mettre en pratique mes connaissances en design et en animations pour créer un site web attractif et fonctionnel.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/OhMyFood">GitHub</a>'

    },
    "Booki": {
        text: "Booki",
        image: "./img/booki.png",
        description: "Booki est un projet de site de réservation d'appartements que j'ai réalisé en utilisant une maquette Figma pour le design. J'ai mis un point d'honneur à reproduire le design au pixel près, ce qui a demandé une grande attention aux détails. J'ai également utilisé les flexbox pour la mise en page, ce qui a permis de créer un site web élégant et facile à utiliser. Avec ce projet, j'ai acquis les bases pour créer un site web moderne et fonctionnel.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/Booki">GitHub</a>'

    },
    "Piiquante": {
        text: "Piiquante",
        image: "./img/Piiquante.png",
        description: "Piiquante est mon premier projet de développement Back-End, réalisé dans le cadre de ma formation. Il s'agit d'un site web de création et de partage de sauces épicées. J'ai dû mettre en place un serveur Node.js connecté à l'application Front-End, permettant aux utilisateurs de créer un compte, de se connecter, de créer et de modifier des sauces. Ce projet m'a permis de solidifier mes compétences en développement Back-End, en connectant les différentes parties d'un site web pour créer une expérience utilisateur fluide et fonctionnelle.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/piiquante-P6">GitHub</a>'

    },
    "Javascript": {
        text: "Javascript",
        image: "./img/javascript.jfif",
        description: "Le Javascript est un outil merveilleux que j'applique avec methodologie depuis que j'ai découvert toutes les possibilités qu'il offre pour manipuler le DOM. Que ce soit pour les projets Front ou Back-End, JS me permet de gérer des projets complets avec une seule et même syntaxe, cela me permet de me concentrer sur les fonctionnalités de mon projet."
    },
    "React": {
        text: "React",
        image: "./img/react.png",
        description: "React est une librairie Javascript qui m'a permis de découvrir de nouvelles possibilités de création tout en gardant une grande flexibilité pour maintenir les projets. Ayant une bonne maîtrise du Javascript, j'ai pu me concentrer sur l'apprentissage de React pour écrire des codes propres et facilement modifiables."
    },
    "Node.js": {
        text: "Node.js",
        image: "./img/node.png",
        description: "Node.js est un outil puissant qui m'a permis de développer des applications web complètes en utilisant JavaScript. Cette technologie permet de créer des serveurs performants et évolutifs, connectant facilement les données à l'interface utilisateur pour une expérience utilisateur fluide. Je l'utilise régulièrement pour créer des API personnalisées qui peuvent être facilement intégrées à tout projet Front-End. En utilisant Node.js, je suis en mesure de créer des applications web dynamiques et performantes."
    },
    "HTML": {
        text: "HTML",
        image: "./img/html.jfif",
        description: "Le HTML5 est la pierre angulaire du développement web, c'est pourquoi je me suis efforcé de le maîtriser de manière à respecter les normes W3C et les bonnes pratiques SEO. Cela me permet de créer des sites web standards et bien structurés."
    },
    "CSS": {
        text: "CSS",
        image: "./img/css.jfif",
        description: "En utilisant des outils tels que SASS et CSS Grid, je peux créer des designs réactifs et modernes tout en maintenant une structure de code propre et facile à maintenir. Je m'efforce également de suivre les dernières tendances en matière de design pour offrir des designs contemporains à mes projets."
    },
    "SASS": {
        text: "SASS",
        image: "./img/sass.jfif",
        description: "SASS est une évidence lorsque j'aborde des projets web de grande envergure. Son système de variables, de boucles et de fonctions m'a permis de rationaliser mon code CSS et de gagner en efficacité. J'utilise également SCSS pour bénéficier de la puissance des fonctionnalités avancées de SASS, tout en maintenant une syntaxe proche de celle de CSS pour une meilleure lisibilité."
    },
    "MongoDB": {
        text: "MongoDB",
        image: "./img/mongodb.jfif",
        description: "MongoDB est devenu un incontournable pour moi dans le développement de projets web. J'ai eu l'opportunité de mettre en pratique mes connaissances en utilisant cette base de données NoSQL pour connecter mes différentes API. La flexibilité de MongoDB a été un vrai plus pour moi, permettant de stocker et d'organiser les données de manière efficace, tout en étant facile à utiliser et à comprendre. C'est un outil que je continuerai à utiliser pour mes projets futurs."
    },
    "GitHub": {
        text: "GitHub",
        image: "./img/github.jfif",
        description: "GitHub est également un outil indispensable pour la collaboration sur des projets en équipe, avec des fonctionnalités telles que les pull requests et les branches, qui facilitent la gestion des contributions et des modifications de code. Je m'efforce de maintenir un code clair et documenté pour que mes projets soient faciles à comprendre et à utiliser pour d'autres développeurs."
    },
    "Adresse": {
        text: "Adresse",
        image: "./img/adress.png",
        description: "<p>675 Rue Aimé Orand</p><p>30000 Nîmes</p>"
    },
    "Mail / Telephone": {
        text: "Mail / Telephone",
        image: "./img/mail.png",
        description: "<p>Mail: theowenger88@gmail.com</p><p>Telephone: 06.29.73.82.79</p>"
    },
    "Reseaux": {
        text: "Reseaux",
        image: "./img/social.webp",
        description: "Je suis présent sur les réseaux sociaux professionnels tels que LinkedIn et Twitter afin de partager mes connaissances et mon expérience dans le développement web avec la communauté. Je maintiens une présence active sur ces plateformes en partageant mes projets et en discutant avec d'autres développeurs. Cela me permet également de rester informé des dernières tendances et des nouvelles technologies."
    },
    "CV en ligne": {
        text: "CV en ligne",
        image: "./img/cv.jfif",
        description: '<a target="_blank" class="link-project" href="./img/CV.pdf">Visualiser mon CV</a>'
    },
};
const mainContent = document.getElementById('main-content')
const mainTitle = document.getElementById('main-title')
const mainImage = document.getElementById('main-image')
const mainDescription = document.getElementById('main-description')
const mainLink = document.getElementById('main-link')

const secondaryNavigationTitle = document.getElementById('secondary-navigation-title')
const secondaryNavigation = document.getElementById('secondary-navigation')

const allMainButtons = document.getElementsByClassName('main-button')

const mainButton01 = document.getElementById('main-button01')
const mainButton02 = document.getElementById('main-button02')
const mainButton03 = document.getElementById('main-button03')
const mainButton04 = document.getElementById('main-button04')


const secondaryButton01 = document.getElementById('secondary-button01')
const secondaryButton02 = document.getElementById('secondary-button02')
const secondaryButton03 = document.getElementById('secondary-button03')
const secondaryButton04 = document.getElementById('secondary-button04')

const mainBorderLeft = document.getElementById('main-border-left')
const mainBorderRight = document.getElementById('main-border-right')

mainButton01.addEventListener('click', displayButtonPresentation)
mainButton02.addEventListener('click', displayButtonProject)
mainButton03.addEventListener('click', displayButtonTechno)
mainButton04.addEventListener('click', displayButtonContact)

for (let i = 0; i < allMainButtons.length; i++) {
    //ecoute le clik sur chaque bouton
    allMainButtons[i].addEventListener("click", ActiveBtn);
    allMainButtons[i].addEventListener("click", AnimationBtn);
}

function AnimationBtn() {

    let secondaryButtons = document.querySelectorAll('.secondary-button');
    for (let i = 0; i < secondaryButtons.length; i++) {
        setTimeout(function () {
            secondaryButtons[i].classList.remove('secondary-button-display-none')
            secondaryButtons[i].classList.add('secondary-button-animation');
        }, 200 * i);
    }

}

function ActiveBtn() {
    let secondaryButtons = document.querySelectorAll('.secondary-button');
    for (let i = 0; i < secondaryButtons.length; i++) {
        secondaryButtons[i].addEventListener('mouseover', function () {
            this.style.borderColor = "#e0acd5";
        });
    }
    let currentBtn = document.getElementsByClassName("active");
    //retire la classe active sur le bouton courant
    currentBtn[0].classList.remove('active');
    //ajoute la classe active sur le nouveau bouton
    this.classList.add('active');

    //L211 à L214, rajout puis suppression de classe pour l'animation
    mainContent.classList.add('main-content-animation')
    setTimeout(function () {
        mainContent.classList.remove('main-content-animation')
    }, 1000)
    for (let i = 0; i < allMainButtons.length; i++) {
        allMainButtons[i].style.borderColor = "white";
    }
    if (this.id === 'main-button01') {
        this.style.borderColor = "#3abeff";
        mainBorderLeft.style.borderColor = "#3abeff";
        mainBorderRight.style.borderColor = "#3abeff";
        secondaryNavigation.style.borderColor = "#3abeff";
        mainImage.style.borderColor = "#3abeff"
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#3abeff";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#3abeff";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
    else if (this.id === 'main-button02') {
        this.style.borderColor = "#fdca40";
        mainBorderLeft.style.borderColor = "#fdca40";
        mainBorderRight.style.borderColor = "#fdca40";
        secondaryNavigation.style.borderColor = "#fdca40";
        mainImage.style.borderColor = "#fdca40"
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#fdca40";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#fdca40";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
    else if (this.id === 'main-button03') {
        this.style.borderColor = "#e0acd5";
        mainBorderLeft.style.borderColor = "#e0acd5";
        mainBorderRight.style.borderColor = "#e0acd5";
        secondaryNavigation.style.borderColor = "#e0acd5";
        mainImage.style.borderColor = "#e0acd5";
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#e0acd5";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#e0acd5";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
    else if (this.id === 'main-button04') {
        this.style.borderColor = "#32936f";
        mainBorderLeft.style.borderColor = "#32936f";
        mainBorderRight.style.borderColor = "#32936f";
        secondaryNavigation.style.borderColor = "#32936f";
        mainImage.style.borderColor = "#32936f";
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#32936f";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#32936f";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
}

function displayButtonPresentation() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "./img/presentation.jfif"
    mainTitle.innerHTML = "presentation"
    mainDescription.innerHTML = "Vous voulez en savoir plus sur moi? parcourez cette section pour faire un tour d'horizon de qui je suis.";
    secondaryNavigationTitle.innerHTML = "Je me presente"
    presentationArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('presentation-button')
    });
}

function displayButtonProject() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "./img/rouage.jfif"
    mainTitle.innerHTML = "Mes projets"
    mainDescription.innerHTML = "Vous trouverez içi un récapitulatif de mes differents projets de développeur. Certains sont concus dans le cadre de la formation OpenClassRooms, d'autres sont des projets personnels."
    secondaryNavigationTitle.innerHTML = "Mes projets"
    projectArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('project-button')
    });
}

function displayButtonTechno() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "./img/tech-icon.png"
    mainTitle.innerHTML = "Les technologies"
    mainDescription.innerHTML = "Decouvrez les differentes technologies que j'ai apprit à maitriser depuis le début de ma formation en tant que développeur web.";
    secondaryNavigationTitle.innerHTML = "Les technologies"
    technoArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('techno-button')
    })
}

function displayButtonContact() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "./img/contact.png"
    mainTitle.innerHTML = "comment me joindre?"
    mainDescription.innerHTML = "Vous desirez me contacter? En savoir plus ou tout simplement parler dev? Ca se passe içi..."
    secondaryNavigationTitle.innerHTML = "Me contacter"
    contactArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('contact-button')
    })
}

secondaryNavigation.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        displayContent(event.target.innerHTML);
    }
});

function displayContent() {
    const content = contentMap[event.target.innerHTML];
    if (content) {
        mainTitle.innerHTML = content.text;
        mainImage.src = content.image;
        mainDescription.innerHTML = content.description;
        mainDescription.classList.add('main-description-animation')
        mainImage.classList.add('main-image-animation')
        setTimeout(function () {
            mainDescription.classList.remove('main-description-animation')
            mainImage.classList.remove('main-image-animation')
        }, 500)
        if (content.link === undefined) {
            mainLink.innerHTML = ""
        } else {
            mainLink.innerHTML = content.link
        }
    } else {
        console.log("content not found")
    }
}


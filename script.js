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
        description: "Je m'appelle Théo Wenger, je suis un développeur Web vivant à Nîmes dans le sud de la france. J'ai entamé ma reconversion en été 2022 et je suis vite tombé dans le cercle vertueux de la programation. Je maitrise de nombreuses technologies que je mets au service de projets de développement web."
    },
    "Le passé": {
        text: "Le passé",
        image: "./img/clock.png",
        description: "Je me suis integré à la vie active dès l'age de 17 ans. J'y ai découvert un monde riche d'enseignements qui m'ont forgé une conscience professionnelle via les differents corps de metiers que j'ai pratiqué. Je me suis rapidement dirigé vers le conseil et la vente de produits qui m'ont prodigué la capacité d'ecoute active, d'echange et de dynamisme."
    },
    "L'avenir": {
        text: "L'avenir",
        image: "./img/futur.png",
        description: "Aujourd'hui je suis développeur web titulaire d'une formation certifiée par l'état (bac+2). Je désire faire mes preuves et mettre à disposition mes competences dans une entreprise inspirante et bienveillante."
    },
    "Mes passions": {
        text: "Mes passions",
        image: "./img/piano.png",
        description: "Ayant toujours été attiré par le domaine artistique, je pratique la musique en autodidacte. Je lit egalement toutes sorte d'ouvrage (Roman, BD, manga) et, attiré par les multiples univers digitaux, j'ai pris la descision de mettre en pratique mes connaissances en programation pour développer des solutions à la fois pratiques et artistiques."
    },
    "NPC Factory": {
        text: "NPC Factory",
        image: "./img/logo-npc-factory.png",
        description: "NPC Factory est un site web de creation et de partage de PNJ(personnages non jouables) pour les parties de jeu de roles.Ce project personnel reunit tout ce que j'ai apprit lors de ma formation. On peut creer un compte, se connecter et creer des PNJ qui seront vus par l'ensembles des utilisateurs. ",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/NPC-gallery">GitHub</a>'
    },
    "KASA": {
        text: "KASA",
        image: "./img/KASA.png",
        description: "Ce projet OpenClassRooms de locations d'appartements m'a permis de decouvrir et maitriser les bases de React. Le site utilise le cycle de vie des composants de manière dynamique ainsi qu'une logique de route pour naviguer sur les differentes pages.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/KASA">GitHub</a>'
    },
    "Kanap": {
        text: "Kanap",
        image: "./img/kanap.png",
        description: "Kanap est le premier projet OpenClassRooms utilisant du Javascript Vanilla. On y trouvera un site web de vente de canapés en ligne avec un systeme de panier pour gerer ses achats. Le projet utilise les fonctions du localStorage pour garder des informations en mémoire.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/Kanap-Theo-Wenger">GitHub</a>'

    },
    "OhMyFood": {
        text: "OhMyFood",
        image: "./img/ohmyfood.svg",
        description: "OhMyFood est un site web responsive de commande de repas à emporter. J'ai utilisé la technologie SASS pour la mise en page ainsi que des animations en CSS pour rendre le site plus vivant. Le responsive possède 3 versions: Desktop, tablette et telephone.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/OhMyFood">GitHub</a>'

    },
    "Booki": {
        text: "Booki",
        image: "./img/booki.png",
        description: "Booki est site de réservation d'appartements. En m'appuyant d'une maquette Figma j'ai réalisé la page web au pixel près. Le projet comporte une grande partie de mise en page à l'aide des flexbox.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/Booki">GitHub</a>'

    },
    "Piiquante": {
        text: "Piiquante",
        image: "./img/Piiquante.png",
        description: "Premier projet BackEnd de ma formation, Piiquante est un site web de creations et de partages de sauces épicées. Il a fallu creer un serveur Node.js connecté à l'application FrontEnd de manière à pouvoir creer un compte, se connecter, creer et modifer des sauces.",
        link: '<a class="link-project" target="_blank" href="https://github.com/theowenger/piiquante-P6">GitHub</a>'

    },
    "Javascript": {
        text: "Javascript",
        image: "./img/javascript.jfif",
        description: "Depuis que j'ai découvert le Javascript, je me passionne pour la manipulation du DOM et de toutes les possibilités qu'offre ce language. Utilisable autant coté Front que Back, JS permet de gerer des projets complets sans avoir à changer de syntaxe."
    },
    "React": {
        text: "React",
        image: "./img/react.png",
        description: "Cette librairie JS offre une grande liberté de création tout en restant suffisament solide pour garder les projets maintenables. Une fois le Javascript maitrisé, je me suis concentré à dompter React de manière à garder un code propre et modifiable."
    },
    "HTML": {
        text: "HTML",
        image: "./img/html.jfif",
        description: "Pierre angulaire du développement web, HTML5 est une base que j'ai solidifié de manière à respecter les conventions W3C ainsi que les normes de SEO."
    },
    "CSS": {
        text: "CSS",
        image: "./img/css.jfif",
        description: "Le CSS est facile à apprendre mais difficile à maitriser. Je travail regulièrement mes competences en CSS afin de proposer des designs soignés et une UI/UX logique et comprehensible du premier coup d'oeil."
    },
    "GitHub": {
        text: "GitHub",
        image: "./img/github.jfif",
        description: "J'ai pris l'habitude de commit regulierement mes projets en opensource afin de faire partager mon travail à la communauté."
    },
    "MongoDB": {
        text: "MongoDB",
        image: "./img/mongodb.jfif",
        description: "J'ai eu l'occasion d'utiliser MongoDB dans differents projets afin de me familiariser avec les bases de données NoSQL et les connecter à mes differentes API."
    },
    "SASS": {
        text: "SASS",
        image: "./img/sass.jfif",
        description: "J'utilise SAAS et le SCSS sur des gros projets pour garder une maintenabilité dans mon code et gagner en temps et en lisibilité."
    },
    "Node.js": {
        text: "Node.js",
        image: "./img/node.png",
        description: "Grace à node.js, je suis en mesure de creer des API connectées et configurables sur differents projets FrontEnd."
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
        description: "Description de Reseaux"
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
        mainImage.classList.add('main-image-animation')
        setTimeout(function () {
            mainImage.classList.remove('main-image-animation')
        }, 1000)
        if (content.link === undefined) {
            mainLink.innerHTML = ""
        } else {
            mainLink.innerHTML = content.link
        }
    } else {
        console.log("content not found")
    }
}


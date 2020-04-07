const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// top section
const navbar = document.querySelectorAll('nav a')
const navContents = Object.values(siteContent.nav)

function navContent() {
  for (let i = 0; i < navbar.length; i++) {
    navbar[i].textContent = navContents[i];
    navbar[i].style.color = 'green';
  }
}
navContent();

const nav = document.querySelector('nav')

const firstLink = document.createElement('a');
firstLink.href = '#history';
firstLink.textContent = "History";
nav.appendChild(firstLink);

const secondLink = document.createElement('a');
secondLink.href = '#future';
secondLink.textContent = "Future";
nav.prepend(secondLink);

let ctaH1 = document.querySelectorAll('div h1');
let ctaBtn = document.querySelectorAll('div button');
let ctaImg = document.querySelectorAll('section img');
let ctaContent = Object.values(siteContent.cta)

ctaH1[0].textContent = ctaContent[0];
ctaBtn[0].textContent = ctaContent[1];
ctaImg[0].setAttribute('src', ctaContent[2]);

// main section
const mainSectionH4 = document.querySelectorAll('h4')
const mainSectionP = document.querySelectorAll('p')

const mainContents = Object.values(siteContent["main-content"]);

mainSectionH4[0].textContent = mainContents[0]
mainSectionH4[1].textContent = mainContents[2]
mainSectionH4[2].textContent = mainContents[5]
mainSectionH4[3].textContent = mainContents[7]
mainSectionH4[4].textContent = mainContents[9]

mainSectionP[0].textContent = mainContents[1]
mainSectionP[1].textContent = mainContents[3]
mainSectionP[2].textContent = mainContents[6]
mainSectionP[3].textContent = mainContents[8]
mainSectionP[4].textContent = mainContents[10]

let mainLogo = document.getElementById("middle-img");
mainLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Contact section
const contactP = document.querySelectorAll('.contact p');
const contactH4 = document.querySelectorAll('.contact h4');
const contactContents = Object.values(siteContent["contact"]);

contactH4[0].textContent = contactContents[0];

contactP[0].textContent = contactContents[1];
contactP[1].textContent = contactContents[2];
contactP[2].textContent = contactContents[3];

// footer section
const footerContents = Object.values(siteContent["footer"]);
let footer = document.body.children[0].children[4].children[0].textContent = footerContents[0];
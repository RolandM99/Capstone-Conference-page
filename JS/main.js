const threeBar = document.querySelector('.threebar');
const navMenu = document.querySelector('.navigation');
const menuWord = document.getElementsByClassName('word');
const sectionTeam = document.querySelector('.notre-team');

const menuOn = () => {
  threeBar.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
    threeBar.classList.toggle('turn');
  });
};
const menuOff = () => {
  for (let i = 0; i < menuWord.length; i += 1) {
    menuWord[i].addEventListener('click', () => {
      navMenu.classList.remove('nav-active');
      threeBar.classList.remove('turn');
    });
  }
};
menuOn();
menuOff();

const ourTeam = [
  {
    image: 'images/mireille.jpg',
    name: 'Mireille Muhigwa',
    degree: 'Msc. International Devellopment and Globalisation',
    about: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    image: 'images/profil2.jpg',
    name: 'Jeanette M',
    degree: 'Phd. International Relation',
    about: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',

  },
  {
    image: 'images/profil3.jpg',
    name: 'Yao Chang',
    degree: 'Lecturer at UNIKIN',
    about: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',

  },
  {
    image: 'images/profil4.jpg',
    name: 'Dr. Denis MUkwege',
    degree: 'Nobel Price 2018',
    about: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    image: 'images/profil5.jpg',
    name: 'Anicette Bahizire',
    degree: 'Bsc. International Law',
    about: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',

  },
];

const dataTeam = (n) => {
  sectionTeam.innerHTML += ` <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card2">
      <img src="${ourTeam[n].image}" class="card-img-top" alt="profil one">
      <div class="card-body">
        <h2 class="card-name">${ourTeam[n].name}</h2>
        <p class="card-text1">${ourTeam[n].degree}</p>
        <hr class="line-txt">
          <p class="card-text2">${ourTeam[n].about}</p>
      </div>
    </div>
  </div>`;
};

for (let i = 0; i < ourTeam.length; i += 1) {
  dataTeam(i);
}
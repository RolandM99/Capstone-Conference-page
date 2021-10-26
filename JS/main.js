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
    about: 'Mireille MUHIGWA works to empower women in her native country DRC.She serves as the founder and CEO of Strong Women DRC.',
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
    about: 'Dr. Denis Mukwege is our first partner, with his project BADILIKA we work together to empower women victims of gender based violence in their local activities.',
  },
  {
    image: 'images/profil5.jpg',
    name: 'Anicette Bahizire',
    degree: 'Bsc. International Law',
    about: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',

  },
];

ourTeam.forEach((member) => {
  sectionTeam.innerHTML += ` <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card2">
      <img src="${member.image}" class="card-img-top" alt="profil one">
      <div class="card-body">
        <h2 class="card-name">${member.name}</h2>
        <p class="card-text1">${member.degree}</p>
        <hr class="line-txt">
          <p class="card-text2">${member.about}</p>
      </div>
    </div>
  </div>`;
});

const teamMember = document.querySelectorAll('.row');
const btn = document.querySelector('#team > div > div.see-more > a');
let state = true;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (state) {
    Array.from(teamMember).forEach((member) => {
      member.classList.add('show');
      btn.innerHTML = '<span>Hide</span><span><i class="fa fa-chevron-up"></i></span>';
    });
    state = false;
  } else {
    state = false;
    Array.from(teamMember).forEach((member) => {
      member.classList.remove('show');
      btn.innerHTML = '<span>More</span><span><i class="fa fa-chevron-down"></i></span>';
    });
    state = true;
  }
});
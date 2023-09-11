document.addEventListener('DOMContentLoaded', function() {
  const whiteCover = document.getElementById('white-cover');
  const typewriterText = document.getElementById('typewriter-text');
  typewriterText.textContent = '@360macky';
  typewriterText.style.animation = 'fadeIn 0.3s';
  typewriterText.style.animationDelay = '0.3s'; // Add this line for the delay
  typewriterText.style.animationFillMode = 'both';

  setTimeout(function() {
    whiteCover.style.opacity = '0';
    whiteCover.style.transform = 'scale(1)';
    setTimeout(function() {
      whiteCover.style.display = 'none';
    }, 400);
  }, 700);
});



const scrollElements = document.querySelectorAll('.to-be-scrolled');

/**
 * Copy email address to system clipboard
 */
const copyEmailAddress = () => {
  const copyCallToAction = document.getElementById('copy-call-to-action');
  const copiedCallToAction = document.getElementById('copied-call-to-action');
  const email = 'hello@marceloarias.com';
  navigator.clipboard.writeText(email);
  const copyIcon = document.querySelector('.fa-copy');
  copyIcon.style.display = 'none';
  copyCallToAction.style.display = 'none';
  const checkIcon = document.querySelector('.fa-check');
  checkIcon.style.display = 'inline-block';
  copiedCallToAction.style.display = 'flex';
};

/**
 * Check if element is in view
 * @param {*} el
 * @param {*} percentageScroll
 * @returns void
 */
const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
  );
};

/**
 * Display element after scrolling into view
 * @param {*} element
 */
const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

/**
 * Handle scroll animation for elements
 */
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 70)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});



const welcomeSection = document.querySelector('.welcome-section');

function switchTheme() {
  const ifDarkThemeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (ifDarkThemeEnabled) {
    document.querySelector('link[rel="icon"]').href = './images/favicon/icon-dark.ico';
    document.getElementsByTagName('meta')['theme-color'].content = '#000000';
    document.documentElement.style.setProperty('--color-white', '#f7f7f7');
    document.documentElement.style.setProperty('--color-default', '#2a313a');
    document.documentElement.style.setProperty('--color-black', '#1b1f25');
    document.documentElement.style.setProperty('--color-default-darker', '#333333');
    document.documentElement.style.setProperty('--color-primary', '#3d3d3d');
    document.documentElement.style.setProperty('--color-dark', '#111111');
    document.documentElement.style.setProperty('--color-dark50', '#11111180');
    document.documentElement.style.setProperty('--color-primary-lighter', '#e7e7e7');
    welcomeSection.style.backgroundImage = `none`;
  } else {
    document.querySelector('link[rel="icon"]').href = './images/favicon/icon-light.ico';
    document.getElementsByTagName('meta')['theme-color'].content = '#FFFFFF';
    document.documentElement.style.setProperty('--color-white', '#1b1f25');
    document.documentElement.style.setProperty('--color-default', '#f7f7f7');
    document.documentElement.style.setProperty('--color-black', '#f7f7f7');
    document.documentElement.style.setProperty('--color-default-darker', '#cccccc');
    document.documentElement.style.setProperty('--color-primary', '#c2c2c2');
    document.documentElement.style.setProperty('--color-dark', '#eeeeee');
    document.documentElement.style.setProperty('--color-dark50', '#eeeeee80');
    document.documentElement.style.setProperty('--color-primary-lighter', '#2e2e2e');
    welcomeSection.style.backgroundImage = `url('../images/background.webp')`;
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchTheme);
switchTheme();

// Animations at the beginning of the page

const nav = document.querySelector('.nav');
const socialNetworks = document.querySelector('.welcome-section__social-networks');
const websiteTitle = document.querySelector('.website-title');
const websiteDescription = document.querySelector('.welcome-section__handle');
// const switchLanguage = document.querySelector('.welcome-section__switch_language');
const websiteWorks = document.querySelector('.welcome-section__work');
const description = websiteDescription.textContent;

setTimeout(() => {
  websiteTitle.style.opacity = '100';
  websiteTitle.style.transform = 'unset';
}, 1000);

setTimeout(() => {
  websiteDescription.style.opacity = '100';
  // switchLanguage.style.opacity = '100';
  socialNetworks.style.opacity = '100';
  websiteWorks.style.opacity = '100';
  nav.style.transform = 'translateY(0)';
}, 1200);

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
      nav.classList.add('nav-scroll-down');
  } else {
      nav.classList.remove('nav-scroll-down');
  }
});

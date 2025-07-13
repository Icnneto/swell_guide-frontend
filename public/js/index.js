// scroll para a seção
const scrollToBtn = document.querySelector('#scrollToSubscriptionBtn');
const subscriptionSection = document.querySelector('[data-subscription]');

if (scrollToBtn && subscriptionSection) {

  scrollToBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const valorY = subscriptionSection.offsetTop - (window.innerHeight * 0.02);

    window.scrollTo({
      top: valorY,
      behavior: "smooth"
    });
  });
};

// scroll animation
const itensAnime = document.querySelectorAll('[data-anime]');

const animeScroll = () => {
  const windowTop = window.scrollY + window.innerHeight * 0.85;

  itensAnime.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }

  })
}

animeScroll();

window.addEventListener('scroll', () => {
  animeScroll();
})
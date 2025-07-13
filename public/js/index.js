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
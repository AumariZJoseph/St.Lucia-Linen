document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  const clients = document.querySelectorAll('.client-item');
  const clientWidth = clients[0].offsetWidth + 20; // width + gap
  let currentPosition = 0;
  const visibleItems = 5;

  function updateArrows() {
    prevArrow.disabled = currentPosition === 0;
    nextArrow.disabled = currentPosition <= -(clients.length - visibleItems) * clientWidth;
  }

  prevArrow.addEventListener('click', () => {
    if (currentPosition < 0) {
      currentPosition += clientWidth * visibleItems;
      track.style.transform = `translateX(${currentPosition}px)`;
      updateArrows();
    }
  });

  nextArrow.addEventListener('click', () => {
    if (currentPosition > -(clients.length - visibleItems) * clientWidth) {
      currentPosition -= clientWidth * visibleItems;
      track.style.transform = `translateX(${currentPosition}px)`;
      updateArrows();
    }
  });

  updateArrows();
});
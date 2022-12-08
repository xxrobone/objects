/* const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right'); */
const images = document.querySelector('#imgs');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  let width = screen.width;
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  if (width < 800) {
    images.style.transform = `translateX(${-idx * 400}px)`;
  } else {
    images.style.transform = `translateX(${-idx * 800}px)`;
  }
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 4000);
}

/* uncomment below to add buttons */
/* 
leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
}); */

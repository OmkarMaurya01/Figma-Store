
function changePicOfCard(element) {
  element.src = element.dataset.img2;

}

function changePicOfCardBack(element) {
  element.src = element.dataset.img1;
}

document.querySelectorAll('.slider').forEach((slider) => {
  let index = 0;

  setInterval(() => {
    index = (index + 1) % 3;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
});


let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down
    nav.classList.add('hide');
  } else {
    // Scrolling up
    nav.classList.remove('hide');
  }

  lastScroll = currentScroll;
});



function increment(element) {
  const span = element.parentElement.querySelector('span')
  span.textContent = parseInt(span.textContent) + 1;

}

function decrement(element) {

  const span = element.parentElement.querySelector('span')
  if (span.textContent > 0) {
    span.textContent = parseInt(span.textContent) - 1;
  }
}

function changeMainImage(element) {
  element.parentElement.querySelectorAll('img').forEach((img) => {
    img.style.border = 'white solid 2px';
  })

  element.style.border = 'black solid 2px';
  const mainImage = document.querySelector('.main-image img');
  mainImage.src = element.src;
}


function linkmaker(element) {

  let img1 = element.querySelector('img').dataset.img1;
  let img2 = element.querySelector('img').dataset.img2;
  let price = element.querySelectorAll('span')[1].textContent;
  let tilte = element.querySelector('.title').textContent;
  let link = `product.html?title=${tilte}&img1=${img1}&img2=${img2}&price=${price}`
  window.location.href = link
}

// Extract query parameters
const params = new URLSearchParams(window.location.search);

const title = params.get('title');
const img1 = params.get('img1');
const img2 = params.get('img2');
const price = params.get('price');

console.log(title, img1, price);
// Set data to elements
if (title && img1 && price) {
  document.querySelector('.product-right h2').innerHTML = title;
  document.querySelector('.add-btn').textContent = `ADD. ${price}.00`;
  document.querySelector('.thumbnail').children[0].src = img1;
  document.querySelector('.thumbnail').children[1].src = img2;
  document.querySelector('.main-image img').src = img1;
  console.log("success");
}
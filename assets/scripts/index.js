initPrices();

const discountButton = document.querySelector('.apply-discount');

discountButton.addEventListener('click', function () {
  makeDiscount(20);
});

function initPrices() {
  const prices = document.querySelectorAll('.price');
  const totalPrice = document.querySelector('#total-price');

  calcPrices(prices, totalPrice);
}

function calcPrices(prices, totalPrice, discount = 0) {
  let sum = 0;

  for (let price of prices) {
    let priceNum = +price.innerText.replace(/[^\d]/g, '');

    if (discount !== 0) {
      priceNum = priceNum - priceNum * (discount / 100);
      addClass(price, 'discount');
    }

    sum += priceNum;

    price.innerText = formatWithLocale(priceNum);
  }

  totalPrice.innerText = formatWithLocale(sum);
}

function makeDiscount(discount) {
  const prices = document.querySelectorAll('.price');
  const totalPrice = document.querySelector('#total-price');

  calcPrices(prices, totalPrice, discount);

  addClass(totalPrice, 'discount');
  discountButton.setAttribute('disabled', 'true');
}

function formatWithLocale(priceNum) {
  return priceNum.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

function addClass(elem, className) {
  elem.classList.add(className);
}

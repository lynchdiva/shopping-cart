const discountButton = document.querySelector('.apply-discount');

discountButton.addEventListener('click', () => calcTotalPrice(20));

calcTotalPrice();

function calcTotalPrice(discount) {
  const allPrices = document.querySelectorAll('.price');
  const totalPrice = document.querySelector('#total-price');

  let sum = 0;

  for (let price of allPrices) {
    let priceNum = +price.innerText;

    if (discount) {
      priceNum = +price.innerText.replace(/[^\d]/g, '');
      priceNum = priceNum - priceNum * (discount / 100);

      price.classList.add('discount');
      totalPrice.classList.add('discount');

      discountButton.setAttribute('disabled', 'true');
    }

    sum += priceNum;

    price.innerText = formatWithLocale(priceNum);
  }

  totalPrice.innerText = formatWithLocale(sum);
}

function formatWithLocale(priceNum) {
  return priceNum.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

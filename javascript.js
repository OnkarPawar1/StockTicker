const ticker = document.getElementById("symbol").innerHTML;
const priceElement = document.getElementById("price");

axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`)
  .then(function (response) {
    priceElement.innerHTML = `$${response.data.latestPrice}`;
  })
  .catch(function (error) {
    console.error(error);
    priceElement.innerHTML = "Unavailable";
  });

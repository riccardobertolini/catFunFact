const axios = require("axios");

const funFact = document.getElementById("funFact");

const options = {
  method: 'GET',
  url: 'https://catfact.ninja/fact',
};

axios.request(options).then(function (response) {
  funFact.innerHTML = response.data.fact;
}).catch(function (error) {
	console.error(error);
});
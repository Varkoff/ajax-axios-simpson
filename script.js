// This function loads pokemon data from the Pokemon API

function fetchSimpsonQuoteJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const quoteId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
        .then(function(response) {
            return response.data; // response.data instead of response.json() with fetch
        })
        .then(function(quote) {

            console.log('data decoded from JSON:', quote);
            console.log(quote[0].character);
            // Build a block of HTML
            const quoteHtml = `<p><strong>${quote[0].quote}</strong></p><img src="${quote[0].image}" /><p>- ${quote[0].character}</p>`;
            document.querySelector('#simpsonQuote').innerHTML = quoteHtml;
        });
}

fetchSimpsonQuoteJSON();

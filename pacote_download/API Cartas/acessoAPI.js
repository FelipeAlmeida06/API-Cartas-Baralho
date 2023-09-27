// Site: https://deckofcardsapi.com/

function fazerRequisicao(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);  // GET é apenas para consulta
    request.send();   // aqui é chamado a API

    return request.responseText;
}

function iniciarBaralho() {
    let TXTBaralho = fazerRequisicao("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    let JSONBaralho = JSON.parse(TXTBaralho);    // é feita uma conversão para JSON

    document.getElementById('deck_id').text = JSONBaralho.deck_id;

    console.log(JSONBaralho);
}

function viraCarta() {
    let deckId = document.getElementById('deck_id').text;
    let urlBase = "https://www.deckofcardsapi.com/api/deck/" + 
                deckId + 
                "/draw/?count=1";
    let TXTCarta = fazerRequisicao(urlBase);
    let JSONCarta = JSON.parse(TXTCarta);    // é feita uma conversão para JSON

    console.log(JSONCarta);
    document.getElementById('carta').src =
                        JSONCarta.cards[0].image;
}

function vaiProMonte(carta) {
    let nome = carta.src;
    let nomeCurto = nome.substring(nome.length-6, nome.length);
    let naipe = nomeCurto.substring(1,2);

    document.getElementById(naipe).src = nome;
}

iniciarBaralho();  // é chamada a função iniciarBaralho()
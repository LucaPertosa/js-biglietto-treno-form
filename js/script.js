const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");
    // Ripulire il result
    // result.className = "";

    // Prendere il valore del input.
    const userDistanceInput = document.getElementById("distance");
    const userDistance = (userDistanceInput.value);

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;

    console.log(userDistance, userAge);

    /* prezzo biglietto euro/km */
    const priceKm = 0.21 ;  
    /* sconto 20% > 18 anni */
    const discount20 = 0.20 ;
    /* sconto 40% < 65 anni */
    const discount40 = 0.40 ;

    // Stampo le scelte dell'utente

    // Calcolo prezzo del biglietto in base ai chilometri
    const price = userDistanceInput.value * priceKm
    console.log(price);
    // Calcolo sconto in base all'età e lo applico al prezzo
    let finalPrice = '';

    if (userAge === 'min18'){
        finalPrice = (price - (discount20 * price)).toFixed(2)
    } else if (userAge === 'over65') {
        finalPrice = (price - (discount40 * price)).toFixed(2)
    } else {
        finalPrice = price.toFixed(2)
    }
    // Preparo il messaggio con il prezzo
    console.log(finalPrice);

    // Output messaggio
    document.getElementById('message').innerHTML = `Grazie per aver utilizzato il calcolatore! Il prezzo del tuo biglietto è di € ${finalPrice} ` ; 


    result.innerHTML = `${finalPrice}`;
    result.classList.add();

    // Ripulisco i campi di input
    userDistanceInput.value = "";
    userAgeInput.value = "";
});
// Bottone sub
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {

    // Prendere il valore del input.
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const userDistanceInput = document.getElementById("distance");
    const userDistance = (userDistanceInput.value);

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;

    console.log(userName, userDistance, userAge);

    /* prezzo biglietto euro/km */
    const priceKm = 0.21 ;  
    /* sconto 20% > 18 anni */
    const discount20 = 0.20 ;
    /* sconto 40% < 65 anni */
    const discount40 = 0.40 ;

    // Calcolo prezzo del biglietto in base ai chilometri
    const price = userDistanceInput.value * priceKm
    console.log(price);
    // Calcolo sconto in base all'età e lo applico al prezzo
    let finalPrice = '';
    let userDiscount = '';

    if (userAge === 'min18'){
        finalPrice = (price - (discount20 * price)).toFixed(2)
        userDiscount = "20% di sconto"
    } else if (userAge === 'over65') {
        finalPrice = (price - (discount40 * price)).toFixed(2)
        userDiscount = "40% di sconto"
    } else {
        finalPrice = price.toFixed(2)
        userDiscount = "Nessuno sconto"
    }

    // Randomizzazione carrozza e CP
    let randomCp = Math.floor(Math.random() * 100000);
    let randomCarrozza = Math.floor(Math.random() * 9 + 1);

    // Inserimento dati in tabella
    document.getElementById("tab-user-name").innerHTML = `${userName}`
    document.getElementById("offerta").innerHTML = `${userDiscount}`
    document.getElementById("carrozza").innerHTML = `${randomCarrozza}`
    document.getElementById("cp").innerHTML = `${randomCp}`
    document.getElementById("final-price").innerHTML = `€ ${finalPrice}`

});

// Bottone cancel
const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", function() {

    const userNameInput = document.getElementById("user-name");
    const userDistanceInput = document.getElementById("distance");
    const userAgeInput = document.getElementById("user-age");
    // Ripulisco i campi di input
    userNameInput.value = "";
    userDistanceInput.value = "";
    userAgeInput.value = "";

    // Ripulisco i campi tabella
    document.getElementById("tab-user-name").innerHTML = ``
    document.getElementById("offerta").innerHTML = ``
    document.getElementById("carrozza").innerHTML = ``
    document.getElementById("cp").innerHTML = ``
    document.getElementById("final-price").innerHTML = ``
});
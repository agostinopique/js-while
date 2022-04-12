/*
    1.Chiedere un numero all'utente
    2. Verificare che il numero inserito sia corretto
    3. Se corretto lo stampo
    4. se non corretto avviso con un alert e richiedo un nuovo numero

*/

let userNum;
const userSubmit = document.getElementById('user-submit');

let correctNum = false;
//      !correctNum
while(correctNum === false){

    userNum = prompt('Inserisci un numero multiplo di 3');
    
    if (userNum % 3) {
    
        console.log('Numero scorretto');
        alert('INSERIRE UN NUMERO CORRETTO!');
    
    } else {
    
        console.log('Numero corretto');
        correctNum = true;
    
    }

}


userSubmit.innerHTML = `Il numero inserito (${userNum}) é corretto`;

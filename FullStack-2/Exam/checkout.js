const isCCValid = (ccn) => ccn !== null && !Number.isNaN(parseInt(ccn)) && ccn.length > 13;

window.onload = () => {
    console.log("window loaded..");
}

let orderBtn = document.getElementsByClassName("continue-button")[0];
let cardNo = document.getElementById("CreditCardNumber");
let expMonth = document.getElementsByName("ExpiryMonths")[0];
let expYear = document.getElementsByName("ExpiryYears")[0];
let ccv = document.getElementById("ccv");
let transactionResult = document.getElementById("transactionResult");



orderBtn.addEventListener("click", handleOrderClick);

function handleOrderClick(e) {
    e.preventDefault();
    let order = {
        cardNumber: cardNo.value,
        expMonth: expMonth.value,
        expYear: expYear.value,
        ccv: ccv.value,
    };
    console.log("order placed");
    console.log(order);
    
    processTransaction(order)
        .then((result) => {
            console.log(result);
            let p = document.createElement("p");
            p.innerText ="Transaction Succsessfull";
            p.classList.add("transaction-success");
            transactionResult.innerHTML = "";
            transactionResult.appendChild(p);
        })
        .catch(error => {
            console.log(error);
            let p = document.createElement("p");
            p.innerText ="Credit Card is invalid";
            p.classList.add("transaction-failure");
            transactionResult.innerHTML = "";
            transactionResult.appendChild(p);
        }
        );
}
function processTransaction(order) {
    return new Promise((resolve, reject) => {
        if (isCCValid(order.cardNumber)) {
            resolve("Transaction Succsessfull");
        } else {
            reject("Credit Card is invalid");
        }
    });
}
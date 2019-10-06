var amount = document.getElementsByClassName("amount");
var receipt = document.getElementById("receiptM");
var receiptI = document.getElementById("receiptI");
var totalAmount = 0;

// Adds the total value of items in the card to the receipt.
function addAmount(){
    var price = document.getElementsByClassName("price");
    for(var i = 0; i < amount.length; i++){
        if(amount[i].value > 0 && amount[i].value < 16){
            var amountNumber = Number(amount[i].value);
            var newPrice = parseFloat(price[i].innerText.replace(/€/g, ""));
            var checkoutUpdate = amountNumber * newPrice;
            totalAmount += checkoutUpdate;
        }
    }
    if(totalAmount > 5) {
        document.getElementById("askForPin").style.display = "block";
    }
    if(totalAmount < 5) {
        document.getElementById("askForPin").style.display = "none";
    }
    receipt.textContent = "Total amount: €" + totalAmount;
    totalAmount = 0;
}

// Adds the items to the receipt, doesn't work yet.
function addItems(){
    var article = document.getElementsByClassName("article");
    var receiptArticles = "";
    for(var i = 0; i < amount.length; i++){
        if(amount[i].value > 0 && amount[i].value < 16){
            var receiptArticle =(article[i].innerText);
            receiptArticles += receiptArticle + " x" + amount[i].value + " </br>";
        }
    }
    receiptI.innerHTML = receiptArticles;
}

function checkout() {
    addAmount();
    addItems();
}

// executes the addAmount and addItem functions when the "BUY" button is clicked.
var buy = document.getElementById("buyButton");
buy.addEventListener("click", checkout);

// Ask for pin if the amount exceeds €5,-
document.getElementById("askForPin").style.display = "none";

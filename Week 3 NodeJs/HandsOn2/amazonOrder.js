function createOrder() {
    console.log("Create Order");
    proceedToPayment();
}
function proceedToPayment() {
    console.log("Payment");
    showOrderSummary();
    updateWallet();
}

function showOrderSummary() {
    console.log("Show order summary");
}
function updateWallet() {
    console.log("Wallet Updated");
}

createOrder();
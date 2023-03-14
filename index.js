var modalBtn = document.querySelector('.primary-btn');
var modalContainer = document.querySelector('.modal-container');
var modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
    modalContainer.classList.add('modal-bg-active');
})
modalClose.addEventListener('click', function(){
    modalContainer.classList.remove('modal-bg-active');
});

const payment = document.getElementById('paymentInput');
const saveButton = document.getElementById('save');
const paymentOutput = document.getElementById('paymentOutput');
function changePayment(){
    paymentOutput.innerHTML = `$${payment.value}`;
}
saveButton.addEventListener('click', changePayment);

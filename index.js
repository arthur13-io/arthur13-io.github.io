var modalBtn = document.querySelector('.primary-btn');
var modalContainer = document.querySelector('.modal-container');
var modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
    modalContainer.classList.add('modal-bg-active');
})
modalClose.addEventListener('click', function(){
    modalContainer.classList.remove('modal-bg-active');
});

// function userInput('submit'){
//     event.preventDefault();
//     var payment = document.getElementById('payment').value;
//     const database_api = 'http://localhost/phpmyadmin/index.php?route=/sql&db=cementogram&table=suppliers&pos=0';
//     fetch(database_api, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ payment: payment })
//       })
//       .then(response => {
//         console.log('Form data saved successfully');
//       })
//       .catch(error => {
//         console.error('Error saving form data:', error);
//       });
//     }


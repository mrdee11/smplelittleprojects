
window.document
window.console.log('window');
window.alert

// script for Amazon starts from below
// script for Amazon starts from below
function handleCostKeydown (event) {
  if (event.key === 'Enter') {
    calculateTotal();}
};

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
 

  if (cost < 40) {
    cost = (cost*100 +1000) / 100;
  }

  document.querySelector('.js-total-cost').innerHTML = ` $${cost}`;
}

// script for YouTube button starts from below
// script for YouTube button starts from below

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button')

if (buttonElement.innerText === 'Subscribe') {
  buttonElement.innerHTML = 'Subscribed';
  buttonElement.classList.add('is-subscribed');
} else {
  buttonElement.innerHTML ='Subscribe';
  buttonElement.classList.remove('is-subscribed');
}
};



// script for cart starts from below
// script for cart starts from below
let cartQuantity = 0;

      function updateCartQuantity(value) {
        if(cartQuantity + value > 10) {
          alert('The cart is full');
          return;
        }
         if (cartQuantity + value < 0) {
          alert('Cart not enough');
        return;
        }
        {
          document.querySelector('.js-qty-display').innerHTML =`Cart quantity: ${cartQuantity += value}`;

          console.log(`Cart quantity: ${cartQuantity}`);
          
          //document.querySelector('.js-qty-display').innerHTML = `Cart quantity:${cartQuantity}`;
          }
          
          }
          // script for cart ends
          // script for cart ends



//script for heads/tails strts here
//script for heads/tails starts here
          const score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0
            
          };
       
         function playGame(guess) {
          const randomNumber = Math.random();
          const result = randomNumber < 0.5 ? 'heads' : 'tails';
      
          let outcome='';
      
          if (guess === result ) {outcome = 'You win!'} else {outcome ='You lose!'};
             
          if(guess === result) {
            score.wins ++;
          } else {
            score.losses ++;
          }
          console.log(score);
      
          localStorage.setItem('score', JSON.stringify(score));
      
          document.querySelector('.js-outcome')
          .innerHTML = `Outcome is: ${result}`
          
           document.querySelector('.js-result')
          .innerHTML = `You chose: ${guess}, ${outcome}`
      
          document.querySelector('.js-score')
          .innerHTML = 'Score displays in console'
          
         }
  //script for heads/tails end here     
  //script for heads/tails end here 


//script for calculator starts here
//script for calculator starts here
  let calculation = localStorage.getItem('calculation') ||'';

  showCalculation();


  function updateCalculation(value) {
  calculation += value;
     
  showCalculation();

  localStorage.setItem('calculation', calculation);
  }

function showCalculation() {
  document.querySelector('.js-cc-display')
  .innerHTML = calculation;
}

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here

const allHearts = document.getElementsByClassName('like-glyph')
const errMsg = document.querySelector('#modal')


function clickHeart(e) {
  const singleHeart = e.target
  mimicServerCall()
  .then(function(response) { //if a good server response, heart turns red and class changes
    if (singleHeart.textContent === EMPTY_HEART) {
      singleHeart.textContent = FULL_HEART  
      singleHeart.classList.add('activated-heart')
    } else {
        singleHeart.textContent = EMPTY_HEART
        singleHeart.classList.remove('activated-heart')
    }
  
  })
  .catch(function(error){
    errMsg.classList.remove('hidden')
    setTimeout((returnHidden), 3000)
  })
 

}

//funtion to remove error modal from hidden -> hide modal after 3 seconds
function returnHidden () {
  errMsg.classList.add('hidden')
}


//Add event listener:
for (const heart of allHearts) {
  heart.addEventListener('click', clickHeart);
}

// function returnHeart() {
//   for (const heart of allHearts) {
//     heart.addEventListener('click', () =>

//   )}
// }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// if (singleHeart.textContent === EMPTY_HEART) {
//   singleHeart.textContent = FULL_HEART  
//   singleHeart.classList.add('activated-heart')
// } else {
//     singleHeart.textContent = EMPTY_HEART
//     singleHeart.classList.remove('activated-heart')
// }
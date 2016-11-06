$(document).ready(function () {

  // on click of any briefcase, dont open it
  $('.briefcases').click(function () {

    if (this.getAttribute('id') == 'true') { // if true
      console.log('im true');
      // draw random number from array
      // let it be the disguise briefcase
      $('#false' + array[0]).closest('.false').toggleClass('false maybe')
      // open all the other briefcase
      $('.false').shape('flip left');

      // remove from html
    } else {
      $(this).closest('.false').toggleClass('false maybe')
      console.log('im false');
      // find the real one
      // open all the others
      $('.false').shape('flip left');

      // remove from html
      setInterval(function() {
        $('.false').remove()
      }, 2000);
    }
  });
  // if is the special one, find 1 fake briefcase  OTHERWISE find the real one
  // open the 23 others
  // ask to click on briefcases again
  // open both to show which one has the money
  // restart the game button

});


$('.briefcases')
.transition('horizontal flip')
;

console.log("connected to Xavier's deal or no deal");

var bCMoney;
// Randomly choose which briefcase has $250,000
function moneyBriefcase () {
  bCMoney = Math.floor((Math.random() * 25) + 1);
}

moneyBriefcase();

// Create 25 briefcases
var array = [];
for (var i = 1; i < 26; i++) { // Loop and push into array array
  if (i === bCMoney) {
    console.log(i);
    $('.row').append(briefcaseTrue);
  } else {
    array.push(i);
    $('.row').append(
      `
        <div class="ui shape column false">
          <div class="sides">
            <div class="active side briefcases" id="false${i}">
              <img src="imgs/briefcase.jpg" width="50%" hspace="50" />
            </div>
            <div class="side">$0</div>
          </div>
        </div>
      `
    );
  }
}

shuffle(array)


// -----Fisher Yates Card Shuffling-----
function shuffle (array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  console.log(array);
  return array;
}


// Allocate $250,000
// Allocate rest of 0% discount vouchers
// On choose of 1 briefcase, show the rest are empty
// allow to choose again
// Show whether won

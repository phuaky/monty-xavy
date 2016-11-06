$(document).ready(function () {
  $('.icon').click(function() {
    $('.ui.modal').modal('show');
  })

  moneyBriefcase();
  create()
  shuffle(array)

  // on click of any briefcase, dont open it
  $('.briefcases').click(function () {

    $('.briefcases').toggleClass('briefcases 2BC')

    $('#choice').remove()
    $(this).parent().append('<p><h3><center id="choice">Stay with your choice</center></h3></p>')

    if (this.getAttribute('id') == 'true') { // if true
      // draw random number from array
      // let it be the disguise briefcase
      $('#false' + array[0]).closest('.false').toggleClass('false maybe')
      $('#false'+ array[0]).append('<p id="choice"><h3 style="color:red;"><center>Switch</center></h3></p>')
      // open all the other briefcase
      $('.false').shape('flip left');

      // remove from html
      var timer = 0
      var clear = setInterval(function() {
        $('.false').remove()
        timer += 1
        if (timer > 0) {
          clearInterval(clear)
        }
      }, 1500);

    } else {
      $('#true').append('<p id="choice"><h3 style="color:red;"><center>Switch</center></h3></p>')
      $(this).closest('.false').toggleClass('false maybe')
      // find the real one
      // open all the others
      $('.false').shape('flip left');

      // remove from html
      var timer = 0
      var clear = setInterval(function() {
        $('.false').remove()
        timer += 1
        if (timer > 0) {
          clearInterval(clear)
        }
      }, 1500);
    }

    $('.2BC').click(function () {
      // open both to show which one has the money
      $('.true').shape('flip left');
      $('.maybe').shape('flip left');

      // restart the game button
      $('#button').toggleClass('hidden')
    })

    $('#replay').click(function() {
      location.reload();
      // console.log('replay lei');
      // $('.shape').remove()
      // $('.button').remove()
      // console.log(array);
      // array =[]
      // console.log('refresh array', array);
      // console.log(bCMoney);
      // moneyBriefcase();
      // console.log(bCMoney);
      // create()
      // // shuffle(array)
    })
  });

});

var bCMoney;
// Randomly choose which briefcase has $250,000
function moneyBriefcase () {
  bCMoney = Math.floor((Math.random() * 25) + 1);
}

var array = [];

// Create 25 briefcases
function create() {
  for (var i = 1; i < 26; i++) { // Loop and push into array array
    if (i === bCMoney) {
      console.log("Briefcase " + i + " is the one with money");
      $('.row').append(
        `
          <div class="ui shape column true">
            <div class="sides">
              <div class="active side briefcases" id="true">
                <img src="imgs/briefcase.jpg" width="50%" hspace="50" />
              </div>
              <div class="side"><h1 style="color:red;">$250,000</h1></div>
            </div>
          </div>
        `
      );
    } else {
      array.push(i);
      $('.row').append(
        `
          <div class="ui shape column false">
            <div class="sides">
              <div class="active side briefcases" id="false${i}">
                <img src="imgs/briefcase.jpg" width="50%" hspace="50" />
              </div>
              <div class="side">
                <img src="imgs/zero.jpg" width="50%" hspace="50" />
              </div>
            </div>
          </div>
        `
      );
    }
  }
}

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
  return array;
}


// Allocate $250,000
// Allocate rest of 0% discount vouchers
// On choose of 1 briefcase, show the rest are empty
// allow to choose again
// Show whether won

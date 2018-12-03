'use strict';

$(document).ready(function () {
  var turn = 'X';
  $('[data-cell]').on('click', function () {
    if ($(this).text() === '') {
      $(this).text(turn);
      checkForWin();
      if (turn === 'O') {
        turn = 'X';
      } else {
        turn = 'O';
      }
    }
  })

document.getElementById("clear").onclick = function fun() {

  $('[data-cell]').empty();
  $('#announce-winner').empty();
  
}



  // if theres a win on row 1...
  function checkForWin() {

  
    if ($('[data-cell="0"]').text() === turn &&
      $('[data-cell="1"]').text() === turn &&
      $('[data-cell="2"]').text() === turn) {
      $('#announce-winner').text(`${turn} wins`);
    }
    if ($('[data-cell="3"]').text() === turn &&
      $('[data-cell="4"]').text() === turn &&
      $('[data-cell="5"]').text() === turn) {
      $('#announce-winner').text(`${turn} wins`);
    }
    if ($('[data-cell="6"]').text() === turn &&
      $('[data-cell="7"]').text() === turn &&
      $('[data-cell="8"]').text() === turn) {
      $('#announce-winner').text(`${turn} wins`);
    }
     if ($('[data-cell="0"]').text() === turn &&
    $('[data-cell="3"]').text() === turn &&
    $('[data-cell="6"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  }
   if ($('[data-cell="1"]').text() === turn &&
    $('[data-cell="4"]').text() === turn &&
    $('[data-cell="7"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  }
   if ($('[data-cell="2"]').text() === turn &&
    $('[data-cell="5"]').text() === turn &&
    $('[data-cell="8"]').text() === turn) {
    $('#announce-winner').text(`${turn} wins`);
  }
   if ($('[data-cell="0"]').text() === turn &&
  $('[data-cell="4"]').text() === turn &&
  $('[data-cell="8"]').text() === turn) {
  $('#announce-winner').text(`${turn} wins`);
}
 if ($('[data-cell="2"]').text() === turn &&
  $('[data-cell="4"]').text() === turn &&
  $('[data-cell="6"]').text() === turn) {
  $('#announce-winner').text(`${turn} wins`);
}

if (!($('[data-cell="0"]').text() === '') &&
!($('[data-cell="1"]').text() === '') &&
!($('[data-cell="2"]').text() === '') &&
!($('[data-cell="3"]').text() === '') &&
!($('[data-cell="4"]').text() === '') &&
!($('[data-cell="5"]').text() === '') &&
!($('[data-cell="6"]').text() === '') &&
!($('[data-cell="7"]').text() === '') &&
!($('[data-cell="8"]').text() === ''))


$('#announce-winner').text(`It is a tie`);



}

  // if (document.getElementById('data-cell').innerHTML === ""){
  //   $('#announce-winner').text(`It is a tie`);
  // }

  
});
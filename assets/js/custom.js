/**
 * Created with artistly-sails.
 * User: parkerproject
 * Date: 2015-04-10
 * Time: 05:08 PM
 * To change this template use Tools | Templates.
 */

$(function() {
  window._hash = window.location.hash;
  myStoryModal();

  $('.js-email').val('');
  $(document).on('click', '.js-submit', function() {
    checkEmail();
  });



});


function myStoryModal() {
  var globalModal = $('.global-modal');
  $(".btn-green-flat-trigger").on("click", function(e) {
    e.preventDefault();
    $(globalModal).toggleClass('global-modal-show');
  });
  $(".overlay").on("click", function() {
    $(globalModal).toggleClass('global-modal-show');
  });
  $(".global-modal_close").on("click", function(e) {
    e.preventDefault();
    $(globalModal).toggleClass('global-modal-show');
  });
  $(".mobile-close").on("click", function(e) {
    e.preventDefault();
    $(globalModal).toggleClass('global-modal-show');
  });
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function checkEmail() {
  var email = document.querySelector('.js-email').value;
  if (validateEmail(email)) {
    sendEmail(email);
  } else {
    sweetAlert("Oops...", "enter your valid email!", "error");
  }
}

function sendEmail(email) {
  $('.js-submit').text('processing...');

  var hash = window._hash;
  hash = hash.replace('#', '');

  $.post('/process_email/', {
    email: email,
    hash: hash
  }, function(data) {
    console.log(data);

    if (data.status == 'success') {
      $('.js-submit').text('get invite');
      swal('Awesome! We have received your request');
    } else {
      $('.js-submit').text('get invite');
      swal('You have already submitted your email.');
      //document.querySelector('.form').innerHTML = '<i class="notify animated bounceInRight">' + data + '</i>';
    }


  });
}
$(document).ready(function(){
  let modalAlert = $('.modal-alert');
  let modal = $('#modal');
  let close = $('#close');

  modalAlert.on('click', function(){
    modal.addClass('modal_active');
  });
  close.on('click', function(){
    modal.removeClass('modal_active');
  });
});
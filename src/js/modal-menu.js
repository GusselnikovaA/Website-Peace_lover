$(document).ready(function(){
  let menuAlert = $('.menu-alert');
  let modalMenu = $('#modal-menu');
  let closeMenu = $('.menu-close');

  menuAlert.on('click', function(){
    modalMenu.addClass('modal-menu_active');
  });
  closeMenu.on('click', function(){
    modalMenu.removeClass('modal-menu_active');
  });
});
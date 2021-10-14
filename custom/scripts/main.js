function ShowHide(ShowClass, HideClass) {
  $(`.${ShowClass}`).fadeIn('slow');
  $(`.${HideClass}`).hide();
}
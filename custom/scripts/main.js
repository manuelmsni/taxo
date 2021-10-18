function ShowHide(ShowClass, HideClass) {
  $(`.${ShowClass}`).fadeIn('slow');
  $(`.${HideClass}`).hide();
}

function ImgSrcDescription(ThisImgSRC, ImgDesc) {
  var ModImg = document.getElementById("ModalImg");
  var Desc = ImgDesc;
  $("body").css('overflow','hidden');
  ModImg.src = ThisImgSRC;
  $("#ModalDesc").text(Desc);
  $("#ImgModal").fadeIn('slow');
}

function CloseModal() {
  $("body").css('overflow','visible');
  $("#ImgModal").hide();
}
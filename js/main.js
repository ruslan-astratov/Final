$(document).ready(function () {
  AOS.init();

  //  При клике на кнопку выпадает меню
  $("#burger").click(function () {
    $("#burger").toggleClass("active");
    $("#dropdown").toggleClass("active");
    //  У тела страницы убирается возможность скролла
    $("#body").toggleClass("active");
  });

  $(document).mouseup(function (e) {
    var $target = $(e.target);
    if (
      $target.closest("#dropdown").length == 0 &&
      $target.closest("#burger").length == 0
    ) {
      $("#dropdown").removeClass("active");
      $("#burger").removeClass("active");

      $("#body").removeClass("active");
    }
  });

  //

  let containerE1 = document.querySelector("#portfolio-projects");

  let mixer = mixitup(containerE1, {
    classNames: {
      block: "",
    },
  });
});

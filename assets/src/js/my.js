var url_string = window.location.href;
function findActivePage(name) {
  if (name) {
    var id = '#' + name;
    $(id).addClass('active');
  } else {
    $('#home').addClass('active');
  }
}

if (url_string.indexOf("products") !== -1) {
  findActivePage("products");
} else if (url_string.indexOf("projects") !== -1) {
  findActivePage("projects");
} else if (url_string.indexOf("about-us") !== -1) {
  findActivePage("about-us");
} else {
  findActivePage();
}


// scroll to top

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });
});

var url_string = window.location.href;
function findActivePage (name) {
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

// console.log(url_string, findActivePage("products"));
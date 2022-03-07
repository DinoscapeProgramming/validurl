const isValid = function (url) {
  var valid;
  try {
    var testing = new URL(url);
    var valid = true;
  } catch {
    var valid = false;
  }
  return valid;
}

module.exports = isValid;
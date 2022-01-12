function quartsToCups(quarts) {
  return quarts * 4;
}
function pintsToCups(pints) {
  return pints * 2;
}

function ouncesToCups(ounces) {
  return ounces / 8;
}

function tablespoonsToTeaspoons(tablespoons) {
  return tablespoons * 4;
}

function ouncesToMililiters(ounces) {
  return ounces * 29.5735;
}

$(document).ready(function () {
  $("#quarts-to-cups").submit(function (event) {
    event.preventDefault();
    const quarts = parseInt($("#quarts").val());
    const result = quartsToCups(quarts);
    $(".output1").text(result + " cups");
  });
  $("#pints-to-cups").submit(function (event) {
    event.preventDefault();
    const quarts = parseInt($("#pints").val());
    const result = pintsToCups(quarts);
    $(".output2").text(result + " cups");
  });
  $("#ounces-to-cups").submit(function (event) {
    event.preventDefault();
    const quarts = parseInt($("# ounces").val());
    const result = ouncesToCups(quarts);
    $(".output3").text(result + " cups");
  });
  $("#tablespoons-to-teaspoons").submit(function (event) {
    event.preventDefault();
    const quarts = parseInt($("#tablespoons").val());
    const result = tablespoonsToTeaspoons(quarts);
    $(".output4").text(result + "ts");
  });
  $("#ounces-to-mililiters").submit(function (event) {
    event.preventDefault();
    const quarts = parseInt($("#ounces2").val());
    const result = ouncesToMililiters(quarts);
    $(".output5").text(result + "ml");
  });
});

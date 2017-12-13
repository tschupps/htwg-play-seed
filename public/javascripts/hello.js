
importPackage(de.htwg.se.pixels.controller.Controller);
var color = "black";
var game = 1

if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
}

$(document).ready(function () {

    $(".Game1").on("click", function() {
        game = 1
        window.location.replace("http://localhost:9000/game/" + game);
    });

    $(".Game2").on("click", function() {
        game = 2
        window.location.replace("http://localhost:9000/game/" + game);
    });

    $(".Game3").on("click", function() {
        game = 3
        window.location.replace("http://localhost:9000/game/" + game);
    });

    $(".cell").on("click", function() {
        $(this).css("background", color);
    });

    $(".yellowButton").on("click", function() {
        color = "yellow"
    });

    $(".redButton").on("click", function() {
        color = "red"
    });

    $(".blackButton").on("click", function() {
        color = "black"
    });

    $(".whiteButton").on("click", function() {
        color = "white"
    });

    $(".greenButton").on("click", function() {
        color = "green"
    });

    $(".blueButton").on("click", function() {
        color = "blue"
    });
});
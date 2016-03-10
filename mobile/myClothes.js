var openModalInteraction = require('./interactions/Modal')
var ClothesButton = require("./components/ClothesMainButton");
var AddTShirtComponent = require("./components/AddTShirtComponent");

var CameraCaptureComponent = require("./components/CameraCaptureComponent");

module.exports = function(){

  var clothesPage = tabris.create("Page", {
    title: "Montando seu guarda-roupa",
    topLevel: true
  });

  var scrollView = tabris.create("ScrollView", {
    left: 0, right: 0, top: 0, bottom: 0
  }).appendTo(clothesPage);

  var camisaMangaCurta = new ClothesButton("manga curta", "images/camisa_manga_curta.png", 1, function() {
    var imageView = tabris.create("ImageView", {
      scaleMode: "fit",
      layoutData : {width: screen.width, height: screen.height}
    });
    imageView.set("background", "black");
    clothesPage.append(imageView);

    function onSuccess(imageUrl) {
      imageView.set("image", {src: imageUrl, width: screen.width, height: screen.height});
      imageView.set("layoutData", {centerX: 0, top: 0});

      openModalInteraction(clothesPage, new AddTShirtComponent(), function() {imageView.dispose()});
    }
    var clothesPicture = CameraCaptureComponent(onSuccess);
  });
  camisaMangaCurta.appendTo(scrollView);

  var calca = new ClothesButton("calça", "images/calca.png", 2, function() {
    openModalInteraction(clothesPage, new AddPantsComponent());
  });
  calca.appendTo(scrollView);

  var camiseta = new ClothesButton("camiseta", "images/camiseta.png", 3);
  camiseta.appendTo(scrollView);

  var camisaPolo = new ClothesButton("camisa polo", "images/camisa_polo.png", 4);
  camisaPolo.appendTo(scrollView);

  var camisaFormal = new ClothesButton("manga cumprida", "images/camisa_manga_cumprida.png", 5);
  camisaFormal.appendTo(scrollView);

  var sapato = new ClothesButton("sapato", "images/sapato.png", 6);
  sapato.appendTo(scrollView);

  var tenis = new ClothesButton("tênis", "images/tenis.png", 7);
  tenis.appendTo(scrollView);

  clothesPage.open();


}

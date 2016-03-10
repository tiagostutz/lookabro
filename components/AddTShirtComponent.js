module.exports = function(onCancel) {

  var composite = tabris.create("Composite");

  var titulo = tabris.create("TextView", {
    text: "Selecione o tipo da estampa",
    font: "bold 13px",
    textColor: "#444",
    alignment: "center",
    layoutData: {top: 0, width: 280},
  });

  var xadrezHolder = tabris.create("Composite", {
    layoutData: {width: 112, height: 118, left: 20, top: 40}
  });
  var xadrez = tabris.create("ImageView", {
    image: "../images/estampa_xadrez.png",
    layoutData: { width: 96, height: 96, centerX: 0, centerY: 0 }
  }).appendTo(xadrezHolder);

  var textXadrez = tabris.create("TextView", {
    text: "xadrez",
    layoutData : { centerX:0, bottom: 0},
    textColor: "red"
  }).appendTo(xadrezHolder)

  var lisaHolder = tabris.create("Composite", {
    layoutData: {width: 96, height: 96, left: 152, top: 40},
    background: "black"
  });

  composite.append(titulo, xadrezHolder, lisaHolder);

  return composite;
}

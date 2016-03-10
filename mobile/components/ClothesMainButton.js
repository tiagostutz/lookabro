module.exports = function(name, imageURL, position, onTap) {
  var TOP_POSITION = 75;
  var topPosition = ( Math.floor((position-1)/2) * TOP_POSITION )+ 10;
  var leftPosition = ((position%2)!=0) ? 8 : 89;
  // console.log(topPosition);
  var imageElement = tabris.create("ImageView", {
    image: imageURL,
    background: "white",
    layoutData: {left: leftPosition+12, width: 104, height: 94, top: topPosition}
  }).on("tap", onTap);
  var txtElement = tabris.create("TextView", {
    text: name,
    alignment: "center",
    layoutData: {left: leftPosition, width: 128, top: topPosition+100}
  });
  var composeElement = tabris.create("Composite", {
    layoutData: {left: leftPosition, top: topPosition}
  }).append( txtElement,imageElement);

  composeElement.once("resize", function(widget, bounds) {
    widget.set({
      opacity: 0.0,
      transform: {translationY: 20}
    });
    widget.animate({
      opacity: 1.0,
      transform: {translationY: 0}
    }, {
      delay: (position * 80),
      duration: 300,
      easing: "ease-in-out"
    });

  });
  return composeElement;
}

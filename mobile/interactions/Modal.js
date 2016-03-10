module.exports = function(page, component, onCancel) {

  var modal = tabris.create("Composite", {
    id: "modal",
    layoutData: {width: screen.width, centerX: 0, centerY: 0, height: screen.height},
    background: "rgba(0,0,0,.4)"
  });

  //checar se já existe o elemento com ID para "requentar"
  var holderWidth = screen.width-(screen.width*.1);
  var holder = tabris.create("Composite", {
    layoutData: {width: holderWidth, centerX: 0, bottom: 100, height: 380},
    background: "white"
  });

  //checar se já existe o elemento com ID para "requentar"
  var buttonCancel = tabris.create("Button", {
    text: "Cancelar",
    layoutData: {width: holderWidth, centerX: 0, bottom: 45, height: 50},
    background: "white"
  }).on("select", function() {
    if (onCancel != null) {
      onCancel();
    }
    holder.animate({
      transform: {translationY: screen.height}
    }, {
      delay: 0,
      duration: 200,
      easing: "ease-out"
    });

    buttonCancel.once("animationend", function() {
      modal.dispose();
    });

    modal.set("background", "transparent");

    buttonCancel.animate({
      transform: {translationY: screen.height}
    }, {
      delay: 100,
      duration: 200,
      easing: "ease-out"
    });


  });

  component.set("layoutData", {top: 20});

  holder.append(component);
  modal.append(holder, buttonCancel);

  holder.set({
    transform: {translationY: screen.height}
  });
  buttonCancel.set({
    transform: {translationY: screen.height}
  });

  page.append(modal);

  holder.animate({
    transform: {translationY: 0}
  }, {
    delay: 0,
    duration: 400,
    easing: "ease-in-out"
  });

  buttonCancel.animate({
    transform: {translationY: 0}
  }, {
    delay: 80,
    duration: 500,
    easing: "ease-in-out"
  });
}

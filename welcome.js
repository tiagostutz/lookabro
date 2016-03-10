module.exports = function(){
  tabris.ui.set("displayMode", "fullscreen");
  var welcomePage = tabris.create("Page", {
    title: "",
    topLevel: true
  }).once("resize", function() {
    tabris.ui.set("toolbarVisible", false);
  }).open();

  var imageView = tabris.create("ImageView", {
    image: 'images/splash-bg_2.jpg',
    background: "rgb(255, 255, 255)",
    layoutData: {centerY: -50,centerX: 0, height: 900}
  }).appendTo(welcomePage);

  var imageView = tabris.create("ImageView", {
    image: 'images/hanger22.png',
    background: "transparent",
    layoutData: {top: 120,centerX: 0, height: 75}
  }).appendTo(welcomePage);


  var textIntroducao = tabris.create("TextView", {
    text: "Posso te ajudar a montar looks te darão mais estilo e confiança.",
    textColor: "rgb(200,200,200)",
    font:"20px",
    alignment: "center",
    layoutData : {top: 200, width: 240, centerX: 0}
  }).appendTo(welcomePage);

  var iniciarButton = tabris.create("Button", {
    text: "Vamos começar?",
    alignment: "center",
    background: "transparent",
    textColor: "white",
    font: "bold 29px",
    layoutData: { bottom: 100, left: 20, right: 20}
  }).on("select", function() {
    this.set("text", "Demorou!");
    localStorage.setItem("firstTime","false");
    setTimeout(function() {
      require("./myClothes")();
      welcomePage.close();
    }, 500);
  }).appendTo(welcomePage);

  welcomePage.open();

}

localStorage.setItem("firstTime","false");
if(localStorage.getItem("firstTime") == null) {
  localStorage.setItem("firstTime","true");
}

if (localStorage.getItem("firstTime") == "true") {
  require("./welcome")();
}else{
  require("./myClothes")();
}

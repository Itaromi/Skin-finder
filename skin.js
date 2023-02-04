function loadSkin() {
  var username = document.getElementById("username").value;
  var skinURL = "https://minotar.net/avatar/" + username + "/100.png";
  var skinCommand = "/give @s minecraft:player_head{SkullOwner:"+ username +"}";
  var skinPreview = document.getElementById("skin-preview");
  var skinCommandPreview = document.getElementById("skin-command");
  skinPreview.innerHTML = `<img src= ${skinURL} >`;
  skinCommandPreview.innerHTML = `<p> ${skinCommand} <p>`;
} 



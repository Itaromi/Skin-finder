function loadSkin() {
  const username = document.getElementById("username").value;
  const skinURL = "https://minotar.net/avatar/" + username + "/100.png";
  const skinCommand = "/give @s minecraft:player_head{SkullOwner:"+ username +"}";
  const skinPreview = document.getElementById("skin-preview");
  const skinCommandPreview = document.getElementById("skin-command");
  skinPreview.innerHTML = `<img src= ${skinURL} >`;
  skinCommandPreview.innerHTML = `<p> ${skinCommand} <p>`;
} 



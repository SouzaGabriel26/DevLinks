function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light");
  
  const profileImg = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    profileImg.src = "./assets/avatar-light.png"
  } else {
    profileImg.src = "./assets/avatar-dark.png"
  }
}
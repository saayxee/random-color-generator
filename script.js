const color = "RGB(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";

document.querySelector("#color").style.background = color;
document.querySelector("#color-rgb").innerHTML = color;


document.querySelector("#copy-icon").addEventListener("click", (event) => {
  navigator.clipboard.writeText(color);
  event.target.parentElement.innerHTML = '<i class="fa-solid fa-check"></i>';
  event.target.removeAttribute("id");
  setTimeout(() => {
    document.querySelector(".copy-icon").innerHTML =
      '<i class="fa-solid fa-copy"></i>';
    document.querySelector(".copy-icon").target.setAttribute("id", "copy-icon"); 
  }, 2000)
})
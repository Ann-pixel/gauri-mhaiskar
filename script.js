// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
const aboutNav = document.querySelector(".about-nav");
const projectsNav = document.querySelector(".projects-nav");
const connectNav = document.querySelector(".connect-nav");

function showAbout() {
  projectsNav.classList.add("hidden");
  connectNav.classList.add("hidden");
  aboutNav.classList.remove("hidden");
}
function showProjects() {
  aboutNav.classList.add("hidden");
  connectNav.classList.add("hidden");
  projectsNav.classList.remove("hidden");
}
function showConnect() {
  projectsNav.classList.add("hidden");
  showNav.classList.add("hidden");
  connectNav.classList.remove("hidden");
}

aboutNav.addEventListener("click", showAbout);
projectsNav.addEventListener("click", showProjects);
connectNav.addEventListener("click", showConnect);

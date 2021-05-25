// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
const aboutNav = document.querySelector(".about-nav");
const projectsNav = document.querySelector(".projects-nav");
const connectNav = document.querySelector(".connect-nav");

const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");
const connectSection = document.getElementById("connect");
function showAbout() {
  console.log("clicked about");
  projectsSection.classList.add("hidden");
  connectSection.classList.add("hidden");
  aboutSection.classList.remove("hidden");
}
function showProjects() {
  console.log("clicked project");
  aboutSection.classList.add("hidden");
  connectSection.classList.add("hidden");
  projectsSection.classList.remove("hidden");
}
function showConnect() {
  console.log("clicked connect");
  projectsSection.classList.add("hidden");
  aboutSection.classList.add("hidden");
  connectSection.classList.remove("hidden");
}

aboutNav.addEventListener("click", showAbout);
projectsNav.addEventListener("click", showProjects);
connectNav.addEventListener("click", showConnect);

import gameLoop from "./gameLoop.js";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    console.log("interactive");
    // Do loading animation
  }
  if (event.target.readyState === "complete") {
    // remove temp assets loading div
    // remove loading animation
    console.log("Initialisation de la Game Loop");
    gameLoop(0)
  }
})
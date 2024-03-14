let params = new URLSearchParams(document.location.search);
const version = "0.0.1";

import * as Prod from "./game/bootloader.js";
import * as Dev from "./game/bootloader.dev.js";

async function boot(env) {
  if (env !== "dev") {
    await Prod.preLoader(env);
    return;
  }
  await Dev.preLoader(env);
}

addEventListener("DOMContentLoaded", () => {
  //TODO Road to bootloader
  const env = params.get("env")

  if (env === "prod") {
    // Run production runtime
    boot(env);
  }
  if (env === "dev") {
    // Run devloppment runtime
    boot(env);
  }
  
  if (!env) {
    document.getElementById("main").innerHTML = `
    <div class="load-warn" style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3rem;">
      <h1>Veuillez choisir un mode d'execution :</h1>
      <div style="font-size: larger; display: flex; flex-direction: column; gap: 2rem;">
        <a href="index.html?env=prod" style="color: #6089e7;">Continuer normalement.</a>
        <a href="index.html?env=dev" style="color: #b475dc;">Continuer en mode <em style="text-decoration: wavy;">développement.</em></a>
      </div>
      <p>v${version}</p>
    </div>
    `
  }
});
import Cactus from "./cactus/index.js";
import Player from "./player/index.js";
import Pterodactyl from "./pterodactyl/index.js";

function getSpriteForAnimation(elapsed, type, animationName) {
  switch (type) {
    case "player":
      switch (animationName) {
        case "idle":
          return Player.idleAnimation(elapsed);
      }
      break
    case "cactus":
      break
    case "pterodactyl":
      break

  }

}

const AnimationHandler = {
  getSpriteForAnimation
}
export default AnimationHandler;
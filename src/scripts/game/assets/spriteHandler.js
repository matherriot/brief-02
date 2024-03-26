import Sprites from "./sprite/index.js";

/**
 * Retrieves the sprite for a given target.
 *
 * @param {string} target - The target alias
 * > bg | cactus | ptero | tyra | ui
 * @return {Object} - The sprite object for the given target.
 */
function getSpritesFor(target) {
  switch (target) {
    case "bg":
      return Sprites.Background
    case "cactus":
      return Sprites.Cactus
    case "ptero":
      return Sprites.Pterodactyl
    case "tyra":
      return Sprites.Tyranausor
    case "ui":
      return Sprites.Ui
  }
}

const SpriteHandler = {
  getSpritesFor
}
export default SpriteHandler;
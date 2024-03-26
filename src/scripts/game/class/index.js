import GameObject from "./GameObject.js";
import Background from "./Background.js";
import Cactus from "./Cactus.js";
import Tyrannosaurus from "./Tyra.js";
import Pterodactyl from "./Ptero.js";


/**
 * @class
 * @classdesc Represents a collection of classes related to the game objects.
 * @namespace
 */
const Class = {
  GameObject,
  Background,
  Cactus,
  Dyno: Tyrannosaurus,
  Pterodactyl
}
export default Class
import GameObject from "./GameObject.js";


class Cactus extends GameObject {
  constructor(hasCollision, CurrentSpeedMultiplier, y) {
    super(`obstacle`,true, CurrentSpeedMultiplier, y);
  }
  getDomId() {
    return super.getDomId();
  }
}
export default Cactus;
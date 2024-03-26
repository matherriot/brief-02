import GameObject from "./GameObject.js";

class Background extends GameObject {
  constructor(type, hasCollision, CurrentSpeedMultiplier, x, y) {
    self.id = self.id++
      super(self.id, type, hasCollision, CurrentSpeedMultiplier, x, y);
      this.bgImage = "";
  }

  set backgroundImage(image) {
      this.bgImage = image;
  }

  get backgroundImage() {
      return this.bgImage;
  }
}
export default Background;
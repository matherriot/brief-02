import GameView from "../gameViewHandler.js";
import Utils from "../utils.js";
import Sprites from "../assets/spriteHandler.js";
import AnimationHandler from "../animation/animationHandler.js";

let counter = 0;

export class GameObject {
  #uid = counter++;
  #canCollide;
  /* The type of the entity. Possible values are "player", "obstacle", or "background". */
  type;
  /* Pixel per second*/
  #basePxpsAxisX;
  #basePxpsAxisY;
  #movingDirection;
  #speedMultiplier
  #currentX;
  #restX;
  #currentY;
  #restY;
  #domElement;
  #curentAnimation;

  /**
   * Creates a new instance of the Constructor class.
   *
   * @param {string} type > The type of the entity. Possible values are "player", "obstacle", or "background".
   * @param {boolean} hasCollision > Specifies if the instance has collision.
   * @param {number} currentSpeedMultiplier > The current speed multiplier of the instance.
   * @param {number} x > The initial x-coordinate of the instance.
   * @param {number} y > The initial y-coordinate of the instance.
   */
  constructor(type, hasCollision, currentSpeedMultiplier, y) {
    this.#currentY = y;
    this.#canCollide = hasCollision;
    this.#speedMultiplier = currentSpeedMultiplier
    this.type = type
    this.#domElement = document.createElement(`div`,{})
    // ClassName with global
    // Set the custom UID
    this.#setDomId(`${this.type}-${this.#uid}`)
    this.#domElement.innerHTML = `
      <div
        id="hitbox-${this.getDomId()}"
        class="hitbox"
      ></div>
      <img
        id="sprite-${this.getDomId()}"
        src=""
        alt=""
      >`;

    /*src="${Sprites.getSpritesFor("tyra").sprite.idle[0]}"
        height="${Sprites.getSpritesFor("tyra").meta.dimensions.idle.height * Sprites.getSpritesFor("tyra").meta.scale}px"
        alt="Test"*/
    // Insert element in dom, next this it cannot be modified by "this.#domElement"
    this.appendDomElementInGame()
    this.addClassName("object");
    // If it is a ground it should be glue top/left to top/right of the precedent ground
    if (type !== "player") {
      this.#currentX = (Utils.getDomElementDimensionsAndStyle('game').width + 32)
    } else {
      this.#currentX = (Utils.getDomElementDimensionsAndStyle('game').width) / 6;
    }
    this.#transformDomPos()
    this.#curentAnimation = "idle"
    this.#movingDirection = "right"
  }
  #transformDomPos() {
    //TODO Gérer l'arondi et le reste bon pour somme avec le suivant
    this.#domElement.style.left = this.#currentX + 'px';
    this.#domElement.style.top = this.#currentY + 'px';
    //this.#domElement.style.transform = `${this.#currentX}px, ${this.#currentY}px`;
  }

  /**
   * Moves the object to the specified coordinates.
   *
   * @param {object} coordinateObject - The coordinates to move the object to.
   * @param {number} coordinateObject.x - The x-coordinate to move the object to.
   * @param {number} coordinateObject.y - The y-coordinate to move the object to.
   *
   * @return {void} - This method does not return any value.
   */
  customMove(coordinateObject) {
    this.#currentX = coordinateObject.x;
    this.#currentY = coordinateObject.y;
    this.#transformDomPos()
  }

  isOutLeft() {
    return (this.#currentX + Utils.getDomElementDimensionsAndStyle(`${this.type}-${this.#uid}`)) < -16;
  }

  setBasePxps(pxpsX,pxpsY) {
    this.#basePxpsAxisX = pxpsX;
    this.#basePxpsAxisY = pxpsY;
  }

  /**
   * Moves the object based on the given last timestamp.
   *
   * @param {number} lastTimestamp - The last timestamp in milliseconds.
   * @return {void}
   */
  move(lastTimestamp) {
    const elapsedMs = (Date.now() - lastTimestamp);
    const pxpmsAxisX = (this.#basePxpsAxisX/1000);
    const pxpmsAxisY = (this.#basePxpsAxisY/1000);
    let val;
    switch (this.#movingDirection) {
      case "left":
        this.#currentX = this.#currentX - (elapsedMs * (pxpmsAxisX * this.#speedMultiplier));
        break
      case "right":
        this.#currentX = this.#currentX + (elapsedMs * (pxpmsAxisX * this.#speedMultiplier));
        break
      case "up":
        this.#currentY = this.#currentY - (elapsedMs * (pxpmsAxisY * this.#speedMultiplier));
        break
      case "down":
        this.#currentY = this.#currentY + (elapsedMs * (pxpmsAxisY * this.#speedMultiplier));
        break
      case "upLeft":
        this.#currentX = this.#currentX - (elapsedMs * (pxpmsAxisX * this.#speedMultiplier));
        this.#currentY = this.#currentY - (elapsedMs * (pxpmsAxisY * this.#speedMultiplier));
        break
      case "upRight":
        this.#currentX = this.#currentX + (elapsedMs * (pxpmsAxisX * this.#speedMultiplier));
        this.#currentY = this.#currentY - (elapsedMs * (pxpmsAxisY * this.#speedMultiplier));
        break
      case "downLeft":
        this.#currentX = this.#currentX - (elapsedMs * (pxpmsAxisX * this.#speedMultiplier));
        this.#currentY = this.#currentY + (elapsedMs * (pxpmsAxisY * this.#speedMultiplier));
        break
      case "downRight":
        this.#currentX = this.#currentX + (elapsedMs * (pxpmsAxisX * this.#speedMultiplier));
        this.#currentY = this.#currentY + (elapsedMs * (pxpmsAxisY * this.#speedMultiplier));
        break
      case "static":
        break
      case "":
        console.log(`Oups, pas de direction... (${this.#uid}`)
        break
    }
    this.#transformDomPos();
  }

  appendDomElementInGame() {
    GameView.append(this.#domElement)
  }

  /**
   * Dispawn and delete the current instance if it is out left.
   *
   * @returns {boolean} Returns true if the instance is out left and has been successfully despawned and deleted, otherwise returns false.
   */
  #dispawnAndDelete() {
    if (this.isOutLeft()) {
      //DOM remove
      document.getElementById(this.getDomId()).remove();

      // Delete current instance
      delete this;
      //TODO drop via entity
      return true;
    }
    return false;
  }
  /**
   * Adds a CSS class name to the DOM element associated with this object.
   *
   * @param {String} className - The CSS class name to be added.
   *
   * @return {void}
   */
  addClassName(className) {
    //TODO implement on injection by id if exist in DOM
    this.#domElement.classList.add(className.toString());
    document.getElementById(`${this.type}-${this.#uid}`).classList.add(className.toString());
  }
  /**
   * Removes the specified class name from the DOM element associated with this object.
   *
   * @param {string} className - The class name to be removed.
   *
   * @return {undefined}
   */
  removeClassName(className) {
    //TODO implement on injection by id if exist in DOM
    this.#domElement.classList.remove(className.toString())
    document.getElementById(`${this.type}-${this.#uid}`).classList.remove(className.toString())
  }
  /**
   * Toggles the given class name on the DOM element associated with the current object.
   *
   * @param {string} className - The class name to toggle.
   * @return {void}
   */
  toggleClassName(className) {
    //TODO implement on injection by id if exist in DOM
    this.#domElement.classList.toggle(className.toString());
    document.getElementById(`${this.type}-${this.#uid}`).classList.toggle(className.toString())
  }
  /**
   * Sets the ID of the DOM element.
   *
   * @param {string} id - The ID to set for the DOM element.
   *
   * @return {void}
   */
  #setDomId(id) {
    this.#domElement.id = id;
  }
  /**
   * Retrieves the ID of the DOM element associated with the object.
   *
   * @return {string} The ID of the DOM element.
   */
  getDomId() {
    return this.#domElement.id;
  }

  #setSprite(src, alt, width, height) {
    const element = document.getElementById(`sprite-${this.type}-${this.#uid}`);
    element.src = src
    element.alt = alt
    element.width = Math.round(width)
    element.height = Math.round(height)
  }

  setCurrentAnimation(animationName) {
    this.#curentAnimation = animationName
  }

  doCurrentAnimation(elapsed) {
    //TODO Run de l'appel à l'animation et get des données de sprite
    const spriteData = AnimationHandler.getSpriteForAnimation(elapsed, this.type, this.#curentAnimation)
    //console.log(spriteData)
    if (!spriteData) {
      return false
    }
    this.#setSprite(spriteData.sprite, spriteData.metadata.description, spriteData.metadata.width, spriteData.metadata.height)
    return true
  }

  /**
   * Sets the moving direction of the object.
   *
   * @param {string} direction > The moving direction. Valid values are "left", "right", or "static".
   * @return void
   */
  setMovingDirection(direction) {
    // left=- right=+ static=0
    if (direction === "left" || direction === "right" || direction === "static" || direction === "upLeft" || direction === "upRight" || direction === "downLeft" || direction === "downRight") {
      console.log(direction)
      this.#movingDirection = direction
    }
  }
  /**
   * Returns the current moving direction.
   *
   * @returns {string} The current moving direction.
   */
  get movingDirection() {
    return this.#movingDirection
  }

  /**
   * Retrieves the unique identifier (uid) of the object.
   *
   * @returns {any} The unique identifier (uid) of the object.
   */
  get uid() {
      return this.#uid;
  }

  /**
   * Retrieves the value of the `canCollide` property.
   *
   * @return {boolean} - The value of the `canCollide` property.
   */
  get canCollide() {
      return this.#canCollide;
  }

  /**
   * Sets the value of canCollide.
   *
   * @param {boolean} value - The new value of canCollide.
   * @return {void}
   */
  setCanCollide(value) {
    this.#canCollide = value;
  }

  /**
   * Sets the speed of the object in pixels per second.
   *
   * @param {number} pxps - The speed in pixels per second to set.
   */
  setSpeed(pxps) {
    this.#basePxpsAxisX = pxps;
  }
  setSpeedMultiplier(multiplier) {
      this.#speedMultiplier = multiplier;
  }
  /**
   * Retrieve the speed value in pixels-per-second for the axis X.
   *
   * @return {number} The speed value in pixels-per-second for the axis X.
   */
  get speed() {
    return this.#basePxpsAxisX;
  }

  get type() {
    return this.type
  }
}
export default GameObject;
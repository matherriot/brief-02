import SpriteHandler from "../../assets/spriteHandler.js";
let targetedSprites= SpriteHandler.getSpritesFor("tyra");
let indexOfSprite = targetedSprites.sprite.run.length - 1;
let lastSpriteData;
let currentStep = 0;
const targetIndex = currentStep;

const msPerStep = 115
let ms = 0

/**
 * Calculates animation state based on elapsed time.
 * @param {number} elapsed - The elapsed time since the start of the animation in milliseconds.
 * otherwise returns an object containing metadata and sprite information.
 */
function idleAnimation(elapsed) {
  ms = ms + elapsed;
  if (ms < msPerStep) {
    return lastSpriteData
  }
  ms = ms - msPerStep
  if (currentStep >= indexOfSprite) {
    currentStep = 0;
  } else {
    currentStep++;
  }
  const rand = Math.floor(Math.random() * 10);
  if (rand <= 1) {
    lastSpriteData = {
      "metadata": {
        "description": `${targetedSprites.meta.name}`,
        "width": Math.round(targetedSprites.meta.scale * targetedSprites.meta.dimensions.idle.width),
        "height": Math.round(targetedSprites.meta.scale * targetedSprites.meta.dimensions.idle.height)
      },
      "sprite": `${targetedSprites.sprite.idle[currentStep]}`
    }
  }
  return lastSpriteData;

}
export default idleAnimation;
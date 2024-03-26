/**
 * Retrieves the dimensions, metadata, and computed style of a DOM element.
 *
 * @param {string} elementId - The ID of the DOM element.
 * @return {object} - The dimensions, metadata, and computed style of the DOM element.
 */
function getDomElementDimensionsAndStyle(elementId) {
  const element = document.querySelector(`#${elementId}`)

  if (element) {
    const computedStyle = window.getComputedStyle(element)

    return {
      "computedStyle": computedStyle,
      "metadata": {
        "z-index": computedStyle.zIndex
      },
      "width": parseInt(computedStyle.width),
      "height": parseInt(computedStyle.height),
      "inside": {
        "center": {
          "y": (parseInt(computedStyle.height) / 2),
          "x": (parseInt(computedStyle.width) / 2)
        },
        "angle": {
          "topLeft": {
            "y": 0,
            "x": 0,
          },
          "topRight": {
            "y": 0,
            "x": (parseInt(computedStyle.width))
          },
          "bottomRight": {
            "y": -(parseInt(computedStyle.height)),
            "x": (parseInt(computedStyle.width))
          },
          "bottomLeft": {
            "y": -(parseInt(computedStyle.height)),
            "x": 0
          }
        }
      },
    }
  } else {
    console.warn(`Error for ${elementId}`)
  }
}

const Utils = {
  getDomElementDimensionsAndStyle
}
export default Utils;
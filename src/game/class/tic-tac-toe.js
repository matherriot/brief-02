export class TicTacToe extends HTMLDivElement {
  #squareSize;
  #timePerRound;
  constructor(squareSize, timePerRound) {
    super();
    this.squareSize = squareSize;
    this.#timePerRound = timePerRound;
  }
}
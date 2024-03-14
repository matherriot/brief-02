import Utils from "./../../utils/index.js";

export class ThemeProvider {
  #isDark;
  #darkClassName;
  constructor(darkDefault, darkClassName){
    this.#darkClassName = darkClassName;
    if (darkDefault) {
      this.#isDark = true;
    }
  }

  toggleTheme() {
    if (this.#isDark) {
      return Utils.dom.body().classList.remove(`${this.#darkClassName}`)
    }
    if (!this.#isDark) {
      return Utils.dom.body().classList.add(`${this.#darkClassName}`)
    }
  }

  setColorTheme(theme) {
    if (a) {
      
    }
  }

}
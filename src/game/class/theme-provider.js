export class ThemeProvider {
  #isDarkDefault;
  #isDark;
  #darkClassName;
  #lightClassName;
  constructor(darkDefault, darkClassName, lightClassName){
    this.#isDarkDefault = darkDefault | false;
    this.#darkClassName = darkClassName;
    this.#lightClassName = lightClassName;
  }

  setTheme(theme) {
    if (theme === "dark") {
      this.#isDark = true
    }
    if (theme === "light") {
      this.#isDark = false
    }
    this.#isDark = theme
  }

}
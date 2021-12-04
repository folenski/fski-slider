/**
 * Class Slider, permet de générer un défilement des images
 *
 * ex : Sli = new Slider( document.querySelector(".slider") )
 *
 * le 27/11 - re ecriture en typescript
 */

export class Slider {
  private _element?: HTMLElement;
  private _imgs?: NodeListOf<HTMLImageElement>;
  private _span = document.createElement("span");
  private _current = 0;
  private _imgsIndex = 0;
  private _transitionClass: string[] = new Array();
  timer = 3;
  transitionClassDef = "done";

  constructor(element: HTMLElement) {
    this._element = element;
    // Initialisation du delay
    this.timer = element.dataset.delay
      ? parseInt(element.dataset.delay)
      : this.timer;
    if (this.timer == 0) this.timer = 1;
    this.timer *= 1000;
    // Transition par défaut
    this.transitionClassDef = element.dataset.transition
      ? element.dataset.transition
      : this.transitionClassDef;
    this.doInit(this._element);
  }

  /**
   * Initllisation du slider
   *
   * @param element
   * @returns
   */
  doInit = (element: HTMLElement): void => {
    this._imgs = element.querySelectorAll("img");
    if (!this._imgs) return;

    this._imgsIndex = this._imgs.length - 1;
    if (this._imgsIndex <= 0) {
      this._element = undefined;
      return;
    }

    element.appendChild(this._span);

    // initialisation du tableau des images
    this._imgs.forEach((el, key) => {
      el.style.opacity = key == 0 ? "1" : "0";
      if (el.dataset.transition)
        this._transitionClass.push(el.dataset.transition);
      else this._transitionClass.push(this.transitionClassDef);
    });

    if (this._imgs[this._current].alt) {
      this._span.innerHTML = this._imgs[this._current].alt;
      setTimeout(() => {
        this._span.classList.add(this._transitionClass[this._current]);
      }, 1);
    }
    // lancement du slide
    window.addEventListener("load", () => {
      setInterval(() => {
        window.requestAnimationFrame(() => {
          this.doSlide();
        });
      }, this.timer);
    });
  };

  /**
   * methode effectuer un défilement
   * @returns
   */
  doSlide = (): void => {
    if (!this._imgs || !this._element) return;
    this._span.classList.remove(this._transitionClass[this._current]);
    this._span.style.opacity = "0";

    this._imgs[this._current].style.opacity = "0";
    this._current = this._current == this._imgsIndex ? 0 : this._current + 1;
    this._imgs[this._current].style.opacity = "1";

    if (this._imgs[this._current].alt) {
      const texte = this._imgs[this._current].alt;

      setTimeout(() => {
        this._span.innerHTML = texte;
        this._span.style.opacity = "1";
        this._span.classList.add(this._transitionClass[this._current]);
      }, 300);
    }
  };

  /**
   * map les elements de class .slider afin lui apporter un comportement "slider"
   * @returns Promise<any>
   */
  static async bind(): Promise<any> {
    return Array.from(document.querySelectorAll(".slider")).map((element) => {
      if (element instanceof HTMLElement) return new Slider(element);
    });
  }
}

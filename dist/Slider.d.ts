/**
 * Class Slider, permet de générer un défilement d'images
 *
 * 27/11/21 - re ecriture en typescript
 * 12/12/21 - petit changement sur le code
 */
export declare class Slider {
    private _element?;
    private _imgs?;
    private _span;
    private _current;
    private _imgsIndex;
    private _transitionClass;
    timer: number;
    timerSpan: number;
    transitionClassDef: string;
    constructor(element: HTMLElement);
    /**
     * Initialisation du slider
     *
     * @param element
     * @returns
     */
    doInit: (element: HTMLElement) => void;
    /**
     * methode effectuer un défilement
     * @returns
     */
    doSlide: () => void;
    /**
     * map les elements de class .slider afin lui apporter un comportement "slider"
     * @returns Promise<any>
     */
    static bind(): Promise<any>;
}

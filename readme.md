# fski-slider

## Fonctionnalité

- Permet d'effectuer un défilement d'images et affiche le texte de l'attribut "alt" de l'image en légende

## Nagivateurs testés

Chrome | Firefox| Edge | 
--- | --- | --- | 
Latest ✔ | Latest ✔ |  Latest ✔ | 

## Installation

Using npm:

```bash
$ npm install fski-slider
```

## Example

Activation en javascript
```js
import { Slider } from "fski-slider";
Slider.bind();
```

Sur la page html, on doit passer l'attribut data-delay (valeur en seconde) et l'attribut data-transition une classe de transition pour le texte ( facultatif ), la valeur par défaut étant "done".

Sur les images, on peut changer la transition par défaut.
```html
    <div class="slider" data-delay="5" data-transition="done">
      <img src="img/pic1.png" alt="test1" />
      <img src="img/pic3.png" alt="test3" />
      <img src="img/pic5.png" alt="reprise test5" data-transition="up" />
    </div>
```

Exemple du style à appliquer pour avoir l'effet 
```css
    .slider {
      position: relative;
      width: 300px;
      display: block;
    }

    .slider img {
      opacity: 0;
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      z-index: 10;
      transition: opacity 1.5s ease-out;
    }
    .slider img:nth-child(1) {
      position: relative;
    }

    .slider span {
      position: absolute;
      z-index: 20;
    }
    .slider span.done {
      font-size: 1.2rem;
      text-shadow: 1px 1px 4px #888888;
      font-weight: 600;

      width: 100%;
      top: 0;
      text-align: center;
      transform: translateY(+50px);
      transition: transform 1s ease-out;
    }
    .slider span.up {
      font-size: 1rem;
      color: chartreuse;
      font-weight: 600;

      width: 100%;
      bottom: 0;
      text-align: center;
      transform: translateY(-50px);
      transition: transform 1s ease-out;
    }
```

## Resources

## License
[MIT](LICENSE)